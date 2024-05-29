import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react'
import { SiTesla } from 'react-icons/si';
import { CiCircleQuestion } from 'react-icons/ci';

import { navbarDropDowns, navbarRightIcons } from './navbarDropdowns';

function Navbar() {
    return (
        <Box display={"flex"} px={20} py={5} justifyContent={"space-between"} alignItems={"center"}>
            <SiTesla cursor={"pointer"} size={30} />

            <Accordion allowToggle display={"flex"}>
                {
                    navbarDropDowns.map((x, i) => {
                        return (
                            <AccordionItem key={i}>
                                <h2>
                                    <AccordionButton>
                                        <Box as='span' flex='1' textAlign='left' fontSize={15}>
                                            {x}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4} position={"absolute"}>
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

            <Box display={"flex"}>
                {
                    navbarRightIcons.map((x, i) => {
                        return (
                            <Box mx={2} key={i}>
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