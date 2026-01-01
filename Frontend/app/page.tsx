"use client";

import { useColorMode } from "@/components/ui/color-mode";
import CardBuilder from "./components/-home/CardBuilder";
import { Container, SimpleGrid, Image, Center, Heading, Box, Separator, Text, Card, useBreakpointValue, Stack, List, ListItem, VStack, AbsoluteCenter, ClientOnly, Skeleton } from "@chakra-ui/react";

export default function Home() {

  const current = useBreakpointValue({
    base: "base",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
    "2xl": "2xl",
  });

  const colorMode = useColorMode().colorMode;
  return (

    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <Container fluid id="main" pt={"1vh"} color="primary">
        <Box position={'relative'} h={"639px"} minW={"80vw"} >
          <Image src={'/images/bryton_sarrell.png'}/>


          <AbsoluteCenter zIndex={2} w={"80%"} h={"80%"} >

            <Card.Root bgGradient={colorMode === "light" ? "radial" : "to-l"} gradientFrom={colorMode === "light" ? "purple.300" : "blue.800"} gradientVia={colorMode === "light" ? "#B9C0DE" : "purple.800"} gradientTo={colorMode === "light" ? "blue.500" : "purple.500"} opacity={.8}>
              <Card.Body>
                <Center>
                  <Heading fontFamily={"oxanium, sans-serif"} textAlign={'center'}>Welcome</Heading>
                </Center>
                <Separator />
                <Text textAlign={"left"}>
                  We are a student-led tech club dedicated to building real-world projects,
                  supporting academic success, and growing together through hands-on coding,
                  curiosity, and collaboration.
                  <br />
                  We are not here to fit in.
                  <br />
                  We are here to build, to learn, and to become.
                </Text>
              </Card.Body>
            </Card.Root>
          </AbsoluteCenter>
        </Box>
        <VStack>
          <Heading fontFamily={"oxanium, sans-serif"}>Mission Statement</Heading>
          <Separator />
          <Text textAlign={"center"}>Our mission is to foster a vibrant and inclusive community of student developers, empowering everyone with the skills and experience
            to succeed in the world of technology.
          </Text><SimpleGrid columns={[1, null, 3]} gap={5}>
            <CardBuilder cardInfo={{
              title: "Club Projects", descriptions: ["Build a strong coding portfolio through group projects", "Join 2–3 active projects maintained by the club", "Work with real, shared codebases", "Gain experience in team collaboration and problem-solving",]
            }} />
            <CardBuilder cardInfo={{
              title: "Open Office Hours", descriptions: ["Online learning can feel isolating — it’s easy to think you’re on your own", "That’s why we created the Open Office Hours initiative", "Drop in anytime for questions, debugging help, or quiet co-working", "Just knowing you’re not alone can make all the difference",]
            }} />
            <CardBuilder cardInfo={{
              title: "Coding Challenges", descriptions: ["Regular coding challenges open to all languages and skill levels", "Designed to push members outside their comfort zones", "Encourages creative problem-solving from multiple perspectives", "Helps develop well-rounded, adaptable developers"]
            }} />
            <CardBuilder cardInfo={{
              title: "Coding Education and Guidance", descriptions: ["We curate free educational resources for all learning paths", "From game development and AI to quantum computing — all are welcome", "Our goal is to make learning accessible, regardless of experience level", "Sometimes the biggest barrier is simply not knowing what’s available"]
            }} />
            <CardBuilder cardInfo={{
              title: "Book Club", descriptions: ["No matter your career path, reading is essential for growth", "Club holds polls to choose relevant topics and books", "Keeping members accountable and engaged", "Learning beyond the standard curriculum"]
            }} />
            <CardBuilder cardInfo={{
              title: "Fostering Leadership", descriptions: ["Opportunities to have your voice heard and contribute", "Lead club projects or take initiative on new ideas", "Assist with administrative tasks and behind-the-scenes coordination", "Build valuable communication and leadership skills along the way"]
            }} />
          </SimpleGrid>
        </VStack>

      </Container>
    </ClientOnly >
  );
}
