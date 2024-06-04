import { Box, Button, Img } from '@chakra-ui/react';
import React from 'react';

import CyberTruckImg from "../../assets/CyberTruck.avif";
import CyberTruckLogo from "../../assets/tesla-cybertruck8610-removebg-preview.png";

function CyberTruckComponent() {
    return (
        <Box
            width={"100vw"}
            height={"100vh"}
            backgroundImage={CyberTruckImg}
            backgroundSize={"cover"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"start"}
            alignItems={"center"}
            position={'relative'}
            backgroundPosition={'center'}
        >

            <Img
                src={CyberTruckLogo}
                mt={"15vh"}
            />

            <Box
                display={"flex"}
                position={"absolute"}
                bottom={"18vh"}
            >

                <Button
                    width={270}
                    backgroundColor={"rgba(17, 17, 17, 94%)"}
                    color={"#8e8e8e"}
                    borderRadius={0}
                    borderTop={"3px solid #8e8e8e"}
                    fontSize={14}
                    fontWeight={"bold"}
                    _hover={{
                        opacity: .9
                    }}
                >
                    ORDER NOW
                </Button>

                <Button
                    width={270}
                    backgroundColor={"rgba(17, 17, 17, 94%)"}
                    color={"#8e8e8e"}
                    borderRadius={0}
                    border={"1px solid rgba(142, 142, 142, 30%)"}
                    ms={7}
                    fontSize={14}
                    fontWeight={"bold"}
                    _hover={{
                        opacity: .9
                    }}
                >
                    LEARN MORE
                </Button>

            </Box>


        </Box>
    )
}

export default CyberTruckComponent;