import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import Stack from "@mui/material/Stack";

function Login() {
  let navigate = useNavigate();
  let from = navigate.state?.from?.pathname || "/";

  return (
    <Stack sx={{ p: 4, alignItems: "center" }}>
      <LoginForm />
    </Stack>
  );
}

export default Login;
