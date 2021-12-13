import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import { Box, Grid, Image, Text, Center } from '@chakra-ui/react';
import RichText from '../components/RichText';

const CategoryPage = () => {
  const { id } = useParams();
  const { fetchCategoryWithId, category } = useContext(ShopContext);

  useEffect(() => {
    fetchCategoryWithId(id);
  }, [fetchCategoryWithId, id]);
  if (!category) return <div>Loading...</div>;

  return (
    <>
      <Box p="2rem" backgroundColor="#343633" color="white">
        <RichText heading={category.title}></RichText>
        <Grid
          templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}
          id="categories"
          backgroundColor="#93867f"
        >
          {category.products.map((product) => (
            <Link to={`/products/${product.handle}`} key={product.id}>
              <Box
                _hover={{ opacity: '80%' }}
                textAlign="center"
                position="relative"
                py="2"
              >
                <Center>
                  <Image
                    src={product.images[0].src}
                    h={500}
                    w={500}
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
    </>
  );
};

export default CategoryPage;
