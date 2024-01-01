"use client";

import { fonts } from "@/app/font";
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Box,
  Tag,
} from "@chakra-ui/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <Box w={"full"}>
      <Container maxW={"5xl"} position={"relative"}>
        <Stack w="full" direction={["column-reverse", "row"]} gap={"10"} justifyContent={'center'} alignItems={'center'}>
          <Stack
            textAlign={['center',"left"]}
            align={['center',"left"]}
            justifyContent={"center"}
            spacing={{ base: 8, md: 10 }}
            w={["full", "65%"]}
          >
            <Heading fontWeight={600} 
            fontSize={{ base: "md", sm: "md", md: "xl" }}
            >
              <Tag
                colorScheme="purple"
                w={"fit-content"}
                mb={"1"}
                p={"2"}
                px={4}
                size={['sm',"lg"]}
                color={"purple.500"}
                rounded={"full"}
              >
                HELLO
              </Tag>
              <br />
              <Text as={"span"} className={fonts.playfairDisplay.className}>
                I'am
              </Text>
              <br />
              <Text
                as={"span"}
                className={fonts.playfairDisplay.className}
                fontSize={{ base: "2xl", sm: "3xl", md: "6xl" }}
              >
                {" "}
                Geetanjali Chawla
              </Text>
              <br />
              <Text
                as={"span"}
                className={fonts.playfairDisplay.className}
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
              >
                {" "}
                Web Developer
              </Text>
            </Heading>
            <Stack spacing={6} direction={"row"}>
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"purple"}
                bg={"purple.400"}
                size={['md',"lg"]}

                _hover={{ bg: "purple.500" }}
              >
                Download Cv
              </Button>
              <Button rounded={"full"} px={6}
                size={['md',"lg"]}
                >
                Learn more
              </Button>
            </Stack>
          </Stack>
          <Box w={['150px','28%']} h={'auto'}  m={'auto'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Image
              alt="Avatar"
              src="/media/avatar.png"
              width="100"
              height="100"
              className="mx-auto"
              layout="responsive"
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
