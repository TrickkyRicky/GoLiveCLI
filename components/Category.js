import React from 'react';
import {Box, Text} from 'native-base';

const Category = ({category}) => {
  return (
    <Box
      px={5}
      h={10}
      bg="#212529"
      borderTopLeftRadius={30}
      borderBottomRightRadius={30}
      borderTopRightRadius={10}
      borderBottomLeftRadius={10}
      mr={2}
      justifyContent="center"
      alignItems="center">
      <Text px={3} color="#35C280" fontSize="md" fontWeight="700">
        {category}
      </Text>
    </Box>
  );
};

export default Category;
