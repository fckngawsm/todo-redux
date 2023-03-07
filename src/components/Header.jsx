import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import React from 'react'

function Header() {
  return (
    <AppBar>
        <Toolbar>
            <Typography>
                ToDo
            </Typography>
            <IconButton>
                <FormatListBulletedIcon/>
            </IconButton>
        </Toolbar>
    </AppBar>
  )
}

export default Header