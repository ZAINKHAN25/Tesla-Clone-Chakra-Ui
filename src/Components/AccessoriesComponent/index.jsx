import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import AccessoriesImg from "../../assets/Accessories.avif"
import OrderNow from '../OnBtn/index.jsx';

function Accessories() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={AccessoriesImg}
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
                Accessories
            </Heading>

            <Box
                bottom={"18vh"}
                position={"absolute"}
            >
                <OrderNow tx={"Shop Now"} />

            </Box>

        </Box>
    )
}

export default Accessories;