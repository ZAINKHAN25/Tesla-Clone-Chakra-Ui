import { Box } from '@chakra-ui/react'
import React from 'react'

function OrderNow({ tx }) {
    return (
        <Box
            width={270}
            minW={150}
            noOfLines={1}
            boxShadow={'1px 1px 10px rgba(255,255,255,10%)'}
            bg={"white"}
            mx={5}
            color={"rgba( 0, 0, 0, 80%)"}
            textAlign={"center"}
            p={2}
            borderRadius={5}
            fontWeight={"600"}
            fontSize={15}
            cursor={"pointer"}
            transition={"all .3s ease-in"}
            _hover={{
                bg: "rgb(231, 231, 231)"
            }}
        >
            {tx}
        </Box>
    )
}

export default OrderNow