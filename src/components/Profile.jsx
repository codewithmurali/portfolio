import React from "react";
import {
  Flex,
  Box,
  Text,
  Heading,
  Icon,
} from "@chakra-ui/react";
import {
  DiReact,
  DiJavascript1,
  DiSass,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiRedux, SiChakraui, SiTailwindcss, SiMui } from "react-icons/si";

const Profile = () => {
  const skills = [
    { name: "React JS", icon: DiReact, color: "blue.400" },
    { name: "Redux", icon: SiRedux, color: "purple.500" },
    { name: "Javascript", icon: DiJavascript1, color: "yellow.500" },
    { name: "SASS", icon: DiSass, color: "pink.400" },
    { name: "CSS", icon: DiCss3, color: "blue.500" },
    { name: "HTML", icon: DiHtml5, color: "orange.500" },
    { name: "Chakra UI", icon: SiChakraui, color: "teal.400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "blue.300" },
    { name: "Material UI", icon: SiMui, color: "blue.700" },
  ];


  return (
    <Flex
      direction= "column"
      w="100%"
      justifyContent="center"
      alignItems="center"
      maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}
    >
      <Box marginTop="16">
        <Heading
           fontWeight="bold"
           bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
           bgClip="text"
          size="2xl"
          textTransform="uppercase"
        >
          Mastery & Expertise
        </Heading>
      </Box>

      <Box alignSelf="center" px="2" py="16">
        <Flex alignItems="center" flexWrap="wrap" justify="center">
          {skills.map((skill, index) => (
            <Box
              key={index}
              rounded="xl"
              direction="column"
              mt={4}
              bg={skill.color}
              w="30vh"
              justify="flex-end"
              m="5"
            >
              <Icon color="white" p="5" as={skill.icon} w="24" h="24" />
              <Text color="white" p="4" fontSize="xl" fontWeight="bold">
                {skill.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </Flex>
  );
};

export default Profile;
