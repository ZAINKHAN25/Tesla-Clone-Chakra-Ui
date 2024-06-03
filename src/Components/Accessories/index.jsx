import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import AccessoriesImg from "../../assets/Accessories.avif"

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
                <Button
                    width={250}
                    boxShadow={'1px 1px 10px rgba(255,255,255,10%)'}
                    bg={"white"}
                    mx={5}
                    color={"rgba(57,60,57,80%)"}
                >
                    Shop Now
                </Button>

            </Box>

        </Box>
    )
}

export default Accessories;