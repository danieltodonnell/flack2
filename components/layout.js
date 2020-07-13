import { Box } from "@chakra-ui/core";
import { Grid, Heading, Link, Flex, Stack } from "@chakra-ui/core";
import Header from "./header";
import Footer from "./footer";

function Layout({ children }) {
  return (
    <Flex flexDirection="column" minH="100vh">
      <Flex>
        <Heading>Heading title</Heading>
      </Flex>
      <Flex flex={1}>
        <Flex flexDirection="column" flex="0 0 20vw" bg="tomato">
          Side Menu
        </Flex>
        <Flex flexDirection="column" flex={1} bg="salmon">
          {children}
        </Flex>
      </Flex>
      <Flex bg="grey">
        Footer
      </Flex>
    </Flex>
  );
}

export default Layout;
