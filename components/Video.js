import {StyleSheet, View} from 'react-native';
import {Text, Box, Image, HStack, VStack, Center} from 'native-base';
import React from 'react';
import Warzone from '../assets/warzone.jpg';

const Video = ({width}) => {
  return (
    <Box borderRadius={10} bg="#323432" width={width * 0.95} alignSelf="center">
      <Image
        source={Warzone}
        alt="stream image"
        height={180}
        width={width * 0.95}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        style={{resizeMode: 'cover'}}
      />
      <HStack
        py="2"
        px="2.5"
        justifyContent="space-between"
        alignItems="center">
        <HStack>
          <Center bg="#35C280" width={10} height={10} borderRadius={100} />
          <VStack ml={2}>
            <Text color="#fff" fontSize="sm" fontWeight="bold">
              24hr Caldera Stream
            </Text>
            <Text color="#fff" fontSize="xs" fontWeight="light">
              llamaLicker25
            </Text>
          </VStack>
        </HStack>

        <HStack>
          <Text color="#fff">305K</Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Video;
