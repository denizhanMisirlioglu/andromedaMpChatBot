"use client";
import { Box, Button, Heading } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import EmbeddableList from "./List";
import NoClientLayout from "@/modules/common/layout/components/NoClientLayout";
import FAQChatbot from "./FAQChatbot"; // Ensure this is imported

interface HomePageProps {
  apps: string[];
  chainId: string;
}

const HomePage: FC<HomePageProps> = (props) => {
  const { apps, chainId } = props;
  const [showChatbot, setShowChatbot] = useState(false); // State to control chatbot visibility

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot); // Toggle chatbot visibility on button click
  };

  return (
    <NoClientLayout>
      <Box>
        <Heading textAlign={'start'} fontWeight='600' fontSize={'24px'}>
          Explore Apps created by community
        </Heading>
        <EmbeddableList apps={apps} chainId={chainId} />
        
        {/* Chatbot button */}
        <Button 
          onClick={toggleChatbot} 
          position="absolute" 
          top="20px" 
          right="20px"
          zIndex={1000} // Ensure button appears on top
          colorScheme="teal" // Button color
          variant="solid" // Button style
        >
          {showChatbot ? 'Close Chatbot' : 'Open Chatbot'}
        </Button>

        {/* Chatbot component, check visibility */}
        {showChatbot && <FAQChatbot />}
      </Box>
    </NoClientLayout>
  );
};

export default HomePage;
