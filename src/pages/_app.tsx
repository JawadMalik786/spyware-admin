import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, ThemeProvider, extendTheme, theme } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {

  const spacing={
    space:{
      px:'1px'
    },
  }
  const theme = extendTheme({
    ...spacing
  })
    return(
  <ChakraProvider theme={theme}>
       <Component {...pageProps} />
  </ChakraProvider>
  );
}
