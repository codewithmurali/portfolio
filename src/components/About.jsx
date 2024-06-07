import { Box, Flex, Heading, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const About = () => {

  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Flex
      direction="column"
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
          About
        </Heading>
      </Box>

      <Box alignSelf="center" px="2" py="16">
        <Text
          textAlign="center"
          fontSize="2xl"
          fontWeight="semibold"
          color={isDark ? "gray.400" : "gray.700"}
        >
          I'm a self-taught Front end Developer. I passionately combine good
          design, technology, and innovation in all my projects. My goal is to
          build highly performing applications that solve real world problems
          and provide users with an awesome experience.
        </Text>
      </Box>
    </Flex>
  );
};

export default About;
