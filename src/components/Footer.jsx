import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Box
      w="100%"
      p={4}
      color={isDark ? "white" : "black"}
      textAlign="center"
      borderTopColor="grey"
      border="1"
      marginTop={1}
    >
      Made with ❤️ by Muralikumar
    </Box>
  );
};

export default Footer;
