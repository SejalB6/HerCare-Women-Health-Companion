import React from "react";
import { Box, Button, Flex, Heading, Input, Stack, Text, Image, Link } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

// SVG imports
import CelebrateIcon from "./assets/illustrations/undraw_celebrating_2aox.svg";
import ProfilePic from "./assets/illustrations/undraw_celebrating_2aox.svg";
import WarningIcon from "./assets/illustrations/undraw_warnings_agxg.svg";

export default function SignupPage() {
  const navigate = useNavigate();

  return (
    <Flex
      minH="100vh"
      align="center"
      justify="center"
      bg="#fef6ff" // pastel lavender background
    >
      <Box
        rounded="2xl"
        bg="white"
        boxShadow="lg"
        p={8}
        w="sm"
        textAlign="center"
      >
        {/* Celebrate SVG */}
        <Flex justify="center" mb={4}>
          <Box bg="#e9d5ff" borderRadius="full" p={4}>
            <Image src={CelebrateIcon} alt="celebrate" boxSize="80px" />
          </Box>
        </Flex>

        {/* Heading */}
        <Heading fontSize="2xl" color="#6b4aa5">
          Yay! Let’s create your account 🎉
        </Heading>
        <Text fontSize="sm" color="gray.500" mt={2}>
          Already have an account?{" "}
          <Link color="purple.500" onClick={() => navigate("/login")}>
            Log in here
          </Link>
        </Text>

        {/* Signup form */}
        <Stack spacing={4} mt={6}>
          <Input placeholder="Full Name" type="text" focusBorderColor="#c29bd9" />
          <Input placeholder="Email" type="email" focusBorderColor="#c29bd9" />
          <Input placeholder="Password" type="password" focusBorderColor="#c29bd9" />
          <Input placeholder="Confirm Password" type="password" focusBorderColor="#c29bd9" />

          <Button
            bg="#c29bd9"
            color="white"
            _hover={{ bg: "#a371c5" }}
          >
            Sign Up
          </Button>
        </Stack>

        {/* Small circular icons */}
        <Flex justify="space-around" mt={8}>
          <Box bg="#fde2e4" borderRadius="full" p={2}>
            <Image src={ProfilePic} alt="profile" boxSize="40px" />
          </Box>
          <Box bg="#fef9c3" borderRadius="full" p={2}>
            <Image src={WarningIcon} alt="warning" boxSize="40px" />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}
