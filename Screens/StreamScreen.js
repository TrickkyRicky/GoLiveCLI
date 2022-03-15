import {View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, HStack, Text, Heading, Button, Center} from 'native-base';
import LottieView from 'lottie-react-native';
import {sPath, vPath} from '../utility/dev';

const StreamScreen = ({navigation}) => {
  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');
  return (
    <Box bg="#1F1F1f" flex={1} justifyContent="flex-end">
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
          {/* <Heading size="2xl" mt={3} color="#fff" ml={2} alignSelf="center">
            Go Live in 5
          </Heading> */}
          {/* <Text color="#fff">Lets Get start with starting a live stream</Text> */}

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Push', {
                pushserver: pushserver,
                stream: stream,
              })
            }>
            <Box
              bg="#414141"
              p={3}
              // h={25}
              w={'90%'}
              mt={75}
              mb={25}
              borderRadius={10}
              alignSelf="center">
              <Heading color="#fff">Create a Stream</Heading>
              <Text color="#fff">Stream live from your mobile device</Text>
            </Box>
          </TouchableOpacity>

          <Text color="#CCC" fontSize={9} px={2} mb={20} width={'100%'}>
            By starting a live stream, you agree to the{' '}
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
