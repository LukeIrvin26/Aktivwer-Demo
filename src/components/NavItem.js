import { Link } from 'react-router-dom';
import { Text, Button } from '@chakra-ui/react';

const NavItem = ({ children, isLast, to = '/' }) => {
  return (
    <Text
      as={Button}
      bg="#7D70BA"
      _active={{
        transform: 'scale(0.98)',
        borderColor: 'white',
      }}
      _focus={{ borderColor: 'white' }}
      cursor={'pointer'}
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
    >
      <Link to={to}>{children}</Link>
    </Text>
  );
};

export default NavItem;
