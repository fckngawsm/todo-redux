import React from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import "../fonts/inter.css";
import ListTodo from "./ListTodo";
function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ListTodo />
    </div>
  );
}

export default App;
