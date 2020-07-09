import { Box } from "@chakra-ui/core";
import { Grid, Heading, Link, Flex, Stack } from "@chakra-ui/core";
import Header from './header'
import Footer from './footer'

function Layout({ children }) {
  
  return (
    <Flex flexDirection="column">
      <Flex flexDirection="column" bg="silver" alignItems="center">
        <Header />
      </Flex>
      <Flex flexDirection="column" alignItems="center">
        {children}
      </Flex>
      <Footer />
    </Flex>
  );
}

export default Layout;
