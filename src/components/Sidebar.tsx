import { AspectRatio, Box, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Sidebar() {
  return (
    <main>  
    <Container>
        <Flex>
         <Box w='300px' h='900px' bgGradient='linear(to-l, #EC108C, #F8801E)' >


      <Box width="80px" height="45px" display="flex" color="white"><Image marginLeft="30px" gap="40px" src='Image/meta1.svg' />CareShield</Box>
       <br/><br/> 
       <Image src='Image/basil_location-solid.svg' />
        <Text fontFamily="sans-serif" color="white" width="128px" height="25px" textAlign="right">Track on Map</Text><br/>
    <Image src='Image/fluent_app-span-16-filled.svg'/>          <Text fontFamily="sans-serif" color="white" width="128px" height="25px" textAlign="right">Recent Activities</Text><br/>
     <Image src='Image/fluent_phone-screen-time-20-filled.svg' />     <Text fontFamily="sans-serif" color="white" width="128px" height="25px" textAlign="right">Screen Time</Text><br/>
       <Image src='Image/appIcon.svg'/>   <Text fontFamily="sans-serif" color="white" width="128px" height="25px" textAlign="right">Apps Control</Text><br/>
          <Text fontFamily="sans-serif" color="white" width="88px" height="25px" textAlign="right">Alerts</Text><br/>
          <Text fontFamily="sans-serif" color="white" width="88px" height="25px" textAlign="right">Account </Text><br/>
          <Text fontFamily="sans-serif" color="white" width="88px" height="25px" textAlign="right">Setting</Text><br/><br/>
          <Text fontFamily="sans-serif" color="white" width="88px" height="25px" textAlign="right">Logout</Text>

        </Box>
       </Flex>
      </Container>
    </main>
  )
}
