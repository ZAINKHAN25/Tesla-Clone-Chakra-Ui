import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react';

import SolarPanelImg from "../../assets/Solar Panels.avif"

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
                    Demo Drive
                </Button>

            </Box>

        </Box>
    )
}

export default SolarPanels;