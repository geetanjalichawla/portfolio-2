"use client";
import React from "react";
import { Box, Tag, Container ,Heading,VStack,Text} from "@chakra-ui/react";
import { fonts } from "@/app/font";
function Services() {
  return (
    <Box w="full">
      <Container maxW={"5xl"}>
     <VStack w="full">
     <Tag
          colorScheme="purple"
          w={"fit-content"}
          mb={"1"}
          p={"2"}
          px={4}
          size={"lg"}
          color={"purple.500"}
          rounded={"full"}
        >
          SERVICES
        </Tag>
        <Text
          as={"span"}
          className={fonts.playfairDisplay.className}
          fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
          fontWeight={'bold'}
          
        >
          Technology i work on
        </Text>
     </VStack>
      </Container>
    </Box>
  );
}

export default Services;
