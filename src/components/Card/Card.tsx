import { Box, Center, ChakraProvider, Input } from "@chakra-ui/react";
import Button from "../Button/Button";
import { login } from "../../services/login";

export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#fff" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Box 
          display={"flex"}
          flexDirection={"column"}
          rowGap={"10px"}>
            <Input placeholder="Email" />
            <Input placeholder="Password" />
          <Center>
            <Button text={"Logar"} click={login} />
          </Center>
          </Box>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
