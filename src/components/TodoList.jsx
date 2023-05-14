import React from "react";
import { List, ListItem, IconButton, Flex } from "@chakra-ui/react";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";

export default function TodoList(props) {
  return (
    <div>
      <List ml="14%" mt="15px">
        {props.submit.map((item, index) => (
          <ListItem key={index} display="flex" justifyContent="space-between">
            {item}
            <Flex>
              <IconButton
                aria-label="Edit task"
                icon={<EditIcon />}
                mr={3}
                onClick={() => props.handleEdit(index)}
              />
              <IconButton
                aria-label="Remove task"
                icon={<CloseIcon />}
                onClick={() => props.handleRemove(index)}
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
