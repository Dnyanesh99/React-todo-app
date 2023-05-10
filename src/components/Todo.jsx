import React from "react";
import { Text, Box } from "@chakra-ui/react";

function TodoList() {
  return (
    <div>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Text fontSize={24} fontFamily="sans-serif" color="blue.600">
          Daily ToDo
        </Text>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="center" mt={50}>
        <Text ontSize={18} fontFamily="sans-serif" color="blue.600" mr="50%">
          Note Your Daily Task
        </Text>
      </Box>
    </div>
  );
}

export default TodoList;
