import React from 'react';
import {Center, Text} from 'native-base';
import LottieView from 'lottie-react-native';

const NoVideos = () => {
  return (
    <Center mt={24}>
      <LottieView
        source={require('../assets/lottie/noVideo.json')}
        autoPlay
        loop={false}
        style={{
          width: '70%',
        }}
      />
      <Text fontSize="3xl" color="#CED4DA" fontWeight={500}>
        This channel has no videos
      </Text>
      <Text fontSize="xl" color="#6C757D" fontWeight={300}>
        Videos you upload will appear here
      </Text>
    </Center>
  );
};

export default NoVideos;
