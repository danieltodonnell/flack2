import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Header = () => {
  return (
    <Heading as="h1" size="2xl" className="title" marginY={2}>
      Flack
    </Heading>
  );
};

export default Header;
