import React from "react";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <Container sx={{ display: "flex" , borderTop:'1px solid white' , paddingTop:'20px'}}>
      <Typography variant="p" component='h4' mr="10px" >{new Date().getFullYear()}</Typography>
      <CopyrightIcon/>
      <Typography variant="p" component='h4'>Кирилл</Typography>
    </Container>
  );
}

export default Footer;
