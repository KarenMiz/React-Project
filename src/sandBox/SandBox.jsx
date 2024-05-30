import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import NavItem from '../routes/components/NavItem'
import { Outlet } from 'react-router-dom';

export default function SandBox() {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="counter" label="Counter Page" sx={{ color: "black" }} />
          <NavItem to="countreis" label="countreis" sx={{ color: "black" }} />
          <NavItem to="FormExample" label="Form Example" sx={{ color: "black" }} />
          <NavItem to="optimization" label="optimization" sx={{ color: "black" }} />
          <NavItem to="context" label="context" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>

      <Container>
        <Outlet />
      </Container>
    </>
  );
}

