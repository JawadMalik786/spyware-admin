import { AspectRatio, Box, Container, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Track() {
  return (
    <main>
      <Container>
        <Box backgroundColor="#353535" textColor="white" textAlign="center" height="120px" marginBottom="50px">
          <Text fontWeight="bold" fontFamily="cursive" fontSize="65px" lineHeight="85px">
            Admin Dashboard
          </Text>
        </Box>
      </Container>

      <Container>
        <Flex marginInlineStart="160px" width="1600px" height="50px" textAlign="right">
          Dashboard
        </Flex>
      </Container>
      <Container>
        <Box marginInlineStart="40px" width="200px" height="900px" bgColor="lightpink" >

          <Text fontFamily="sans-serif" color="white" width="155px" height="41px" textAlign="right">CareShield</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Track on Map</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Recent Activities</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Screen Time</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Apps Control</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Alerts</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Account </Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Setting</Text>
          <Text fontFamily="sans-serif" color="white" width="88px" height="18px" textAlign="right">Logout</Text>

          



        </Box>


      </Container>
    </main>
  )
}
