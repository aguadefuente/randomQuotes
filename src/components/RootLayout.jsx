import { Container } from "@mui/material";
import ResponsiveAppBar from "./Appbar";
import { Outlet } from "react-router-dom";
import Copyright from "./Footer";

const RootLayout = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Outlet />
      </Container>
      <Copyright />
    </>
  );
};

export default RootLayout;
