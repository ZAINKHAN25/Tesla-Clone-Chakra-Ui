import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import SolarRoofImg from "../../assets/Solar Roof.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function SolarRoof() {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      backgroundImage={SolarRoofImg}
      backgroundSize={"cover"}
      backgroundPosition={'center'}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"start"}
      alignItems={"center"}
      position={'relative'}
    >

      <Heading
        mt={"17vh"}
        fontSize={50}
        fontWeight={620}
      >
        Solar Roof
      </Heading>

      <Heading
        fontSize={18}
        fontWeight={400}
        mt={2}
        display={'flex'}
        justifyContent={'center'}
        alignItems={"center"}
      >
        Produce Clean Energy From Your Roof
      </Heading>


      <Box
        bottom={"18vh"}
        position={"absolute"}
        display={"flex"}
      >
        <OrderNow tx={"Order Now"} />
        <DdBtn tx={"Learn More"} />

      </Box>

    </Box>
  )
}

export default SolarRoof;