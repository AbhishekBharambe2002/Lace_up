import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Avatar, Image } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import logo from '../images/logo.png';

const Navbar = () => {
  const [activeItem, setActiveItem] = useState('');

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const menuItems = [
    { label: 'Home', value: 'home' },
    { label: 'Contact', value: 'contact' },
    { label: 'Support', value: 'support' },
    { label: 'Products', value: 'products' }
  ];

  return (
    <Box
      bg="white"
      py={2}
      px={6}
      position="sticky"
      top={0}
      zIndex={1}
      background="linear-gradient(to right, rgba(229,229,229) 50%, white 50%)" 
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" flex="1">
          <Image
            src={logo}
            alt="Logo"
            boxSize="50px"
            mr={4}
          />
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="2">
          {menuItems.map((item) => (
            <Text
              key={item.value}
              fontSize="xl"
              fontWeight={activeItem === item.value ? 'bold' : 'semi-bold'}
              fontFamily="Handie"
              color="black"
              mx={10}
              cursor="pointer"
              borderBottom={activeItem === item.value ? '2px solid black' : 'none'}
              onClick={() => handleItemClick(item.value)}
            >
              {item.label}
            </Text>
          ))}
        </Flex>
        <Flex alignItems="center" justifyContent="flex-end" flex="1">
          <IconButton
            aria-label="Search"
            icon={<SearchIcon />}
            variant="ghost"
            size="lg"
            color="black"
            border='2px solid black'
            borderRadius="50%"
            mr={4}
          />
          <IconButton
            aria-label="Shopping Cart"
            icon={<FaShoppingCart />}
            variant="ghost"
            size="lg"
           color="whitesmoke"
            background="orange.400"
            border='2px orange.400'
            borderRadius='50%'
            mr={4}
          />
          <Avatar
            name="Profile"
            src="path/to/profile-picture.jpg" // Replace with actual path
            size="sm"
            mr={4}
          />
          <IconButton
            aria-label="Menu"
            icon={<FaBars />}
            variant="ghost"
            size="lg"
            color="black"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
