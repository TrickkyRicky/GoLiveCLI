import {StyleSheet, View} from 'react-native';
import {Text, Box, Image, HStack, VStack, Center} from 'native-base';
import React from 'react';
import Warzone from '../assets/warzone.jpg';
import Icon from 'react-native-vector-icons/FontAwesome';

const Video = ({width, streamName, streamerName, views, image}) => {
  console.log(image);
  return (
    <Box
      borderRadius={10}
      bg="#323432"
      width={'100%'}
      my={2}
      alignSelf="center">
      <Image
        source={image}
        alt="stream image"
        height={180}
        width={width * 0.95}
        borderTopLeftRadius={10}
        borderTopRightRadius={10}
        style={{resizeMode: 'cover'}}
      />
      <HStack
        py="2"
        px="3.5"
        justifyContent="space-between"
        alignItems="center">
        <HStack>
          <Center bg="#35C280" width={10} height={10} borderRadius={100} />
          <VStack ml={2}>
            <Text color="#fff" fontSize="sm" fontWeight="bold">
              {streamName}
            </Text>
            <Text color="#fff" fontSize="xs" fontWeight="light">
              {streamerName}
            </Text>
          </VStack>
        </HStack>

        <HStack justifyContent="center" alignItems="center" sapce={5}>
          <Icon name="eye" size={15} color="#CCC" />
          <Text ml={1} color="#fff">
            {views}
          </Text>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Video;
