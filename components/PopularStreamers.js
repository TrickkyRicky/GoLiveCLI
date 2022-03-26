import {Dimensions} from 'react-native';
import React from 'react';
import {Box, Center, HStack, Text, VStack} from 'native-base';

const PopularStreamers = ({navigation, name, followers}) => {
  return (
    <Box p={5} bg="#212529" borderRadius={12} mr={3} mt={3} mb={4}>
      <HStack justifyContent="center" alignItems="center">
        <Center bg={'#2B6FFF'} width={12} height={12} borderRadius={100} />
        <VStack>
          <Text px={3} color="#35C280" fontSize="md" fontWeight="600">
            {name}
          </Text>
          <Text px={3} color="#6C757D" fontSize="md" fontWeight="400">
            {`${followers} Followers`}
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default PopularStreamers;
