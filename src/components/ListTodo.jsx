import React from "react";
import { useSelector } from "react-redux";
import { Container } from "@mui/system";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";
import { selectTodo } from "../store/todos/todos-selectors";

function ListTodo() {
  const todos = useSelector(selectTodo);
  return (
    <Container sx={{minHeight:'70vh' , mb:'10px'}} >
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todo, index) => {
          return <TodoItem id={todo.id} text={todo.title} key={index} />;
        })}
      </List>
    </Container>
  );
}

export default ListTodo;
