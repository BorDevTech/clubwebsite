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


          {current != "base" && current != "sm" ? (
            <>
              <AbsoluteCenter zIndex={1} h={"640px"} minW={"80vw"} >
                <Image h="100%" w={"100%"}
                  src={"/hero.jpg"}
                  _hover={{
                    opacity: 0,
                    cursor: "pointer",
                  }}
                  fit={'cover'}
                  alt="Person looking at laptop with code projecting onto them"
                // className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-300 group-hover:opacity-0 z-10"
                />
              </AbsoluteCenter>
              <AbsoluteCenter h={"639px"} minW={"80vw"} zIndex={0}>
                <Image h="100%" w={"100%"}
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGR5b3hzZmgzemRxNWF2c2ZqOXQ5anN0NXhndGN0aHVhcXI5dXQybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoD6JZnwap6s8/giphy.gif"
                  alt="Animated numbers falling vertically" fit={'cover'}
                // className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
                />
              </AbsoluteCenter>
            </>

          ) : (
            <>
              <AbsoluteCenter zIndex={1} h={"465px"} w={"80vw"}>
                <Image h="100%" w={"100%"}
                  src={"/hero.jpg"}
                  _hover={{ opacity: 0, cursor: "pointer" }}
                  fit={'cover'}
                  alt="Person looking at laptop with code projecting onto them"
                // className="absolute inset-0 w-full h-full object-cover object-bottom transition-opacity duration-300 group-hover:opacity-0 z-10"
                />
              </AbsoluteCenter>
              <AbsoluteCenter h={"464.094px"} w={"80vw"} zIndex={0}>
                <Image h="100%" w={"100%"}
                  src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGR5b3hzZmgzemRxNWF2c2ZqOXQ5anN0NXhndGN0aHVhcXI5dXQybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WoD6JZnwap6s8/giphy.gif"
                  alt="Animated numbers falling vertically" fit={'cover'}
                // className="absolute inset-0 w-full h-full object-cover object-bottom opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
                />
              </AbsoluteCenter>
            </>
          )}

          <AbsoluteCenter zIndex={2} w={"80%"} h={"80%"} >

            <Card.Root bgGradient={colorMode === "light" ? "to-r" : "to-l"} gradientFrom={colorMode === "light" ? "purple.800" : "blue.800"} gradientTo={colorMode === "light" ? "blue.500" : "purple.500"} opacity={.8}>
              <Card.Body>
                <Center>
                  <Heading textAlign={'center'}>Welcome to Coding United</Heading>
                </Center>
                <Separator />
                <Text textAlign={"center"}>
                  A student-led tech club dedicated to building real-world projects,
                  supporting academic success, and growing together through hands-on coding,
                  curiosity, and collaboration. We are not here to fit in. We are here to
                  build, to learn, and to become.
                </Text>
              </Card.Body>
            </Card.Root>
          </AbsoluteCenter>
        </Box>
        <VStack>
          <Heading>Mission Statement</Heading>
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
