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
          base: "repeat(1, 1fr)", // 1 column for small screens
          md: "repeat(2, 1fr)", // 2 columns for medium screens
          lg: "repeat(3, 1fr)", // 3 columns for large screens
        }}
        gap={6}
        justifyContent="center"
        m="10"
      >
        <CardLayout />
      </Grid>
    </>
  );
};

export default CardsContainer;
