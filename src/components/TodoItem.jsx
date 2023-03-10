import { Button, ListItem, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import TaskIcon from "@mui/icons-material/Task";
import React from "react";

function TodoItem({ text }) {
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
      <Typography fontSize="20px">{text}</Typography>
      <Stack sx={{ display: "flex", flexDirection: "row" }}>
        <Button
          sx={{
            border: "none",
            outline: "none",
            pr: "0",
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          <DeleteIcon />
        </Button>
        <Button
          sx={{
            border: "none",
            outline: "none",
            ":hover": {
              bgcolor: "black",
            },
          }}
        >
          <TaskIcon />
        </Button>
      </Stack>
    </ListItem>
  );
}

export default TodoItem;
