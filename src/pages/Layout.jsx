import React from "react";
import { Outlet, Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import NavBar from "../components/NavBar";

function Layout() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <NavBar />
      <Outlet />
      <Box sx={{ flexGrow: 1 }} />
    </Stack>
  );
}

export default Layout;
