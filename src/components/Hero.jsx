import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";
import photo from "../assets/Murali_FE.jpg";
import Social from "./Social";
function Hero() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack m={100}>
      <Flex
        direction={isNotSmallerScreen ? "row" : "column"}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="center"
        justifyContent="center"
        gap="1rem"
        flexWrap="wrap"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Muralikumar J
          </Text>
          <Text
            fontSize="2xl"
            fontWeight="semibold"
            color={isDark ? "gray.400" : "gray.700"}
          >
            Frontend Engineer && Open Source Contributer
          </Text>
          <Button
            mt={8}
            colorScheme="purple"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/1mSrTwclBminntoS-UG0upWy_w5dhJxzU/view"
              )
            }
          >
            Resume
          </Button>
        </Box>

        <Box position="relative">
          <Circle
            position="absolute"
            bg="purple.500"
            opacity="1"
            zIndex={-1}
            w="250px"
            h="250px"
            top="1px"
            left="8px"
            alignSelf="flex-end"
          />
          <Image
            alignSelf="center"
            mt={isNotSmallerScreen ? "0" : "12"}
            mb={isNotSmallerScreen ? "0" : "12"}
            borderRadius="full"
            backgroundColor="transparent"
            boxShadow="lg"
            boxSize="250px"
            src={photo}
          />
        </Box>
      </Flex>
      <Social mx="auto" />
    </Stack>
  );
}

export default Hero;
