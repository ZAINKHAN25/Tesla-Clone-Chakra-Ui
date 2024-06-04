import { Box } from '@chakra-ui/react'
import React from 'react'

function DemoDrive({ tx }) {
    return (
        <Box
            width={270}
            minW={150}
            boxShadow={'1px 1px 10px rgba(255,255,255,10%)'}
            bg={"#222222"}
            mx={1}
            color={"rgb(231, 231, 231)"}
            textAlign={"center"}
            p={2}
            borderRadius={5}
            fontWeight={"580"}
            fontSize={15}
            cursor={"pointer"}
            transition={"all .3s ease-in"}
            _hover={{
                bg: "rgb(57,60,57)"
            }}
        >
            {tx}
        </Box>
    )
}

export default DemoDrive