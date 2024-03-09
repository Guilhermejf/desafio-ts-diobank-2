import "./Header.css";
import { Button, Box, Center, ChakraProvider, Input } from "@chakra-ui/react";

export const Header = () => {
  return (
    <Center>
      <Box
        fontSize={"2rem"}
        padding={".8rem"}
        letterSpacing={"1.3rem"}
        fontWeight="bold"
      >
        Dio Bank
      </Box>
    </Center>
  );
};
