import {Text, Box, Image, HStack, VStack, Center} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const DiscoverVideo = ({width, streamName, streamerName, views, image}) => {
  return (
    <Box
      borderRadius={10}
      bg="#343A40"
      width={width * 0.95}
      my={2}
      mx={2}
      alignSelf="center">
      <Image
        source={image}
        alt="stream image"
        height={180}
        width={width}
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
            <Text
              color="#fff"
              fontSize="sm"
              fontWeight="bold"
              isTruncated={true}
              width={width * 0.4}>
              {streamName}
            </Text>
            <Text
              color="#fff"
              fontSize="xs"
              fontWeight="light"
              isTruncated={true}
              width={width * 0.4}>
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

export default DiscoverVideo;
