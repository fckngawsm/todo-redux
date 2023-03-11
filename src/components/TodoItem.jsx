import React from "react";
import { useDispatch } from "react-redux";
import { Button, ListItem, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/Task";
import GradeIcon from "@mui/icons-material/Grade";
import { removeTodo } from "../store/todos/todos-action";

function TodoItem({ text, id }) {
  const dispatch = useDispatch();
  return (
    <ListItem
      sx={{
        width: "100%",
        border: "1px solid white",
        borderRadius: 4,
        mt: "10px",
        padding: "10px",
        justifyContent: "space-between",
      }}
    >
      <Typography
        sx={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
        }}
        fontSize="20px"
      >
        {text}
      </Typography>
      <Stack sx={{ display: "flex", flexDirection: "row", width: "200px" }}>
        <Button
          sx={{
            border: "none",
            outline: "none",
            padding: "0",
            ":hover": {
              bgcolor: "black",
            },
          }}
          onClick={() => dispatch(removeTodo(id))}
        >
          <DeleteIcon />
        </Button>
        <Button
          sx={{
            border: "none",
            outline: "none",
            padding: "0",
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          <TaskIcon />
        </Button>
        <Button
          sx={{
            border: "none",
            outline: "none",
            padding: "0",
            pr: "0",
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          <GradeIcon />
        </Button>
      </Stack>
    </ListItem>
  );
}

export default TodoItem;
