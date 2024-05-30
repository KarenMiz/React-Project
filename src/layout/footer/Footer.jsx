import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import StyleIcon from "@mui/icons-material/Style";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const styles = {
  footer: {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1000 
  },
  content: {
    paddingBottom: "50px" 
  }
};

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div style={styles.content}>
       
      </div>
      <Paper elevation={3} sx={styles.footer}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="About"
            icon={<InfoIcon />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
          <BottomNavigationAction
            label="Cards"
            icon={<StyleIcon />}
            onClick={() => navigate(ROUTES.CARDS)}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
