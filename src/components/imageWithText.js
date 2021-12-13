import React from 'react';
import { Box, Flex, Button, Text, Image, Heading } from '@chakra-ui/react';

const imageWithText = ({ button, reverse, image, heading, text }) => {
  const reverseSection = reverse ? 'row-reverse' : 'row';
  return (
    <Box backgroundColor="#DEC1FF" h='50em' py="2">
      <Flex flexDir={['column', reverseSection]} w="100%" h="100%">
        <Image src={image} objectFit="contain" w={['100%', '50%']} />
        <Box
          display="inline-block"
          w="0.5"
          backgroundColor="gray.400"
          my="6"
          h="80%"
        ></Box>
        <Box
          display="flex"
          w={['100%', '50%']}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p="2rem"
        >
          <Heading pb="2rem">{heading && heading}</Heading>
          <Text pb="2rem">{text && text}</Text>
          {button ? (
            <Button
              w="10rem"
              backgroundColor="#5CC8FF"
              _hover={{ opacity: '70%' }}
            >
              Buy Now
            </Button>
          ) : null}
        </Box>
      </Flex>
    </Box>
  );
};

export default imageWithText;
