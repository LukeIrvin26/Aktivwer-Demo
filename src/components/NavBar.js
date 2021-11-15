import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { Icon, Image, Box, Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdDehaze, MdShoppingBasket } from 'react-icons/md';

const NavBar = () => {
  const { openCart, openMenu, checkout } = useContext(ShopContext);
  return (
    <Box
      borderBottom="0.25pt white solid"
      backgroundColor="#7D70BA"
      display="flex"
      flexDir="row"
      justifyContent="space-between"
      p="2rem"
      alignItems="center"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdDehaze}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Link to="/">
        <Image src={process.env.PUBLIC_URL + '/logo512.png'} w={100} h={100} />
      </Link>
      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingBasket}
          w={30}
          h={30}
          onClick={() => openCart()}
        />
        <Badge backgroundColor="#FF38BD" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Box>
  );
};

export default NavBar;
