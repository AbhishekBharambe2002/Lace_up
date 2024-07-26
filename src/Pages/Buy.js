import React from 'react';
import {
  Box,
  Image,
  Text,
  VStack,
  HStack,
  Select,
  Button,
  Badge,
  Divider,
} from '@chakra-ui/react';
import shoe3 from '../images/shoe3.png';

const Buy = () => {
  return (
    <Box p={5} display={{ md: 'flex' }} maxWidth="7xl" mx="auto" 
     background="linear-gradient(to right, rgba(229,229,229) 50%, white 50%)"
    >
      <VStack spacing={4} flex={1}>
        <Image
          src={shoe3} 
          alt="Product Image"
          borderRadius="md"
        />
      </VStack>

      <Box flex={1} p={5}>
        <VStack align="start" spacing={4}>
          <Text fontSize="2xl" fontWeight="bold">
            Nike Anthony Edition
          </Text>
          <HStack>
            <Badge colorScheme="red" fontSize="lg">40% OFF</Badge>
            <Text as="s">Rs 410</Text>
            <Text fontSize="2xl" fontWeight="bold">Rs 215</Text>
          </HStack>
          <VStack spacing={2} align="start">
            <HStack spacing={2} border="2px" borderColor="black" width="400px" borderRadius="md" p={2}>
              <Text fontSize="sm" fontWeight="bold">Size:</Text>
              <Select borderColor="white" placeholder="Select size" width="100%">
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Select>
            </HStack>
            <HStack spacing={2} border="2px" borderColor="black" width="400px" borderRadius="md" p={2}>
              <Text fontSize="sm" fontWeight="bold">Color:</Text>
              <Select borderColor="white" placeholder="Select color" width="100%">
                <option value="blue">Blue</option>
                <option value="red">Red</option>
                <option value="black">Black</option>
              </Select>
            </HStack>
          </VStack>
          <Divider />
          <VStack spacing={4} w="400px">
            <Button colorScheme="orange" w="400px" borderRadius="10px">Buy one click</Button>
            <Button bg="black" color="white" w="400px" borderRadius="10px">Add to cart</Button>
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default Buy;
