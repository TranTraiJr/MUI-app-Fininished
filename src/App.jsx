import { Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginModal from "./components/LoginModal";
import JobDetailModal from "./components/JobDetailModal";

import { AuthProvider } from "./auth/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route
            path="*"
            element={
              <main>
                <p>There nothing here!</p>
              </main>
            }
          />

          <Route
            path="/job/:id"
            element={
              <ProtectedRoute>
                <JobDetailModal />
              </ProtectedRoute>
            }
          />

          <Route path="/loginmodal" element={<LoginModal />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
