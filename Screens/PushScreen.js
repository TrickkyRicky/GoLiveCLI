import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Share} from 'react-native';
import {Center, Text, VStack} from 'native-base';
import {NodeCameraView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const StreamContent = props => {
  const [playerRef, setPlayerRef] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);

  const shareTest = async () => {
    try {
      const result = await Share.share(
        {
          message: `Check out this livestream\nhttps://www.dummyurl.com/live/llamalicker25`,
        },
        {
          tintColor: '#35C280',
          subject: 'GoLive',
        },
      );
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#101010'}}>
      <NodeCameraView
        style={{flex: 1}}
        ref={vb => {
          setPlayerRef(vb);
        }}
        // outputUrl={props.route.params.pushserver + props.route.params.stream}
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
              // playerRef.stop();
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
            onPress={() => shareTest()}
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
              // playerRef.stopPreview();
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

      {/* <TouchableOpacity
        onPress={() => {
          playerRef.start();
        }}>
        <View
          style={{
            padding: 12,
            backgroundColor: 'rgba(10, 125, 10, 0.2)',
            borderRadius: 15,
            position: 'absolute',
            bottom: 80,
            zIndex: 2,
            alignSelf: 'center',
          }}>
          <Text style={{color: '#fff', fontSize: 16}}>Start Streaming</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};

export default StreamContent;
