import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import photo from "../assets/Murali_FE.jpg";
import Social from "./Social";

function Hero() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Stack m={{ base: 5, md: 100 }} spacing={10}>
      <Flex
        direction={{ base: "column", md: "row" }}
        p={{ base: "0", md: "32" }}
        align="center"
        justify="center"
        gap="1rem"
        flexWrap="wrap"
      >
        <Box mt={{ base: 16, md: 0 }} align="flex-start">
          <Text fontSize={{ base: "3xl", md: "5xl" }} fontWeight="semibold">
            Hi, I am
          </Text>
          <Text
            fontSize={{ base: "5xl", md: "7xl" }}
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip="text"
          >
            Muralikumar J
          </Text>
          <Text
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="semibold"
            color={isDark ? "gray.400" : "gray.700"}
          >
            Frontend Engineer & Open Source Contributor
          </Text>
          <Button
            mt={8}
            colorScheme="purple"
            onClick={() =>
              window.open(
                "https://drive.google.com/file/d/18acrTCTzCFMakGTQNwc6EVe9cl1dETSG/view?usp=sharing"
              )
            }
          >
            Resume
          </Button>
        </Box>

        <Box position="relative" mt={{ base: 12, md: 0 }}>
          <Circle
            position="absolute"
            bg="purple.500"
            opacity="1"
            zIndex={-1}
            size="250px"
            top="1px"
            left="8px"
            alignSelf="flex-end"
          />
          <Image
            alignSelf="center"
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
