import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import ModelSImg from "../../assets/Model-S.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function Model3Component() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={ModelSImg}
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
                fontSize={42}
                fontWeight={620}
                color={"white"}
            >
                Model S
            </Heading>

            <Heading
                fontSize={18}
                fontWeight={600}
                mt={2}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
                color={"white"}
            >
                From $66,490⁴
            </Heading>

            <Text
                display={"flex"}
                fontSize={12}
                mt={2}
                color={"white"}
            >
                After Est. Savings
            </Text>


            <Box
                bottom={"18vh"}
                position={"absolute"}
                display={"flex"}
            >
                <OrderNow tx={"Order Now"} />
                <DdBtn tx={"Demo Drive"} />

            </Box>

        </Box>
    )
}

export default Model3Component;