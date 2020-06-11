import NextLink from 'next/link'
import { Heading, Link, Flex } from '@chakra-ui/core'

export default function Home() {
  return (
    <Flex flexDirection="column" alignItems="center" margin={4}>
        <Heading as="h1" size="2xl" className="title" marginY={2}>
          Welcome to Flack
        </Heading>
        <NextLink href='/' passHref>
          <Link>Home</Link>
        </NextLink>
        <p>Let's get this party started!</p>
    </Flex>
  )
}
