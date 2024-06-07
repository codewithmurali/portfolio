import React from "react";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  UnorderedList,
  ListItem,
  HStack,
  useColorMode,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNode,
  FaCss3Alt,
  FaHtml5,
  FaJs,
} from "react-icons/fa";
import { SiSocketdotio, SiMui, SiRapid } from "react-icons/si";
import { projects } from "../Util/constants";

const techIcons = {
  "React JS": FaReact,
  "Node JS": FaNode,
  "Socket IO": SiSocketdotio,
  "MUI 5": SiMui,
  "Rapid API": SiRapid,
  HTML: FaHtml5,
  CSS: FaCss3Alt,
  JavaScript: FaJs,
};

const CardLayout = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <>
      {projects.map((project, index) => (
        <Card key={index} maxW="sm" m={4}>
          <CardBody>
            <Image src={project.image} alt={project.name} borderRadius="lg" />
            <Stack mt="6" spacing="3">
              <Heading size="md">{project.name}</Heading>
              <UnorderedList>
                {project.description.map((desc, descIndex) => (
                  <ListItem
                    color={isDark ? "gray.400" : "gray.700"}
                    m={2}
                    key={descIndex}
                  >
                    {desc}
                  </ListItem>
                ))}
              </UnorderedList>
              <HStack m="2" spacing="8">
                {project.techStack.map((tech, techIndex) => {
                  const Icon = techIcons[tech];
                  return Icon ? (
                    <Icon key={techIndex} size="24px" />
                  ) : (
                    <Text key={techIndex}>{tech}</Text>
                  );
                })}
              </HStack>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              {project.github && (
                <Button
                  as="a"
                  href={project.github}
                  target="_blank"
                  leftIcon={<FaGithub />}
                  variant="solid"
                  colorScheme="green"
                >
                  GitHub
                </Button>
              )}
              {project.liveLink && (
                <Button
                  as="a"
                  href={project.liveLink}
                  target="_blank"
                  leftIcon={<FaExternalLinkAlt />}
                  variant="solid"
                  colorScheme="blue"
                >
                  Live Link
                </Button>
              )}
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default CardLayout;
