import { Box, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import ModelXImg from "../../assets/Model-X.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function Model3Component() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={ModelXImg}
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
            >
                Model X
            </Heading>

            <Heading
                fontSize={18}
                fontWeight={600}
                mt={2}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
            >
                From $63,990³
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
                <OrderNow
                    tx={"Order Now"}
                />
                <DdBtn
                    tx={"Demo Drive"}
                />

            </Box>

        </Box>
    )
}

export default Model3Component;