import React, { useState } from "react";
import { Box, Flex, Input, Button } from "@chakra-ui/react";

function TodoForm(props) {
  const { handleSubmit, input, setInput } = props;
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setInput(event.target.value);
    setError("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (input.trim() === "") {
      setError("Task cannot be empty");
    } else {
      handleSubmit(input);
    }
  };
  return (
    <div>
      <Flex justify="flex-start" alignItems="center" ml="15%">
        <Box width="50%" mt="10%">
          <Input typeof="text" value={input} onChange={handleInputChange} />
          <Button onClick={handleFormSubmit}>ADD TASK</Button>
        </Box>
      </Flex>
    </div>
  );
}

export default TodoForm;
