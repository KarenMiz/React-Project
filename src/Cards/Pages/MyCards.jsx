import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import useCards from "../hooks/useCards";
import PageHeader from "../../component/PageHeader";
import CardsFeedback from "../Components/CardsFeedback";
import AddNewCardButton from "../Components/AddNewCardButton";

export default function MyCards() {
  const { value, handleGetMyCards, handleCardsDelete, handleCardsLike } =
    useCards();
  const { filterCard, error, isLoading } = value;

  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.CARDS);
    } else {
      handleGetMyCards();
    }
  }, [user, handleGetMyCards, navigate]);

  const handleDelete = async (id) => {
    await handleCardsDelete(id);
    await handleGetMyCards();
  };

  return (
    <div>
      <Container >
        <PageHeader
          title="My All Cards"
          subtitle="These are all the cards you have created"
        />
        <CardsFeedback
          isLoading={isLoading}
          error={error}
          cards={filterCard}
          handleCardsDelete={handleDelete}
          handleCardsLike={handleCardsLike}
        />
        <AddNewCardButton />
      </Container>
    </div>
  );
}