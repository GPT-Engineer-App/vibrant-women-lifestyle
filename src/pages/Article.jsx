import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <Box>
      <h2>Article Page</h2>
      <Button as={Link} to="/" colorScheme="teal" variant="outline">
        Go Back
      </Button>
    </Box>
  );
};

export default Article;
