import React from "react";
import { HStack, IconButton } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const socialLinks = [
  {
    icon: MdMailOutline,
    url: "mailto:muralikumar.admire@gmail.com",
  },
  {
    icon: FaGithub,
    url: "https://github.com/codewithmurali",
  },
  {
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/codewithmurali/",
  },
];

const Social = () => {
  return (
    <HStack spacing="24" justifyContent="center">
      {socialLinks.map((social, index) => (
        <IconButton
          key={index}
          fontSize="40px"
          _hover={{
            transform: "scale(1.2)",
            transition: "0.3s",
            color: "purple.300",
          }}
          icon={<social.icon />}
          isRound={true}
          onClick={() => window.open(social.url)}
        />
      ))}
    </HStack>
  );
};

export default Social;
