import React from "react";
import { Container } from "@mui/system";
import TodoItem from "./TodoItem";
import { List } from "@mui/material";
import { selectTodo } from "../store/todos/todos-selectors";
import { useSelector } from "react-redux";
function ListTodo() {
  const todos = useSelector(selectTodo);
  return (
    <Container>
      <List sx={{ display: "flex", flexDirection: "column" }}>
        {todos.map((todo , index) => {
          return <TodoItem text={todo.title} key={index}/>;
        })}
      </List>
    </Container>
  );
}

export default ListTodo;
