import { Card, Center, Heading, List, Separator, Stack, Text } from "@chakra-ui/react";
import { title } from "process";

const test = {
    title: "Sample Title", descriptions: [
        "This is a test message.", "This is another test message.", "This is the last test message."
    ]
};
type Description = string[]
type CardSetup = {
    title: string;
    descriptions?: Description;
};


export default function CardBuilder({ cardInfo }: { cardInfo: CardSetup }) {
    const { title, descriptions = [test.descriptions] } = cardInfo;

    return (
        <Card.Root flexDirection={"column"} maxW={'lg'} size={'md'}>
            <Card.Header>
                <Center>
                    <Card.Title textStyle={{ base: "3xl" }} textAlign={'center'} justifyContent={'center'} alignItems={'center'}>
                        {title}
                    </Card.Title>
                </Center>
            </Card.Header>
            <Separator />
            <Card.Body >
                <List.Root>
                    {descriptions.map((description, index) => (
                        <List.Item key={index}>
                            <Text>{description}</Text>
                        </List.Item>
                    ))}
                </List.Root>
            </Card.Body>
        </Card.Root>
    );
}
