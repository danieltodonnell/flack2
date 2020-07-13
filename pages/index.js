import { useState, useEffect } from 'react'
import NextLink from 'next/link'
import Layout from '../components/layout'
import { client } from '../lib/db'


import { Heading, Link, Flex } from '@chakra-ui/core'
import { useDisclosure } from "@chakra-ui/core"
import { Button } from "@chakra-ui/core"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/core"

function Home(props) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [items, setItems] = useState()
  useEffect(() => {
    const data = [ {id:1, name:'first'}, {id:2, name:'second'}]
    setItems(data)
  }, [])

  return (
    <Layout>
          <NextLink href='/' passHref>
            <Link>Home</Link>
          </NextLink>
            {console.log("index.js served")}
            {items && items.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          <Button  onClick={onOpen} variantColor="green">Button</Button>
    </Layout>
  )
}

export default Home;