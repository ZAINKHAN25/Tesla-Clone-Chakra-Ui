import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import PowerWallImg from "../../assets/Powerwall.avif";
import OrderNow from '../OnBtn/index.jsx';
import DdBtn from "../DdBtn/index.jsx";

function Powerwall() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={PowerWallImg}
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
                Powerwall
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

export default Powerwall;