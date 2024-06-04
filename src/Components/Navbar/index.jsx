import React from 'react';
import TeslaLogoImg from "../../assets/Tesla-Logo-Navbar.png";

import { navbarDropDowns, navbarRightIcons } from './navbarDropdowns.js';
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, Img } from '@chakra-ui/react';

function Navbar() {
    return (
        <Box
            width={"100vw"}
            display={"flex"}
            px={10}
            py={3}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexWrap={"wrap"}
        >
            <Img
                src={TeslaLogoImg}
                cursor={"pointer"}
                width={120}
            />

            <Accordion
                allowToggle
                display={"flex"}
                borderColor={"transparent"}
            >
                {
                    navbarDropDowns.map((x, i) => {
                        return (
                            <AccordionItem
                                key={i}
                            >
                                <h2>
                                    <AccordionButton>
                                        <Box
                                            as={'span'}
                                            flex={'1'}
                                            textAlign={'left'}
                                        >
                                            <Heading
                                                fontSize={15}
                                                fontWeight={"500"}
                                            >
                                                {x}
                                            </Heading>
                                        </Box>
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel
                                    pb={4}
                                    px={10}
                                    position={"absolute"}
                                    left={0}
                                >
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat.
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }

            </Accordion>

            <Box
                display={"flex"}
            >
                {
                    navbarRightIcons.map((x, i) => {
                        return (
                            <Box
                                mx={2}
                                p={1}
                                borderRadius={"8px"}
                                key={i}
                                cursor={"pointer"}
                                bg={"transparent"}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.backgroundColor = 'rgba( 0, 0, 0, 8%)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
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

export default Navbar;