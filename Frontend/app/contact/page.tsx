"use client"


import {
    AbsoluteCenter,
    Button,
    Field,
    Fieldset,
    For,
    Input,
    NativeSelect,
    Stack, Card
} from "@chakra-ui/react"
import { useState } from "react";

/**
 * @param contact page - form to collect user information
 * 
 */


export default function Contact() {

    const [contactForm, setContactForm] = useState({
        fname: "",
        lname: "",
        email: "",
        join: "",
        event: "",
        comment: "",
    });

    // NEEDS: create a validator for @snhu.edu email addresses by checking last 9 characters against roster email field with fetch loading

    const [validEmail, setValidEmail] = useState(contactForm.email ? true : false);



    const projects = ["Mokse", "Coding United Club", "Astray"];
    return (
        <>
            <AbsoluteCenter>
                <Card.Root w={'md'}>
                    <Card.Body>
                        <Fieldset.Root size="lg" maxW="md">
                            <Stack>
                                <Fieldset.Legend>Contact Us</Fieldset.Legend>
                                <Fieldset.HelperText>
                                    Please provide your contact details below.
                                </Fieldset.HelperText>
                            </Stack>

                            <Fieldset.Content>
                                <Field.Root>
                                    <Field.Label>Name</Field.Label>
                                    <Input
                                        name="name"
                                        onChange={
                                            ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                                setContactForm((prev) => ({ ...prev, fname: target.value }))}
                                        value={contactForm.fname} />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Email address</Field.Label>
                                    <Input
                                        name="email"
                                        type="email"
                                        onChange={
                                            ({ target }: React.ChangeEvent<HTMLInputElement>) =>
                                                setContactForm((prev) => ({ ...prev, email: target.value }))}
                                        value={contactForm.email}
                                        placeholder="example@snhu.edu" />
                                </Field.Root>

                                <Field.Root>
                                    <Field.Label>Projects</Field.Label>
                                    <NativeSelect.Root>
                                        <NativeSelect.Field name="projects" onChange={(e) => setContactForm((prev) => ({
                                            ...prev,
                                            event: e.target.value,
                                        }))}>
                                            <For each={projects}>
                                                {(item) => (
                                                    <option key={item} value={item}>
                                                        {item}
                                                    </option>
                                                )}
                                            </For>
                                        </NativeSelect.Field>
                                        <NativeSelect.Indicator />
                                    </NativeSelect.Root>
                                </Field.Root>
                            </Fieldset.Content>

                            <Button type="submit" alignSelf="flex-start">
                                Submit
                            </Button>
                        </Fieldset.Root>
                    </Card.Body>
                </Card.Root>
            </AbsoluteCenter >
        </>
    )
}
