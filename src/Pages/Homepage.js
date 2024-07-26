import React, { useState } from 'react';
import { Box, Flex, Text, IconButton, Image, Button } from '@chakra-ui/react';
import {FaArrowRight } from 'react-icons/fa';
import shoe1 from '../images/shoe1.png';
import shoe2 from '../images/shoe2.png';
import shoe3 from '../images/shoe3.png';

const slides = [
  {
    image: shoe1,
    heading: 'NIKE',
    subheading: 'Nike Jordan',
    description: 'Elit. Vestibulum Sit Elit Cursus Morbi Malesuada Sed Cras Turpis Trincidunt In Cras Maximus Adipiscing Amet, Felis, Ut Donec',
    price: '$159'
  },
  {
    image: shoe2,
    heading: 'NIKE',
    subheading: 'Nike Jordan',
    description: 'Elit. Vestibulum Sit Elit Cursus Morbi Malesuada Sed Cras Turpis Trincidunt In Cras Maximus Adipiscing Amet, Felis, Ut Donec',
    price: '$159'
  },
  {
    image: shoe3,
    heading: 'Adidas',
    subheading: 'Messi',
    description: 'Elit. Vestibulum Sit Elit Cursus Morbi Malesuada Sed Cras Turpis Trincidunt In Cras Maximus Adipiscing Amet, Felis, Ut Donec',
    price: '$159'
  }
];

const Homepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box position="relative" w="full" h="600px" background="linear-gradient(to right, rgba(229,229,229) 50%, white 50%)">
      <Flex h="full" position="relative">
        <Box flex="1" display="flex" alignItems="center" justifyContent="center" pl={12}>
          <Box textAlign="left">
            <Text fontSize="5xl" mb={4} fontWeight="bold">{slides[currentSlide].heading}</Text>
            <Text fontSize="xl" fontWeight="bold" mt={5}>{slides[currentSlide].subheading}</Text>
            <Text fontSize="md" color="gray.600" mt={2}>{slides[currentSlide].description}</Text>
            <Button colorScheme="orange" variant="solid" mt={4}>EXPLORE NOW</Button>
          </Box>
        </Box>

        <Box flex="1" display="flex" mb="300" alignItems="center" justifyContent="center">
          <Image
            src={slides[currentSlide].image}
            alt={`Slide ${currentSlide + 1}`}
            objectFit="contain"
            boxSize="400px"
            mx="auto"
            background="transparent"
          />
        </Box>

        <Box flex="1" display="flex" alignItems="center" justifyContent="center" pr={20}>
          <Box textAlign="right" >
            <Text fontSize="xl" fontWeight="bold" mt={32}>{slides[currentSlide].subheading}</Text>
            <Text fontSize="md" color="gray.600" mt={2}>{slides[currentSlide].description}</Text>
            <Button colorScheme="orange" variant="solid" mt={4}>ADD TO BAG</Button>
            <Text fontSize="2xl" fontWeight="bold" mt={4}>{slides[currentSlide].price}</Text>
          </Box>
        </Box>
      </Flex>
      <IconButton
        aria-label="Next Slide"
        icon={<FaArrowRight />}
        onClick={handleNextSlide}
        variant="ghost"
        position="absolute"
        right="20px"
        top="45%"
        transform="translateY(-50%)"
        zIndex="2"
        borderRadius="50%"
        border="2px solid black"
        color="orange"
        _hover={{ backgroundColor: 'orange.200' }}
      />
    </Box>
  );
};

export default Homepage;
