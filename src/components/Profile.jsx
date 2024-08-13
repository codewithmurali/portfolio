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
import { SiRedux, SiChakraui, SiTailwindcss, SiMui, SiTypescript, SiJest } from "react-icons/si";
import { AiOutlineAppstore } from "react-icons/ai"; // Using a generic icon

const Profile = () => {
  const skills = [
    { name: "React JS", icon: DiReact, color: "blue.400" },
    { name: "Redux", icon: SiRedux, color: "purple.500" },
    { name: "Javascript", icon: DiJavascript1, color: "yellow.500" },
    { name: "TypeScript", icon: SiTypescript, color: "blue.600" },
    { name: "Jest", icon: SiJest, color: "purple.600" },
    { name: "React Testing Library", icon: AiOutlineAppstore, color: "red.600" }, // Generic icon
    { name: "SASS", icon: DiSass, color: "pink.400" },
    { name: "CSS", icon: DiCss3, color: "blue.500" },
    { name: "HTML", icon: DiHtml5, color: "orange.500" },
    { name: "Chakra UI", icon: SiChakraui, color: "teal.400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "blue.300" },
    { name: "Material UI", icon: SiMui, color: "blue.700" },
  ];

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
          Expertise
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


// import React from 'react';
// import ReactFlow, { MiniMap, Controls, Background } from 'react-flow-renderer';
// import {
//   DiReact,
//   DiJavascript1,
//   DiSass,
//   DiCss3,
//   DiHtml5,
// } from 'react-icons/di';
// import { SiRedux, SiChakraui, SiTailwindcss, SiMui, SiTypescript, SiJest } from 'react-icons/si';
// import { AiOutlineAppstore } from 'react-icons/ai';

// // Define the nodes for the React Flow diagram
// const nodeStyles = {
//   borderRadius: '8px',
//   padding: '10px',
//   color: 'white',
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   textAlign: 'center',
//   border: '1px solid black', // Debugging border to see nodes
//   width: '150px', // Fixed width for debugging
//   height: '100px', // Fixed height for debugging
// };

// const nodeTypes = {
//   skill: ({ data }) => (
//     <div style={{ ...nodeStyles, backgroundColor: data.color }}>
//       <div style={{ fontSize: '24px', marginBottom: '5px' }}>{data.icon}</div>
//       <div>{data.name}</div>
//     </div>
//   ),
// };

// const nodes = [
//   { id: '1', type: 'skill', position: { x: 50, y: 50 }, data: { name: 'React JS', icon: <DiReact />, color: 'blue.400' } },
//   { id: '2', type: 'skill', position: { x: 250, y: 50 }, data: { name: 'Redux', icon: <SiRedux />, color: 'purple.500' } },
//   { id: '3', type: 'skill', position: { x: 450, y: 50 }, data: { name: 'JavaScript', icon: <DiJavascript1 />, color: 'yellow.500' } },
//   { id: '4', type: 'skill', position: { x: 650, y: 50 }, data: { name: 'TypeScript', icon: <SiTypescript />, color: 'blue.600' } },
//   { id: '5', type: 'skill', position: { x: 850, y: 50 }, data: { name: 'Jest', icon: <SiJest />, color: 'purple.600' } },
//   { id: '6', type: 'skill', position: { x: 1050, y: 50 }, data: { name: 'React Testing Library', icon: <AiOutlineAppstore />, color: 'red.600' } },
//   { id: '7', type: 'skill', position: { x: 50, y: 250 }, data: { name: 'SASS', icon: <DiSass />, color: 'pink.400' } },
//   { id: '8', type: 'skill', position: { x: 250, y: 250 }, data: { name: 'CSS', icon: <DiCss3 />, color: 'blue.500' } },
//   { id: '9', type: 'skill', position: { x: 450, y: 250 }, data: { name: 'HTML', icon: <DiHtml5 />, color: 'orange.500' } },
//   { id: '10', type: 'skill', position: { x: 650, y: 250 }, data: { name: 'Chakra UI', icon: <SiChakraui />, color: 'teal.400' } },
//   { id: '11', type: 'skill', position: { x: 850, y: 250 }, data: { name: 'Tailwind', icon: <SiTailwindcss />, color: 'blue.300' } },
//   { id: '12', type: 'skill', position: { x: 1050, y: 250 }, data: { name: 'Material UI', icon: <SiMui />, color: 'blue.700' } },
// ];

// const edges = []; // No edges in this example

// const ProfileFlow = () => (
//   <div style={{ height: '100vh', width: '100vw' }}> {/* Ensure container has dimensions */}
//     <ReactFlow elements={[...nodes, ...edges]} nodeTypes={nodeTypes}>
//       <MiniMap />
//       <Controls />
//       <Background />
//     </ReactFlow>
//   </div>
// );

// export default ProfileFlow;
