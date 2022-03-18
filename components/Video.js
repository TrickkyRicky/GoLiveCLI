import {Text, Box, Image, HStack, VStack, Center} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const Video = ({width, streamName, streamerName, views, image, bgColor}) => {
  return (
    <Box borderRadius={10} width={width * 0.7} m={2}>
      <Image
        source={image}
        alt="stream image"
        height={160}
        width={width}
        borderRadius={5}
        style={{resizeMode: 'cover'}}
      />

      <Box
        bg="#000"
        opacity={0.7}
        width="25%"
        h={6}
        borderRadius={30}
        position="absolute"
        bottom={16}
        left={3}>
        <HStack
          p={1}
          space={1}
          ml={1}
          alignItems="center"
          justifyContent="center">
          <Icon name="eye" size={14} color="#CCC" />
          <Text fontSize="xs" color="#CCC">
            {views}
          </Text>
        </HStack>
      </Box>

      <HStack py="2" justifyContent="space-between" alignItems="center">
        <HStack>
          <Center
            bg={`#${bgColor}`}
            width={10}
            height={10}
            borderRadius={100}
          />
          <VStack ml={2}>
            <Text
              color="#fff"
              fontSize="sm"
              fontWeight="bold"
              isTruncated={true}
              width={width * 0.55}>
              {streamName}
            </Text>
            <Text
              color="#fff"
              fontSize="xs"
              fontWeight="light"
              isTruncated={true}
              width={width * 0.55}>
              {streamerName}
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Box>
  );
};

export default Video;
