// src/SplashScreen.js
import React from "react";
import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import LogoVideo from "./assets/logo/HerCare.mp4";
// change filename if needed

export default function SplashScreen() {
  return (
    <Box
      w="100vw"
      h="100vh"
      bg="#e9d5ff" // pastel lavender
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack spacing={6}>
        {/* Video logo */}
        <motion.video
          src={LogoVideo}
          autoPlay
          loop
          muted
          style={{
            width: 250,
            borderRadius: "20px", // slightly rounded corners
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        />

        {/* Animated text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#6b4aa5">
            Let’s get started
          </Text>
        </motion.div>

        {/* Optional next button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Button colorScheme="purple">Next</Button>
        </motion.div>
      </VStack>
    </Box>
  );
}


