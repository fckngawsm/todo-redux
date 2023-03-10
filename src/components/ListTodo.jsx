import React from "react";
import { Container } from "@mui/system";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";

function ListTodo() {
  return (
    <Container>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </List>
    </Container>
  );
}

export default ListTodo;
