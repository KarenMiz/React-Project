import { Typography } from '@mui/material'
import NavBarLink from '../../../../routes/components/NavBarLink';
import { useTheme } from '../../../../providers/CustomThemeProvider';


export default function Logo({ to }) {
  const {isDark} = useTheme();
  return (
    <>
      <NavBarLink sx={{color: isDark? "#F7F9F9" : "#080303",}} to={to}>
        <Typography variant='h4' sx={{ marginRight: 2, fontFamily: "fantasy", display: { sx: "none", md: "inline-flex" } }}>
          BCard
        </Typography>
      </NavBarLink>

    </> 
  );
}

