import React, { useContext, useEffect } from 'react';
import { ShopContext } from '../context/shopContext';
import { Icon, Box, Badge, Button } from '@chakra-ui/react';
import { MdDehaze, MdShoppingBasket } from 'react-icons/md';
import { ChevronDownIcon } from '@chakra-ui/icons';
import NavItem from './NavItem';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const {
    openCart,
    openMenu,
    checkout,
    isMenuOpen,
    categories,
    fetchProductCategories,
  } = useContext(ShopContext);
  useEffect(() => {
    fetchProductCategories();
  }, [fetchProductCategories]);

  if (!categories) return <div>Loading...</div>;
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
        display={{ base: isMenuOpen ? 'none' : 'block', md: 'none' }}
        fill="white"
        cursor="pointer"
        as={MdDehaze}
        w={30}
        h={30}
        onClick={() => openMenu()}
      ></Icon>
      <Box display={{ base: 'none', md: 'flex' }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/">About</NavItem>
        <Menu>
          <MenuButton
            as={Button}
            bg="#7D70BA"
            cursor={'pointer'}
            _active={{ transform: 'scale(0.98)', borderColor: 'white' }}
            _focus={{ borderColor: 'white' }}
          >
            Categories <ChevronDownIcon />
          </MenuButton>
          <MenuList cursor={'pointer'}>
            {categories.map((category) => (
              <Link to={`/categories/${category.id}`} key={category.id}>
                <MenuItem cursor={'pointer'}>{category.title}</MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>
      </Box>

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
