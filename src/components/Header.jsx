import { AppBar, IconButton, Input, Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import { Container, Stack } from "@mui/system";

function Header() {
  return (
    <AppBar
      position="static"
      sx={{ background: "black", alignItems: "center" }}
    >
      <Container sx={{mt:4}} style={{ padding: "0"}}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Stack>
            <Typography
              sx={{ flexGrow: 1 }}
              fontSize="30px"
              variant="h1"
              component="h1"
              color="primary"
            >
              ToDo
            </Typography>
            <Typography
              sx={{ flexGrow: 1 }}
              fontSize="20px"
              variant="h2"
              component="h2"
              color="primary"
            >
              manage your affairs directly on the site
            </Typography>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Input inputProps={{ style: { color: "white" } }} color="primary" placeholder="Find task" />
            <IconButton style={{ color: "white" }}>
              <SearchIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
