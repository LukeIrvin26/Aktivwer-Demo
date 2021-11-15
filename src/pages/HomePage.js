import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Center } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/imageWithText';
import RichText from '../components/RichText';

const HomePage = () => {
  const { fetchAllProducts, products } = useContext(ShopContext);
  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!products) return <div>Loading...</div>;

  return (
    <Box>
      <Hero />
      <RichText
        heading="Lorem ipsum dolor sit amet, consectetur."
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit."
      />
      <ImageWithText
        button
        image={process.env.PUBLIC_URL + '/logo512.png'}
        heading="Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
      <RichText heading="Lorem ipsum" />
      <ImageWithText
        reverse
        button
        image={process.env.PUBLIC_URL + '/logo512.png'}
        heading="Second Heading"
        text="I'm baby kale chips twee skateboard tattooed, DIY iPhone ugh mixtape tumeric unicorn narwhal. Iceland shoreditch authentic, sartorial vegan twee flannel banh mi bushwick retro farm-to-table single-origin coffee."
      />
      <Grid
        templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}
        backgroundColor="#93867F"
      >
        {products.map((product) => (
          <Link to={`/products/${product.handle}`} key={product.id}>
            <Box
              _hover={{ opacity: '80%' }}
              textAlign="center"
              position="relative"
              py="2"
            >
              <Center>
                <Image
                  h={500}
                  w={500}
                  src={product.images[0].src}
                  fit="cover"
                />
              </Center>
            </Box>
            <Box textAlign="center">
              <Text fontSize="20" fontWeight="bold">
                {product.title}
              </Text>
              <Text>${product.variants[0].price}</Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
