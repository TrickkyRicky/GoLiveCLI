import React from 'react';
import {Box, Text, Center} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const NewCategory = ({category, icon}) => {
  return (
    <Box mx={2} justifyContent="center" alignItems="center">
      <Center px={4} py={10} bg="#212529" borderRadius={10}>
        <Icon name={icon} size={25} color="#35C280" />
        <Text color="#35C280" fontSize="md" fontWeight="700">
          {category}
        </Text>
      </Center>
    </Box>
  );
};

export default NewCategory;
