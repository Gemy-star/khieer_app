import React from 'react';
import Header from "../../Components/Layout/Header";
// import Footer from "../../Components/Layout/Footer";
import {Box} from './Box'

const AppLayout = ({ children }) =>  {
    return (
    <Box
    css={{
      maxW: "100%"
    }}
  >
    <Header/>
     {children}
  </Box>
)
}


export default AppLayout;