import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const initialState = JSON.parse(localStorage.getItem("submit")) || [];
  const [submit, setSubmit] = useState(initialState);
  const [input, setInput] = useState("");

  const handleSubmit = (input) => {
    if (input.trim() !== "") {
      const editedTask = submit.findIndex((task) => task === input);
      if (editedTask !== -1) {
        const newTask = [...submit];
        newTask.splice(editedTask, 1, input);
        setSubmit(newTask);
        setInput("");
      } else {
        setSubmit([...submit, input]);
        setInput("");
      }
    }
  };

  const handleRemove = (index) => {
    const newTask = [...submit];
    newTask.splice(index, 1);
    setSubmit(newTask);
  };

  const handleEdit = (index, editedTask) => {
    const newTask = [...submit];
    newTask.splice(index, 1, editedTask);
    setSubmit(newTask);
    setInput(editedTask);
  };

  return (
    <Router>
      <TodoForm handleSubmit={handleSubmit} input={input} setInput={setInput} />
      <TodoList
        submit={submit}
        handleRemove={handleRemove}
        handleEdit={handleEdit}
      />
    </Router>
  );
}

export default App;
