import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useTheme } from "../../providers/CustomThemeProvider";
import { useUser } from "../../users/providers/UserProvider";

export default function AddNewCardButton() {
  const navigate = useNavigate();
  const {user} = useUser();
  const { isDark } = useTheme();
  return (
    <Box>
       {user && (user.isAdmin || user.isBusiness) ? (
    <Fab
      color={isDark ? "default" : "primary"}
      aria-label="add"
      sx={{
        bgcolor: isDark ? "#000" : "#fff",
        color: isDark ? "#F7F9F9" : "primary.main",
        position: "fixed",
        bottom: 75,
        right: 16,
      }}
      onClick={() => {
        navigate(ROUTES.CREATE_CARD);
      }}
    >
      <AddIcon />
    </Fab>
       ): null}
    </Box>
  );
}
