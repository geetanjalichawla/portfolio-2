"use client";
import React from "react";
import Slider from "react-slick";
import {
  Box,
  Tag,
  Container,
  VStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { fonts } from "@/app/font";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3,
  FaDocker,
  FaNpm,
  FaLinux,
  FaNode,
  FaFigma,
  FaSass,
} from "react-icons/fa";
import { SiNginx } from "react-icons/si";
import {
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiRedis,
  SiJest,
  SiFirebase,
  SiPostman,
  SiPostgresql,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Services() {
  const skills = [
    { name: "React", icon: <FaReact  /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Database', icon: <FaDatabase /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3 /> },
    { name: 'Docker', icon: <FaDocker /> },
    { name: 'npm', icon: <FaNpm /> },
    { name: 'Linux', icon: <FaLinux /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Nginx', icon: <SiNginx /> },
    { name: 'Node.js', icon: <FaNode /> },
    { name: 'PostgreSQL', icon: <SiPostgresql /> },
    { name: 'Postman', icon: <SiPostman /> },
    { name: 'Figma', icon: <FaFigma /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'Jest', icon: <SiJest /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Redux', icon: <SiRedux /> },
    { name: 'Sass', icon: <FaSass /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'TypeScript', icon: <SiTypescript /> },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust the number of visible slides
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };


  return (
    <Box w="full">
      <Container maxW={"5xl"}>
        <VStack w="full" gap={[4,6]}>
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
            Skills
          </Tag>
          <Text
            as={"span"}
            className={fonts.playfairDisplay.className}
            fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
            fontWeight={"bold"}
          >
            Technology i worked on
          </Text>
<Box w="full" overflow={'hidden'}>
<Slider {...settings}>
            {skills.map((skill, index) => (
              <Flex
                key={skill.name}
                textAlign="center"
                p={4}
                borderRadius="md"
                transition="transform 0.3s ease-in-out"
                _hover={{ transform: "scale(1.02)" }}
                display="flex"
                flexDir="column"
                w="full"
                alignItems="center"

                justifyContent="center"
              >
                <Text mx={'auto'} display='block'fontSize="6xl" w="fit-content" textAlign="center">{skill.icon}</Text>
                <Text display='block' mt={2}>{skill.name}</Text>
              </Flex>
            ))}
          </Slider>
</Box>
        </VStack>
      </Container>
    </Box>
  );
}

export default Services;
