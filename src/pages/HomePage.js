import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Link } from 'react-router-dom';
import { Box, Grid, Text, Image, Center } from '@chakra-ui/react';
import Hero from '../components/Hero';
import ImageWithText from '../components/imageWithText';
import RichText from '../components/RichText';

const HomePage = () => {
  const { categories, fetchProductCategories } = useContext(ShopContext);
  useEffect(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  if (!categories) return <div>Loading...</div>;

  console.log(categories);

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
        {categories.map((category) => (
          <Link to={`/categories/${category.id}`} key={category.id}>
            <Box
              _hover={{ opacity: '80%' }}
              textAlign="center"
              position="relative"
              pt="5"
            >
              <Center>
                <Image
                  h={500}
                  w={500}
                  src={category.products[0].images[0].src}
                  fit="cover"
                />
              </Center>
            </Box>
            <Box textAlign="center" pt="2" pb="5">
              <Text fontSize="20" fontWeight="bold">
                {category.title}
              </Text>
            </Box>
          </Link>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
