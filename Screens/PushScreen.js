import React, {useState, useEffect} from 'react';
import {Center, Text, VStack} from 'native-base';
import {View, TouchableOpacity} from 'react-native';
import {NodeCameraView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {shareSheet} from '../utility/share';
import {vPath, sPath} from '../utility/dev';
import LottieView from 'lottie-react-native';
import {MotiView, AnimatePresence} from 'moti';

const StreamContent = props => {
  const [playerRef, setPlayerRef] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  // const [playserver, setPlayserver] = useState('http://192.168.1.2/live/');
  // const [pushserver, setPushserver] = useState('http://192.168.1.2/live/');
  const [stream, setStream] = useState('STREAM_NAME');

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#101010'}}>
      <NodeCameraView
        style={{flex: 1}}
        ref={vb => {
          setPlayerRef(vb);
        }}
        outputUrl={pushserver + stream}
        camera={{cameraId: 1, cameraFrontMirror: true}}
        audio={{bitrate: 32000, profile: 1, samplerate: 44100}}
        video={{
          preset: 1,
          bitrate: 500000,
          profile: 1,
          fps: 30,
          videoFrontMirror: false,
        }}
        smoothSkinLevel={3}
        autopreview={true}
        onStatus={(code, msg) => {
          console.log('onStatus=' + code + ' msg=' + msg);
        }}
      />

      {isStreaming ? (
        <Center
          width="25%"
          h={5}
          position="absolute"
          top={20}
          left={2}
          opacity={0.7}>
          <LottieView
            source={require('../assets/lottie/streaming2.json')}
            autoPlay
            loop
            style={{
              width: '100%',
            }}
          />
        </Center>
      ) : null}

      <VStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top={60}
        right={23}>
        <Center
          bg="black"
          width={12}
          height={12}
          opacity={0.5}
          borderRadius={50}>
          <Icon
            name="close"
            size={30}
            onPress={() => {
              playerRef.stop();
              props.navigation.goBack();
            }}
            color="#35C280"
          />
        </Center>
      </VStack>

      <VStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={310}
        right={23}>
        <Center
          bg="black"
          width={12}
          height={12}
          opacity={0.5}
          borderRadius={50}>
          <Icon2
            name="ios-arrow-redo-outline"
            size={30}
            onPress={() => shareSheet(stream)}
            color="#35C280"
          />
        </Center>
        <Text letterSpacing={1.6} color="#fff" opacity={0.6}>
          SHARE
        </Text>
      </VStack>

      <VStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={230}
        right={23}>
        <Center
          bg="black"
          width={12}
          height={12}
          opacity={0.5}
          borderRadius={50}>
          <Icon2
            name="flash-outline"
            size={30}
            onPress={() => {
              setToggle(!toggle);
              playerRef.flashEnable(toggle);
            }}
            color="#35C280"
          />
        </Center>
        <Text letterSpacing={1.6} color="#fff" opacity={0.6}>
          FLASH
        </Text>
      </VStack>

      <VStack
        justifyContent="center"
        alignItems="center"
        position="absolute"
        bottom={150}
        right={23}>
        <Center
          bg="black"
          width={12}
          height={12}
          opacity={0.5}
          borderRadius={50}>
          <Icon2
            name="camera-reverse-outline"
            size={30}
            onPress={() => {
              playerRef.switchCamera();
            }}
            color="#35C280"
          />
        </Center>
        <Text letterSpacing={1.6} color="#fff" opacity={0.6}>
          FLIP
        </Text>
      </VStack>

      <AnimatePresence>
        {isStreaming ? null : (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              playerRef.start();
              setIsStreaming(true);
            }}>
            <MotiView
              from={{opacity: 1}}
              animate={{opacity: 1}}
              exit={{
                opacity: 0,
              }}>
              <Center
                w="25s%"
                position="absolute"
                bottom={12}
                left="38%"
                zIndex={2}>
                <LottieView
                  source={require('../assets/lottie/startButton.json')}
                  autoPlay
                  loop
                  style={{
                    width: '100%',
                  }}
                />
              </Center>
            </MotiView>
          </TouchableOpacity>
        )}
      </AnimatePresence>
    </View>
  );
};

export default StreamContent;

// {
//   isLive ? (
//     <Box
//       width="25%"
//       h={6}
//       borderRadius={30}
//       position="absolute"
//       top={-7}
//       left={-10}>
//       <LottieView
//         source={require('../assets/lottie/streaming.json')}
//         autoPlay
//         loop
//         style={{
//           width: '100%',
//         }}
//       />
//     </Box>
//   ) : null;
// }
