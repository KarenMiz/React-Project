import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import useForm from "../../forms/hooks/useForm";
import ROUTES from "../../routes/routesModel";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import mapCardToModel from "../helpers/normalization/mapToModel";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import CardForm from "../Components/CardForm";
import cardSchema from "../models/cardSchema";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, getCardById, value, } = useCards();
  const { card } = value;
  const { user } = useUser();
  const {
    data,
    errors,
    setData,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
  } = useForm(initialCardForm, cardSchema, (newCard) =>
    handleUpdateCard(card._id, newCard)
  );
  useEffect(() => {
    getCardById(id).then((data) => {
      const modelCard = mapCardToModel(data);
      setData(modelCard)
    });
  }, [getCardById, setData, id]);

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
      {data && (
        <CardForm
          title="edit card"
          onSubmit={onSubmit}
          onReset={handleReset}
          errors={errors}
          validateForm={validateForm}
          onInputChange={handleChange}
          data={data}
        />
      )}
    </Container>
  );
}