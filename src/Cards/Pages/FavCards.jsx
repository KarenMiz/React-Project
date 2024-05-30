import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";
import CardsFeedback from "../Components/CardsFeedback";
import AddNewCardButton from "../Components/AddNewCardButton";
import PageHeader from "../../component/PageHeader";
import useCards from "../hooks/useCards";

export default function FavCards() {
    const { value, handleGetFavCards, handleCardsDelete, handleCardsLike } = useCards();

    const { filterCard, error, isLoading } = value;

    const { user } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate(ROUTES.CARDS);
        } else {
            handleGetFavCards();
        }
    }, [user, handleGetFavCards, navigate]);

    const handleDelete = async (id) => {
        await handleCardsDelete(id);
        await handleGetFavCards();
    };

    const handleLike = async (id) => {
        await handleCardsLike(id);
        await handleGetFavCards();
    };

    return (
        <div>
            <Container >
                <PageHeader
                    title="My Favorite Cards"
                    subtitle="On this page are all the cards you liked"
                />
                <CardsFeedback
                    isLoading={isLoading}
                    error={error}
                    cards={filterCard}
                    handleCardsDelete={handleDelete}
                    handleCardsLike={handleLike}
                />
                <AddNewCardButton />
            </Container>
        </div>
    );
}