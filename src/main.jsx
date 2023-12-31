import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, theme } from '@chakra-ui/react'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
</React.StrictMode>)