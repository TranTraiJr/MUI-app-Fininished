import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/loginmodal");
    },
    [navigate, isAuthenticated]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;
