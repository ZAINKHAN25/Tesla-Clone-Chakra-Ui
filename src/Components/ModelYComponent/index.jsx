import { Box, Button, Heading, Text } from '@chakra-ui/react';
import React from 'react';

import Navbar from "../Navbar/index.jsx";
import ModelYImg from "../../assets/Model-Y.avif"


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


            <Heading mt={10} fontSize={42} fontWeight={620}>Model Y</Heading>

            <Box display={"flex"} mt={2} alignItems={"center"} justifyContent={"center"}>

                <Heading fontSize={28} fontWeight={490} display={'flex'} borderBottom={'1.5px solid black'} justifyContent={'center'} alignItems={"center"}>
                    <Text fontWeight={"600"} px={2}>0.99%</Text>
                    APR Financing
                </Heading>
                <Heading Heading fontSize={28} fontWeight={490} mx={3}>Ending May 31</Heading>
            </Box>

            <Text display={"flex"} fontSize={17} mt={2}>From <Text mx={2} fontWeight={"bold"}>$299/mo¹</Text> Lease After Est. Gas Savings</Text>


            <Box bottom={"15vh"} position={"absolute"}>
                <Button width={250} boxShadow={'1px 1px 10px rgba(255,255,255,10%)'} bg={"white"} mx={5} color={"black"}>Order Now</Button>
                <Button width={250} boxShadow={'1px 1px 10px rgba(255,255,255,10%)'} bg={"rgba(34,34,34, 80%)"} mx={5} color={"white"}
                    onMouseEnter={(ele) => { ele.currentTarget.style.background = "rgba(57,60,57,70%)" }}
                    onMouseLeave={(ele) => { ele.currentTarget.style.background = "rgba(0,0,0,70%)" }}
                >Demo Drive</Button>
            </Box>

        </Box>
    )
}

export default MdoalYComponent