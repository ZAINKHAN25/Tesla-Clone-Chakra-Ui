import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import PowerWallImg from "../../assets/Powerwall.avif"

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
                    bg={"#222222"}
                    mx={5}
                    color={"white"}
                    onMouseEnter={(ele) => { ele.currentTarget.style.background = "rgb(57,60,57)" }}
                    onMouseLeave={(ele) => { ele.currentTarget.style.background = "#222222" }}
                >
                    Learn More
                </Button>

            </Box>

        </Box>
    )
}

export default Powerwall;