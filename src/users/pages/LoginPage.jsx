import React from "react";
import useForm from "../../forms/hooks/useForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";
import Container from "@mui/material/Container";
import Form from "../../forms/components/Form";
import ROUTES from "../../routes/routesModel";
import Input from "../../forms/components/Input";
import PageHeader from "../../component/PageHeader";
import { Navigate, Link } from "react-router-dom";
import useUsers from "../hooks/useUsers";
import { useUser } from "../providers/UserProvider";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Button, Grid } from "@mui/material";

export default function LoginPage() {
  const { handleLogin } = useUsers();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialLoginForm, loginSchema, handleLogin);
  const { user } = useUser();

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSubmit(); 
    }
  };
  if (user) return <Navigate to={ROUTES.ROOT} replace />
  return (
    <Container>
      <PageHeader
        title="Welcome to Login page"
        subtitle="here you can log in"
      />
      <Container
        sx={{
          paddingTop: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Form
          title="login"
          styles={{ maxWidth: "450px" }}
          to={ROUTES.ROOT}
          onSubmit={onSubmit}
          onReset={handleReset}
          validateForm={validateForm}
        >
          <Input
            label="email"
            name="email"
            type="email"
            error={errors.email}
            onChange={handleChange}
            data={data}
            onKeyPress={handleKeyPress}
          />
          <Input
            label="password"
            name="password"
            type="password"
            error={errors.password}
            onChange={handleChange}
            data={data}
            onKeyPress={handleKeyPress}
          />
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component={Link}
              to={ROUTES.SIGNUP}
              startIcon={<AccountBoxIcon />}
              sx={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Grid>
        </Form>
      </Container>
    </Container>
  );
}
