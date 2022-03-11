import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {NodePlayerView} from 'react-native-nodemediaclient';
import Icon from 'react-native-vector-icons/AntDesign';

const PlayStream = props => {
  const [playerRef, setPlayerRef] = useState(null);

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);

  return (
    <View style={{flex: 1}}>
      <NodePlayerView
        style={{flex: 1, backgroundColor: '#1F1F1F'}}
        ref={vp => {
          setPlayerRef(vp);
        }}
        inputUrl={
          props.route.params.playserver +
          props.route.params.stream +
          '/index.m3u8'
        }
        scaleMode={'ScaleAspectFill'}
        bufferTime={300}
        maxBufferTime={1000}
        autoplay={true}
        onStatus={(code, msg) => {
          console.log('onStatus=' + code + ' msg=' + msg);
        }}
      />

      <Icon
        name="leftcircle"
        size={30}
        onPress={() => {
          props.navigation.goBack();
        }}
        color="#8FE0BA"
        style={{
          padding: 12,
          position: 'absolute',
          top: 46,
          left: 23,
          zIndex: 2,
        }}
      />
    </View>
  );
};

export default PlayStream;
