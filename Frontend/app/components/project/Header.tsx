"use client"

import { Heading, HStack, Link as ChakraLink, Separator, Container, Box, Text, Show, Menu, Portal, Button, Center, Dialog, Image, For, Kbd, useBreakpointValue, CloseButton, VStack, ClientOnly, Skeleton, IconButton } from "@chakra-ui/react";
import NextLink from "next/link";
import { useState, useEffect, Fragment } from "react";

import { useColorMode } from "@/components/ui/color-mode"
import { usePathname } from 'next/navigation'
import { LuMoon, LuSun } from "react-icons/lu";
import { Colors, Fonts } from "@/app/Styles";

export default function Header() {
    const [projectID,] = useState(
        {
            title: "Coding United Commons", Navigation: [{ path: "/", name: "Home" }, { path: "/about", name: "About Us" }, { path: "/contact", name: "Contact Us" }]
        }
    );
    const current = useBreakpointValue({
        base: "base",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
    });

    const pathname = usePathname()

    const { toggleColorMode, colorMode } = useColorMode()
    return (

        <HStack id="nav" h={"8vh"} w={"100vw"} justifyContent={'space-between'} position={"fixed"} zIndex={3} bg={"blue.950"} boxShadow={"md"}>
            <ClientOnly fallback={<Skeleton boxSize="8" />}>
                <HStack pl={4}>
                    {/* <Box borderRadius={4} h={12} w={12} bg={""} /> */}
                    <Image src={"/images/codingUnited_Logo.png"} borderRadius={4} h={50} w={50} aspectRatio={"auto"} />
                    <Heading color={"EBF1FF"} fontFamily={"oxanium, sans-serif"} size={"sm"}>{projectID.title.toUpperCase()}</Heading>
                </HStack>
                {
                    current !== "base" && current !== "sm" ? (
                        <HStack pr={8}>
                            {projectID.Navigation.map((navItem, index) => (
                                <Fragment key={index}>
                                    <ChakraLink asChild aria-current={navItem.path === pathname ? "page" : undefined} color={navItem.path === pathname ? "yellow.200" : undefined} focusRing={'none'}>
                                        <NextLink href={navItem.path}>
                                            <Text>
                                                {navItem.name}
                                            </Text>
                                        </NextLink>
                                    </ChakraLink >
                                    {index < projectID.Navigation.length - 1 && <Separator orientation="vertical" />}
                                </Fragment>
                            ))}
                            <Text fontSize={'sm'} alignItems={'center'} justifyContent={'center'}>
                                <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                                </IconButton>
                            </Text>
                        </HStack>
                    ) : null
                }
                {
                    current === "base" || current === "sm" ? (

                        <Dialog.Root size="full" motionPreset="scale" >
                            <Dialog.Trigger asChild>
                                <Button variant='solid' size="xs" borderRadius={'base'} mx={"2vh"}>
                                    Menu
                                </Button>
                            </Dialog.Trigger>
                            <Portal >
                                <Dialog.Backdrop />
                                <Dialog.Positioner>
                                    <Dialog.Content color={colorMode === "light" ? "black" : 'white'}>
                                        <Dialog.Header asChild>
                                            <Center>
                                                <Dialog.Title>Menu</Dialog.Title>
                                            </Center>
                                        </Dialog.Header>
                                        <Dialog.Body>
                                            <VStack> {projectID.Navigation.map((navItem, index) => (
                                                <Fragment key={index}>
                                                    <ChakraLink asChild aria-current={navItem.path === pathname ? "page" : undefined} color={navItem.path === pathname ? (colorMode === "dark" ? "yellow.200" : "blue.600") : undefined} focusRing={'none'}>
                                                        <NextLink href={navItem.path}>
                                                            <Text>
                                                                {navItem.name}
                                                            </Text>
                                                        </NextLink>
                                                    </ChakraLink >
                                                </Fragment>
                                            ))}
                                                <Separator />
                                                <Text fontSize={'sm'}>{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode: <IconButton onClick={toggleColorMode} variant="outline" size="sm">
                                                    {colorMode === "light" ? <LuSun /> : <LuMoon />}
                                                </IconButton> </Text>
                                            </VStack>
                                        </Dialog.Body>
                                        <Dialog.CloseTrigger asChild>
                                            <CloseButton size="sm" variant="solid" />
                                        </Dialog.CloseTrigger>
                                    </Dialog.Content>
                                </Dialog.Positioner>
                            </Portal>
                        </Dialog.Root>
                    ) : null
                }
            </ClientOnly >
        </HStack >

    );
}