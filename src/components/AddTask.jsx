import React, { useState } from "react";
import { Button, Container, FormControl, Input } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todos-action";

function AddTask() {
  const [value, setValue] = useState("");
  console.log(value)
  const dispatch = useDispatch();
  const handleAddTodo = (text) => {
    dispatch(addTodo(text));
    setValue("");
  };
  return (
    <Container sx={{ mt: 5 }}>
      <FormControl
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Input
          fullWidth={true}
          inputProps={{ style: { color: "white" } }}
          variant="standard"
          placeholder="Add new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          sx={{ width: 200, ml: 15, borderRadius: 3 }}
          variant="contained"
          onClick={() => handleAddTodo(value)}
        >
          Add
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddTask;
