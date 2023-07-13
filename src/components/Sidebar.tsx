import { AspectRatio, Box, Container, Flex, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Sidebar() {
  return (

    <Box w='230px' h='900px' bgGradient='linear(to-l, #EC108C, #F8801E)' >
      <Box marginLeft="50px">
        <Box width="80px" height="45px" display="flex" color="white" >
          <Image src='Image/meta1.svg' /> <Text fontSize="2xl" fontFamily="sans-serif" color="white" textAlign="right">CareShield</Text>
        </Box>
        <Box marginBottom="50px" style={{ backgroundImage: 'url("Image/grow.svg")' }} width="200px" height="100px" display="flex" alignItems="center">
          <Image src='Image/grid-fill.svg' />
          <Text color="#EF2973">Dasboard</Text>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="50px">
          <Image src='Image/basil_location-solid.svg' />
          <Text fontFamily="sans-serif" color="white" textAlign="right">Track on Map</Text>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="50px">
          <Image src='Image/fluent_app-span-16-filled.svg' />
          <Text fontFamily="sans-serif" color="white" textAlign="right">Recent Activities</Text>
        </Box>
        <Box marginBottom="50px" display="flex" alignItems="center">
          <Image src='Image/fluent_phone-screen-time-20-filled.svg' />     <Text fontFamily="sans-serif" color="white" textAlign="right">Screen Time</Text>
        </Box>
        <Box marginBottom="50px" display="flex" alignItems="center">
          <Image src='Image/appIcom.svg' />   <Text fontFamily="sans-serif" color="white" textAlign="right">Apps Control</Text>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="50px">
          <Image src='Image/alert.svg' />   <Text fontFamily="sans-serif" color="white" textAlign="right">Alerts</Text>

        </Box>
        <Box display="flex" alignItems="center" marginBottom="50px">
          <Image src='Image/ri_account-pin-box-fill.svg' />  <Text fontFamily="sans-serif" color="white" textAlign="right">Account </Text>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="150px" >
          <Image src='Image/setting.svg' /> <Text fontFamily="sans-serif" color="white" textAlign="right">Setting</Text>

        </Box>

        <Box display="flex" alignItems="center" marginBottom="50px">
          <Image src='Image/logout.svg' /> <Text fontFamily="sans-serif" color="white" textAlign="right">Logout</Text>

        </Box>

      </Box>
    </Box>
  )
}
