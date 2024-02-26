import React from "react";
import { Box, Flex, Grid, Heading, Text, Image, Link, Stack, Input, Button, IconButton, useBreakpointValue, Container, VStack, HStack, Icon, SimpleGrid } from "@chakra-ui/react";
import { FaSearch, FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaRegComment, FaHeart, FaRegHeart, FaArrowCircleRight, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const CategoryCard = ({ title, image }) => (
    <Box position="relative" textAlign="center">
      <Image src={image} alt={title} borderRadius="md" />
      <Text position="absolute" bottom="2" left="2" color="white" fontWeight="bold" fontSize="lg" bg="rgba(0, 0, 0, 0.5)" p="2" borderRadius="md">
        {title}
      </Text>
    </Box>
  );

  return (
    <Box>
      <Flex direction="column" align="center" bg="gray.100">
        <Flex w="full" bg="white" py="4" px="6" justify="space-between" align="center" borderBottomWidth="1px">
          <Heading as="h1" size="xl" letterSpacing="tight">
            Women's Wave
          </Heading>
          <HStack spacing="4">
            <IconButton icon={<FaFacebookF />} isRound size="lg" aria-label="Facebook" colorScheme="facebook" />
            <IconButton icon={<FaTwitter />} isRound size="lg" aria-label="Twitter" colorScheme="twitter" />
            <IconButton icon={<FaInstagram />} isRound size="lg" aria-label="Instagram" colorScheme="red" />
            <IconButton icon={<FaPinterestP />} isRound size="lg" aria-label="Pinterest" colorScheme="red" />
          </HStack>
        </Flex>
        <Container maxW="container.xl" py="10">
          <VStack spacing="6">
            <Input placeholder="Search articles, topics, authors..." size="lg" />
            <Button leftIcon={<FaSearch />} colorScheme="pink" size="lg">
              Search
            </Button>
          </VStack>
        </Container>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6} w="full">
          <CategoryCard title="Lifestyle" image="https://images.unsplash.com/photo-1643551541861-4feca26c1c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaWZlc3R5bGUlMjBjYXRlZ29yeXxlbnwwfHx8fDE3MDg5NjE2MzR8MA&ixlib=rb-4.0.3&q=80&w=1080" />
          <CategoryCard title="Wellness" image="https://images.unsplash.com/photo-1515377905703-c4788e51af15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGNhdGVnb3J5fGVufDB8fHx8MTcwODk2MTYzNHww&ixlib=rb-4.0.3&q=80&w=1080" />
          <CategoryCard title="Culture" image="https://images.unsplash.com/photo-1622279486466-e0e3bfdd0a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdWx0dXJlJTIwY2F0ZWdvcnl8ZW58MHx8fHwxNzA4OTYxNjM0fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Grid>
        <Grid templateColumns="repeat(3, 1fr)" gap={6} p={6} w="full">
          <CategoryCard title="Career & Finance" image="https://images.unsplash.com/photo-1484981138541-3d074aa97716?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBmaW5hbmNlJTIwY2F0ZWdvcnl8ZW58MHx8fHwxNzA4OTYxNjM0fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <CategoryCard title="Fashion" image="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwY2F0ZWdvcnl8ZW58MHx8fHwxNzA4OTYxNjM1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
          <CategoryCard title="Entertainment" image="https://images.unsplash.com/photo-1470020618177-f49a96241ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbnRlcnRhaW5tZW50JTIwY2F0ZWdvcnl8ZW58MHx8fHwxNzA4OTYxNjM1fDA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Grid>
        <Box bg="white" py="10" w="full" borderTopWidth="1px">
          <Container maxW="container.xl">
            <Heading as="h2" size="xl" mb="5">
              Featured Articles
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {/* Mock data for featured articles */}
              {[1, 2, 3].map((_, i) => (
                <Box key={i} borderRadius="md" overflow="hidden">
                  <Image src="https://images.unsplash.com/photo-1599566276129-97d70dfdda11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhcnRpY2xlJTIwdGh1bWJuYWlsfGVufDB8fHx8MTcwODk2MTYzNXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Article thumbnail" />
                  <Box p="5">
                    <Link to="/article" style={{ textDecoration: "none" }}>
                      <Box p="5">
                        <Text fontWeight="bold" fontSize="lg" _hover={{ color: "teal.500" }}>
                          Article Title Here
                        </Text>
                      </Box>
                    </Link>
                    <Text mt="2" fontSize="sm" color="gray.600">
                      Short description of the article content...
                    </Text>
                    <HStack justify="space-between" mt="4">
                      <Link to="/article" style={{ textDecoration: "none", color: "pink.400", fontWeight: "bold" }}>
                        Read More
                      </Link>
                      <IconButton icon={<FaRegHeart />} aria-label="Like" variant="ghost" />
                    </HStack>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Container>
        </Box>
      </Flex>
    </Box>
  );
};

export default Index;
