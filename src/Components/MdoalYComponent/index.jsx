import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

import Navbar from "../Navbar/index.jsx"

function MdoalYComponent() {
    return (
        <Box width={"100vw"} height={"100vh"} backgroundImage={"url(https://static1.pocketlintimages.com/wordpress/wp-content/uploads/2024/04/blue-model-y.jpg)"} backgroundSize={"cover"} display={"flex"} flexDirection={"column"} justifyContent={"start"} alignItems={"center"}>
            <Navbar />

            <Heading mt={10} fontSize={42} fontWeight={620}>Model Y</Heading>
        </Box>
    )
}

export default MdoalYComponent