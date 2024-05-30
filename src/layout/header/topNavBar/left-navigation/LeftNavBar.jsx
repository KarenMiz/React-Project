import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../the-logo/LogoIcon'
import Logo from '../the-logo/Logo'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'
import { useTheme } from '../../../../providers/CustomThemeProvider'

export default function LeftNavBar() {
    const {isDark} = useTheme();
    const generateSx = () => ({
        color: isDark ? "#F7F9F9" : "#080303",
    });
    return (
        <Box>
            <LogoIcon to={ROUTES.CARDS} label={"Cards"} />
            <Logo to= {ROUTES.CARDS} label={"Cards"} />
            <NavItem to={ROUTES.CARDS} label={"Cards"}  sx={generateSx()} />
            <NavItem to={ROUTES.ABOUT} label={"About"} sx={generateSx()} />
            <NavItem to={ROUTES.SANDBOX} label={"Sand Box"} sx={generateSx()}/>
        </Box>
    );
}
