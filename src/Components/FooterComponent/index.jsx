import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import { footerData, footerData2 } from './Footer'

function Footer() {
    return (
        <Box
            display={"flex"}
            letterSpacing={.7}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            bg={"black"}
            width={"100vw"}
            color={"white"}
            pt={"8vh"}
            pb={"4vh"}
            fontFamily={'Roboto'}
        >
            {
                footerData.map((x, i) => {
                    return (
                        <Box
                            key={i}
                            width={"max-content"}
                            textAlign={"center"}
                            my={1.5}
                        >
                            <Text
                                color={"rgba( 255, 255, 255, 80%)"}
                                fontSize={12.5}
                                fontWeight={500}
                            >
                                <Box as='span'><sup>{i + 1}</sup></Box> Price before estimated savings is {x}, excluding taxes and fees. Subject to change.
                            </Text>
                            <Text
                                fontWeight={"500"}
                                width={"max-content"}
                                mx={"auto"}
                                fontSize={12}
                                display={"flex"}
                                cursor={"pointer"}
                            >
                                <Box
                                    borderBottom={"1px solid rgba( 255, 255, 255, 70%)"}
                                    color={"rgba( 255, 255, 255, 70%)"}
                                    transition={"all .2s ease-in-out"}
                                    _hover={{
                                        color: "white",
                                        borderBottom: "1px solid white"
                                    }}
                                >
                                    Learn about est. gas savings
                                </Box>
                                <Text>
                                    .
                                </Text>
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
                                mx={1.5}
                                fontSize={13}
                                key={i}
                                cursor={"pointer"}
                                color={"rgba( 255, 255, 255, 80%)"}
                                transition={"all .2s ease-in-out"}
                                _hover={{
                                    color: "white"
                                }}
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