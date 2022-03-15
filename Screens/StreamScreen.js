import {View, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, HStack, Text, Heading, Button} from 'native-base';
import {sPath, vPath} from '../utility/dev';

const StreamScreen = ({navigation}) => {
  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');
  return (
    <Box bg="#1F1F1f" flex={1}>
      <SafeAreaView>
        <Heading size="2xl" mt={3} color="#fff" ml={2}>
          Stream a Video
        </Heading>
        <Button
          mx={4}
          borderRadius={10}
          bg="#35C280"
          onPress={() =>
            navigation.navigate('Push', {
              pushserver: pushserver,
              stream: stream,
            })
          }>
          Click on me
        </Button>
      </SafeAreaView>
    </Box>
  );
};

export default StreamScreen;
