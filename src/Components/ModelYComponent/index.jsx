import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import Navbar from "../Navbar/index.jsx";
import ModelYImg from "../../assets/Model-Y.avif"
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";


function MdoalYComponent() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={ModelYImg}
            backgroundSize={"cover"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            alignItems={"center"}
            position={'relative'}
            backgroundPosition={'center'}
        >

            <Navbar />


            <Heading
                mt={10}
                fontSize={42}
                fontWeight={620}
            >
                Model Y
            </Heading>

            <Heading
                fontSize={18}
                fontWeight={600}
                mt={2}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
            >
                From $31,490¹
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

export default MdoalYComponent