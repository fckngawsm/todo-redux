import React from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import ListTodo from "./ListTodo";
import "../utils/fonts/inter.css";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <AddTask />
      <ListTodo />
      <Footer />
    </div>
  );
}

export default App;
