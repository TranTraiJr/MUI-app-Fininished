import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useAuth } from "../auth/AuthContext";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const style = {
  bgcolor: "background.paper",
  display: "flex",
  flexDirection: "column",
  width: "300px",
  border: "1px solid",
  padding: "10px",
  borderRadius: "5px",
};

function LoginForm() {
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const navigate = useNavigate();

  const { login, isAuthenticated } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleLogin = (e) => {
    e.preventDefault();

    if (email && password) login(email, password);
  };

  useEffect(
    function () {
      if (isAuthenticated) navigate("/", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  return (
    <Box sx={style} component="form" gap={4}>
      <Typography variant="h4" component="div">
        Login
      </Typography>
      <TextField
        label="Username"
        default="user"
        value={email}
        sx={{ m: 1 }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ m: 1 }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        onClick={handleLogin}
        sx={{ m: 1, width: "10ch" }}
        variant="contained"
      >
        Login
      </Button>
    </Box>
  );
}

export default LoginForm;
