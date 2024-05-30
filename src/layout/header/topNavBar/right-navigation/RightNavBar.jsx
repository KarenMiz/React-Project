import { Box, CardActions, IconButton, Tooltip } from "@mui/material";
import Logged from "./Logged";
import NotLogged from "./NotLogged";
import { useUser } from "../../../../users/providers/UserProvider";
import { useTheme } from "../../../../providers/CustomThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchBar from "./SearchBar";

export default function RightNavBar() {
  const { user } = useUser();
  const { isDark, toggleDarkMode } = useTheme();

  return (
    <>
      <Box
        sx={{
          display: { md: "inline-flex" },
          alignItems: "center",
        }}
      >
        <Box sx={{ display: {xs: "none",  md: "inline-flex"  }}}>
        <SearchBar />
        <CardActions>
          <Tooltip title="Dark/Light Mode">
            <IconButton sx={{ ml: 1 }} onClick={toggleDarkMode}>
              {isDark ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>
          </CardActions>

        </Box>
        {user && <Logged />}
        {!user && <NotLogged />}
      </Box>
    </>
  );
}

