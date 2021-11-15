import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/shopContext';
import {
  Box,
  Grid,
  Image,
  Text,
  Button,
  Heading,
  Flex,
  Center,
} from '@chakra-ui/react';
import RichText from '../components/RichText';

const ProductPage = () => {
  const { handle } = useParams();
  const {
    fetchProductWithHandle,
    fetchAllProducts,
    addItemToCheckout,
    product,
    products,
  } = useContext(ShopContext);

  useEffect(() => {
    fetchProductWithHandle(handle);
  }, [fetchProductWithHandle, handle]);

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  if (!product.title) return <div>Loading...</div>;

  return (
    <>
      <Box p="2rem" backgroundColor="#343633" color="white">
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m="auto">
          <Flex justifyContent="center" alignItems="center">
            <Image src={product.images[0].src} />
          </Flex>
          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            justifyContent="center"
            px="2rem"
          >
            <Heading pb="2rem">{product.title}</Heading>
            <Text fontWeight="bold" pb="2rem">
              {product.variants[0].price}
            </Text>
            <Text pb="2rem">{product.description}</Text>
            <Button
              backgroundColor="#5cc8ff"
              onClick={() => addItemToCheckout(product.variants[0].id, 1)}
              _hover={{ opacity: '70%' }}
              w="10rem"
            >
              Add To Cart
            </Button>
          </Box>
        </Grid>
      </Box>
      <RichText heading="Lorem ipsum dolor sit amet, consectetur adipiscing" />
      <Center fontWeight="bold" pb="2rem">
        You might also like
      </Center>
      <Grid
        templateColumns={['repeat(1fr)', 'repeat(3, 1fr)']}
        id="products"
        backgroundColor="#93867f"
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
    </>
  );
};

export default ProductPage;
