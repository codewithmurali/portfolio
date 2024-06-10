import { Flex, Heading, Grid, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import CardLayout from "./CardLayout";

const CardsContainer = () => {
  return (
    <>
      <Heading
        fontWeight="bold"
        bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
        bgClip="text"
        size="2xl"
        textTransform="uppercase"
        m="10"
        textAlign="center"
      >
        Projects
      </Heading>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)", 
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)", 
        }}
        gap={6}
        justifyContent="center"
        m="8"
      >
        <CardLayout />
      </Grid>
    </>
  );
};

export default CardsContainer;
