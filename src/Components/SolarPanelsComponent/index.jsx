import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import SolarPanelImg from "../../assets/Solar Panels.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function SolarPanels() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={SolarPanelImg}
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
                color={"white"}
            >
                Solar Panels
            </Heading>

            <Heading
                fontSize={18}
                fontWeight={600}
                mt={2}
                display={'flex'}
                justifyContent={'center'}
                alignItems={"center"}
                color={"white"}
                borderBottom={'.5px solid white'}
            >
                Schedule a Virtual Consultation
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

export default SolarPanels;