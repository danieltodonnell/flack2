import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {
  return (
    <Flex flexDirection="column" bg="silver" alignItems="center">
      Footer
    </Flex>
  );
};

export default Header;
