import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { useMenu } from "../menu/MenuProvider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme as useMuiTheme } from "@mui/material/styles";


const Logged = () => {
  const muiTheme = useMuiTheme();
  const setOpen = useMenu();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down('md'));



  return (
    <>
      {isMobile ? (

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mr: 2 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
        </Box>
      ) : (
        <Tooltip title="Open settings">
          <IconButton
            sx={{ p: 0, display: "inline-flex", marginLeft: 2 }}
            onClick={() => setOpen(true)}
          >
            <Avatar alt="avatar" src="/assets/images/avater.png" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};

export default Logged;