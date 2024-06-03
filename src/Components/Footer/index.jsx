import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { footerData, footerData2 } from './Footer'

function Footer() {
    return (
        <Box
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"black"}
            width={"100vw"}
            color={"white"}
            pt={"8vh"}
            pb={"3vh"}
        >
            {
                footerData.map((x, i) => {
                    return (
                        <Box
                            key={i}
                            width={"max-content"}
                            textAlign={"center"}
                            my={2}
                        >
                            <Text
                                color={"rgba( 255, 255, 255, 80%)"}
                                fontSize={16}
                            >
                                <Box as='span'><sup>{i + 1}</sup></Box> Price before estimated savings is {x}, excluding taxes and fees. Subject to change.
                            </Text>
                            <Text
                                fontWeight={"600"}
                                textDecor={"underline"}
                                width={"max-content"}
                                mx={"auto"}
                                fontSize={15}
                            >
                                Learn about est. gas savings.
                            </Text>
                        </Box>
                    )
                })
            }

            <Box mt={10}>
                {
                    footerData2.map((x, i) => {
                        return (
                            <Box
                                as='span'
                                mx={3}
                                fontSize={14}
                                key={i}
                            >
                                {x}
                            </Box>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default Footer