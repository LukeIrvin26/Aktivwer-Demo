import React from 'react';
import { Box, Button, Text, Image, Center } from '@chakra-ui/react';

const Hero = () => {
  return (
    <Box w="100%" position="relative" h="70vh" backgroundColor="#343633">
      <Image
        className="fade-in"
        src={process.env.PUBLIC_URL + '/logo512.png'}
        h="70%"
        m="auto"
        objectFit="contain"
        objectPosition={['top', 'center']}
      />
      <Text
        className="tracking-in-expand-fwd"
        position="absolute"
        bottom="20%"
        w="100%"
        textAlign="center"
        color="white"
        fontWeight="bold"
        fontSize="4rem"
      >
        Introducing Aktivwer
      </Text>
      <Center>
        <Button
          w="10rem"
          _hover={{ opacity: '70%' }}
          position="absolute"
          bottom="10%"
          backgroundColor="#5cc8ff"
        >
          Shop Now
        </Button>
      </Center>
    </Box>
  );
};

export default Hero;
