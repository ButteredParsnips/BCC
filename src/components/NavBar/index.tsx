import {
  Box,
  Center,
  Flex,
  HStack,
  IconButton,
  Image,
  Link,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

import { HamburgerMenu } from "@/components/HamburgerMenu";
import { GiHamburgerMenu } from "react-icons/gi";
import { SlSocialInstagram } from "react-icons/sl";
import { NavBarLogo } from "../NavBarLogo";

export const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <Box
      as="nav"
      bg="#5B19D2"
      p={4}
      color="white"
      position="fixed"
      w="100%"
      zIndex={1000}
    >
      <Flex maxW="1200px" mx="auto" alignItems="center" position="relative">
        <NavBarLogo />
        <Spacer />
        <HStack spacing={6} display={{ base: "none", md: "flex" }}>
          <Link fontWeight="semibold">Home</Link>
          <Link fontWeight="semibold">Artists</Link>
          <Link fontWeight="semibold">Vendors</Link>
          <Link fontWeight="semibold">Contact</Link>
          <Link fontWeight="semibold">
            <SlSocialInstagram size={32} color="white" />
          </Link>
        </HStack>
        <IconButton
          ref={btnRef}
          aria-label="Open Menu"
          color={"white"}
          icon={<GiHamburgerMenu />}
          onClick={onOpen}
          bg="#979BFF"
          display={{ base: "flex", md: "none" }}
        />
      </Flex>
      <HamburgerMenu isOpen={isOpen} onClose={onClose} btnRef={btnRef} />
    </Box>
  );
};
