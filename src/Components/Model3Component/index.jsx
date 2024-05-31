import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import Model3Img from "../../assets/Model-3.avif"

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
        bottom={"15vh"}
        position={"absolute"}
      >
        <Button
          width={250}
          boxShadow={'1px 1px 10px rgba(255,255,255,10%)'}
          bg={"white"}
          mx={5}
          color={"rgba(57,60,57,80%)"}
        >
          Order Now
        </Button>
        <Button
          width={250}
          boxShadow={'1px 1px 10px rgba(255,255,255,10%)'}
          bg={"rgba(34,34,34, 85%)"}
          mx={5}
          color={"white"}
          onMouseEnter={(ele) => { ele.currentTarget.style.background = "rgba(57,60,57,80%)" }}
          onMouseLeave={(ele) => { ele.currentTarget.style.background = "rgba(0,0,0,85%)" }}
        >
          Demo Drive
        </Button>

      </Box>

    </Box>
  )
}

export default Model3Component;