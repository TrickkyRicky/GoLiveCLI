import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {Text} from 'native-base';
import {NodeCameraView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';

const StreamContent = props => {
  const [playerRef, setPlayerRef] = useState(null);

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#1F1F1F'}}>
      <NodeCameraView
        style={{flex: 1}}
        ref={vb => {
          setPlayerRef(vb);
        }}
        outputUrl={props.route.params.pushserver + props.route.params.stream}
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

      <Icon
        name="leftcircleo"
        size={30}
        onPress={() => {
          playerRef.stop();
          props.navigation.goBack();
        }}
        color="#35C280"
        style={{
          padding: 12,
          position: 'absolute',
          top: 46,
          left: 23,
          zIndex: 2,
        }}
      />

      <Icon2
        name="camera-reverse-outline"
        size={30}
        onPress={() => {
          playerRef.switchCamera();
        }}
        color="#35C280"
        style={{
          padding: 12,
          position: 'absolute',
          top: 46,
          right: 23,
          zIndex: 2,
        }}
      />

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
