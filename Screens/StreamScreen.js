import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, HStack, Text, Heading, Center} from 'native-base';
import LottieView from 'lottie-react-native';
const StreamScreen = ({navigation}) => {
  const [streamTitle, setStreamTitle] = useState('');

  return (
    <Box bg="#212529" flex={1} justifyContent="flex-end">
      <SafeAreaView>
        <VStack>
          <Center mb={75}>
            <LottieView
              source={require('../assets/lottie/live.json')}
              autoPlay
              loop
              style={{
                width: '90%',
              }}
            />
          </Center>

          <TouchableOpacity onPress={() => navigation.navigate('VideoForm')}>
            <Box
              bg="#495057"
              p={3}
              w={'90%'}
              mt={30}
              borderRadius={10}
              alignSelf="center">
              <Heading color="#fff">Upload a Video</Heading>
              <Text color="#fff">Upload a video or short clip</Text>
            </Box>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Form')}>
            <Box
              bg="#495057"
              p={3}
              w={'90%'}
              mt={3}
              mb={25}
              borderRadius={10}
              alignSelf="center">
              <Heading color="#fff">Create a Stream</Heading>
              <Text color="#fff">Stream live from your mobile device</Text>
            </Box>
          </TouchableOpacity>

          <Text
            color="#CCC"
            fontSize={9}
            px={2}
            mb={20}
            width={'95%'}
            alignSelf="center">
            By starting a live stream and/or uploading a video, you agree to the{' '}
            <Text onPress={() => null} color="#35C280" fontSize={9}>
              GoLive Community Guidelines
            </Text>
            . Harassment, illegal activites, hate speech, violence towards
            others, gore, sex and nudity are not appropriate.
          </Text>
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default StreamScreen;
