import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Stack } from "@mui/system";

function Filter() {
  const filter = useParams();
  return (
    <Container sx={{ marginTop: "20px" }}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          borderBottom: "1px solid white",
          padding: "10px",
        }}
      >
        <Link
          style={{
            color: filter === "completed" ? "red" : "white",
            textDecoration: "none",
            cursor: "pointer",
          }}
          to="/completed"
        >
          Completed
        </Link>
        <Link
          style={{
            color: filter === "important" ? "red" : "white",
            textDecoration: "none",
            cursor: "pointer",
          }}
          to="/important"
        >
          Important
        </Link>
        <Link
          style={{
            color: filter === "remote" ? "red" : "white",
            textDecoration: "none",
            cursor: "pointer",
          }}
          to="/remote"
        >
          Remote
        </Link>
      </Stack>
    </Container>
  );
}

export default Filter;
