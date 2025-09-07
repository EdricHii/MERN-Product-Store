import { Container, VStack, Text, SimpleGrid, Box } from '@chakra-ui/react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import ProductCard from '../components/ProductCard';

const Homepage = () => {
  const {fetchProducts,products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log(products);

  return (
    <Container maxW="container.lg" py={12}>
      <VStack spacing={8}>
        {/* Title */}
        <Text
          fontSize={30} // number for pixels
          fontWeight="bold"
          bgGradient="linear(to-r, cyan.400, blue.500)" // valid Chakra colors
          bgClip="text"
          textAlign="center"
        >
          Current Products 🚀
        </Text>

        {/* Product grid */}
        <SimpleGrid columns={{
          base:1,
          md:2,
          lg:3,
        }}
         spacing={10} 
         w="full"
         >
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>

        {/* No products message */}
       {products.length ===0 && (
        <Text
          fontSize="xl"
          textAlign="center"
          fontWeight="bold"
          color="gray.500"
        >
          No products found 😢{' '}
          <Link to="/create">
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: 'underline' }}
            >
              Create a product
            </Text>
          </Link>
        </Text>
        )} 
      </VStack>
    </Container>
  );
};

export default Homepage;
