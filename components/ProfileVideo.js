import {Text, Box, Image, HStack, VStack, Center} from 'native-base';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ProfileVideo = ({width, streamName, streamerName, image}) => {
  return (
    <Box borderRadius={10} width={width * 0.9} alignSelf="center" m={2}>
      <Image
        source={image}
        alt="stream image"
        height={200}
        width={'100%'}
        borderRadius={20}
        style={{resizeMode: 'cover'}}
      />

      <Box
        bg="#000"
        opacity={0.5}
        px={2}
        h={6}
        borderRadius={7}
        position="absolute"
        top={3}
        left={3}
        justifyContent="center"
        alignContent="center">
        <Text fontSize="xs" color="#CCC">
          3:52
        </Text>
      </Box>

      <LinearGradient
        colors={['transparent', '#000']}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: width * 0.9,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          opacity: 1,
        }}>
        <Box h={100} />
      </LinearGradient>
      <Box px={2} borderRadius={30} position="absolute" bottom={2} left={0}>
        <HStack>
          <Center bg="#2B6FFF" width={9} height={9} borderRadius={100} />
          <VStack ml={2} mr={3.5}>
            <Text
              color="#F8F9FA"
              fontSize="sm"
              fontWeight={700}
              isTruncated={true}
              width={width * 0.5}>
              {streamName}
            </Text>
            <Text
              color="#ADB5BD"
              fontSize="xs"
              fontWeight={500}
              isTruncated={true}
              width={width * 0.5}>
              {streamerName}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

export default ProfileVideo;
