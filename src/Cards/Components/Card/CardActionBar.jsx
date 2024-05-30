import { Box, CardActions, IconButton, Tooltip } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from '../../../users/providers/UserProvider';
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import CardDeleteDialog from "../CardDeleteDialog";


export default function CardActionBar({
  handleCardsDelete,
  handleCardsLike,
  cardId,
  userId,
  likes,
  phone,
}) {

  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const [isLiked, setIsLiked] = useState(() => likes && likes.includes(user?._id));
  const navigate = useNavigate();

  const handleDelete = async () => {
    await handleCardsDelete(cardId);
    setDialog(false);
  };

  const handleLike = async () => {
    await handleCardsLike(cardId);
    setIsLiked((prev) => !prev);

  }

  const handleCardEdit = (id) => {
    console.log("navigate to edit page for card " + id);
    navigate(ROUTES.EDIT_CARD + "/" + id);
  };

  return (
    <>
      <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
        <Box>
          {user && (user.isAdmin || user._id === userId) ? (
            <>
              <IconButton
                aria-label="Delete Card"
                onClick={() => setDialog(true)}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton onClick={() => handleCardEdit(cardId)}>
                <ModeEditIcon />
              </IconButton>
            </>
          ) : null}
        </Box>

        <Box>
          <a href={"tel:" + phone}>
            <IconButton aria-label="Call">
              <CallIcon />
            </IconButton>
          </a>
          {user && (
            <Tooltip title={isLiked ? "Remove the card from your favorites" : "Do you like this card?"}>
              <IconButton aria-label="Add to favorite" onClick={handleLike}>
                <FavoriteIcon color={isLiked ? "error" : "inherit"} />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDelete}
      />
    </>
  );
}