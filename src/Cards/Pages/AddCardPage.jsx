import React from "react";
import { Navigate } from "react-router-dom";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import { Container } from "@mui/material";
import CardForm from "../Components/CardForm";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import cardSchema from "../models/cardSchema";


export default function AddCardPage() {
  const { user } = useUser();
  const { handleCreateCard } = useCards();
  const { data, errors, handleChange, handleReset, validateForm, onSubmit } =
    useForm(initialCardForm, cardSchema, handleCreateCard) 
    

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="add card"
        onSubmit={onSubmit}
        onReset={handleReset}
        errors={errors}
        validateForm={validateForm}
        onInputChange={handleChange}
        data={data}
      />
    </Container>
  );
}
