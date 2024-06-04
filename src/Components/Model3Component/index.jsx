import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import Model3Img from "../../assets/Model-3.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function Model3Component() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      backgroundImage={Model3Img}
      backgroundSize={"cover"}
      backgroundPosition={'center'}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      position={'relative'}
    >

      <Heading
        mt={20}
        fontSize={42}
        fontWeight={620}
      >
        Model 3
      </Heading>

      <Heading
        fontSize={17}
        fontWeight={600}
        mt={2}
        display={'flex'}
        justifyContent={'center'}
        alignItems={"center"}
      >
        From $33,990²
      </Heading>

      <Text
        display={"flex"}
        fontSize={12}
        mt={2}
      >
        After Est. Savings
      </Text>


      <Box
        bottom={"18vh"}
        position={"absolute"}
        display={"flex"}
      >
        <OrderNow tx={"Order Now"} />
        <DdBtn tx={"Deme Drive"} />
      </Box>

    </Box>
  )
}

export default Model3Component;