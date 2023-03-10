import React from "react";
import { Button, Container, FormControl, Input } from "@mui/material";

function AddTask() {
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
        />
        <Button
          sx={{ width: 200, ml: 15, borderRadius: 3 }}
          variant="contained"
        >
          Add
        </Button>
      </FormControl>
    </Container>
  );
}

export default AddTask;
