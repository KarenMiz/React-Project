import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import NavBarLink from '../../../../routes/components/NavBarLink';

export default function LogoIcon({to}) {
  return (
    <NavBarLink to={to}>
    <IconButton >
      <Avatar src="/assets/images/business-card.png" alt='Business card icon'/>
    </IconButton>
    </NavBarLink>
  );
}
