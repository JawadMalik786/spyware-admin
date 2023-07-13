import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Navbar() {
  return (

      <Box  display="flex" width="1300px" height="50px" marginLeft="210px" >

        <Text marginLeft="70px" marginTop="8px">Dashboard</Text>  
        <Box marginLeft="800px" marginTop="8px">
        <Image src='Image/man.svg'/>
          </Box>  
      </Box>
  )
}

