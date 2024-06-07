import { VStack } from "@chakra-ui/react";

import React from "react";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Nav from "./components/Nav";
import CardsContainer from "./components/CardsContainer";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <VStack>
      <Nav />
      <Hero></Hero>
      <About></About>
      <Profile></Profile>
      <CardsContainer> </CardsContainer>
      <Footer></Footer>
    </VStack>
  );
};

export default App;
