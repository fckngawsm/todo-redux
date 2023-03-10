import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <Container sx={{ display: "flex" , borderTop:'1px solid white' , paddingTop:'20px'}}>
      <Typography  mr="10px" >{new Date().getFullYear()}</Typography>
      <CopyrightIcon/>
      <Typography>Кирилл</Typography>
    </Container>
  );
}

export default Footer;
