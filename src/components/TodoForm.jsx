import React from "react";
import {
  Box,
  Flex,
  Input,
  Button,
  List,
  ListItem,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";

function TodoForm() {
  const initialState = JSON.parse(localStorage.getItem("submit")) || [];
  const [input, setInput] = useState("");
  const [submit, setSubmit] = useState(initialState);

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const submitTask = () => {
    if (input.trim() !== "") {
      const editedTask = submit.findIndex((task) => task === input);
      if (editedTask !== -1) {
        const newTask = [...submit];
        newTask.splice(editedTask, 1, input);
        setSubmit(newTask);
      } else {
        setSubmit([...submit, input]);
      }
      setInput("");
    }
  };

  const removeTask = (index) => {
    const newTask = [...submit];
    newTask.splice(index, 1);
    setSubmit(newTask);
  };

  const editTask = (index) => {
    const editedTask = submit[index];
    setInput(editedTask);
    removeTask(index);
  };

  useEffect(() => {
    localStorage.setItem("submit", JSON.stringify(submit));
  }, [submit]);

  return (
    <div>
      <Flex justify="flex-start" alignItems="center" ml="15%">
        <Box width="50%" mt="10%">
          <Input typeof="text" value={input} onChange={handleChange} />
          <Button onClick={submitTask}>Submit task</Button>
        </Box>
      </Flex>
      <List ml="14%" mt="15px">
        {submit.map((item, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between">
            {item}
            <Flex>
              <IconButton
                aria-label="Edit task"
                icon={<EditIcon />}
                mr={3}
                onClick={() => editTask(index)}
              />
              <IconButton
                aria-label="Remove task"
                icon={<CloseIcon />}
                onClick={() => removeTask(index)}
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default TodoForm;
