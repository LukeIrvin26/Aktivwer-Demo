import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box backgroundColor="#7D70BA">
      <Grid
        templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']}
        color="black"
        fontWeight="bold"
      >
        <Image src={process.env.PUBLIC_URL + '/logo192.png'} ml={[135, 10]} />
        <VStack p="2rem">
          <Link to="/">The Green Blast</Link>
          <Link to="/">The Blue Berry</Link>
          <Link to="/">The Yellow Mellow</Link>
        </VStack>
        <VStack p="2rem">
          <Link to="/">About Us</Link>
          <Link to="/">Learn More</Link>
          <Link to="/">Sustainability</Link>
        </VStack>
      </Grid>
      <Box>
        <Text
          textAlign="center"
          color="black"
          w="100%"
          borderTop="1px solid black"
          p="1rem"
        >
          © Copyright Aktivwer
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
