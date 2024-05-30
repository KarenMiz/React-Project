import { useCallback, useEffect, useMemo, useState } from "react";
import { getCards, getMyCards, editCard, getCard, createCard, deleteCard, changeLikeStatus } from "../services/cardsApiServices";
import ROUTES from "../../routes/routesModel";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../providers/SnackbarProvider";
import normalizeCard from "../helpers/normalization/normalizeCard";
import { useUser } from "../../users/providers/UserProvider";


export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const setSnack = useSnack();
  const [filterCard, setFilterCard] = useState(null);
  const [query, setQuery] = useState("");
  const [searchParams] = useSearchParams();
  const { user } = useUser();
  useAxios();

  useEffect(() => {
    setQuery(searchParams.get("q") ?? "");
  }, [searchParams]);


  useEffect(() => {
    if (Array.isArray(cards)) {
      setFilterCard(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setIsLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, [setSnack]);

  const getCardById = useCallback(async (id) => {
    try {
      setError(null);
      setIsLoading(true);
      const data = await getCard(id);
      setCard(data);
      return data;
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);
      try {
        const card = await createCard(normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );

  const handleCardsDelete = useCallback(async (id) => {
    setIsLoading(true);
    try {
      await deleteCard(id);
      setCards((prevCards) => {
        const updatedCards = prevCards.filter(card => card._id !== id);
        setFilterCard(updatedCards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        ));
        return updatedCards;
      });
      setSnack("success", "The business card has been successfully deleted");
      setTimeout(() => {
        navigate(ROUTES.ROOT);
      }, 1000);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [setSnack, query, navigate]);




  const handleCardsLike = useCallback(
    async (cardId) => {
      try {
        const updatedCard = await changeLikeStatus(cardId);
        setCards((prevCards) =>
          prevCards.map((card) => (card._id === cardId ? updatedCard : card))
        );
        setSnack("success", "The business card has been liked/unliked");
      } catch (error) {
        requestStatus(false, error, null);
      }
    },
    [setSnack]
  );


  const handleGetFavCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getCards();
      const favCards = cards.filter((card) => card.likes.includes(user._id));
      requestStatus(false, null, favCards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [user]);


  const handleGetMyCards = useCallback(async () => {
    try {
      setIsLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);


  const value = useMemo(() => {
    return { isLoading, cards, card, error, filterCard };
  }, [isLoading, cards, card, error, filterCard]);

  return { value, cards, card, error, isLoading, filterCard, user, query, requestStatus, getAllCards, getCardById, handleCardsDelete, handleCardsLike, handleCreateCard, handleUpdateCard, handleGetFavCards, handleGetMyCards };
}
