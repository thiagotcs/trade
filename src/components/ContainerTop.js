import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Image from '../assets/trade.png';

export default function ContainerTop() {
  return (
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          <img src={Image} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
