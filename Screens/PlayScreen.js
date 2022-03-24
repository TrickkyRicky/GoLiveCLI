import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableWithoutFeedback, Share} from 'react-native';
import {Box, HStack, Text, VStack, Center} from 'native-base';
import {NodePlayerView} from 'react-native-nodemediaclient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/Ionicons';
// import Share from 'react-native-share';
import {MotiView, AnimatePresence} from 'moti';
import {sPath, vPath} from '../utility/dev';

const PlayStream = props => {
  const [playerRef, setPlayerRef] = useState(null);
  const [showControls, setShowControls] = useState(false);

  const {streamName, streamerName, bgColor, width} = props.route.params;

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  useEffect(() => {
    return () => {
      if (playerRef) playerRef.stop();
    };
  }, []);

  let streamKey = 'g4hs6f6tds5';

  const shareTest = async () => {
    try {
      const result = await Share.share({
        message: `Check out this livestream https://www.dummyurl.com/live/${streamKey}`,
      });
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
    <Box flex={1} bg="#000">
      {/* <Icon
        name="leftcircleo"
        size={30}
        onPress={() => {
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
      /> */}
      <SafeAreaView style={{paddingBottom: 50}}>
        <TouchableWithoutFeedback
          onPress={() => setShowControls(!showControls)}>
          <Box h={'25%'}>
            <NodePlayerView
              style={{height: '100%', backgroundColor: '#1F1F1F'}}
              // ref={vp => {
              //   setPlayerRef(vp);
              // }}
              // inputUrl={
              //   props.route.params.playserver +
              //   props.route.params.stream +
              //   '/index.m3u8'
              // }
              scaleMode={'ScaleAspectFill'}
              bufferTime={300}
              maxBufferTime={1000}
              autoplay={true}
              onStatus={(code, msg) => {
                console.log('onStatus=' + code + ' msg=' + msg);
              }}
            />
            <AnimatePresence>
              {showControls ? (
                <MotiView
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '45%',
                  }}
                  from={{opacity: 0}}
                  animate={{opacity: 1}}
                  exit={{opacity: 0}}>
                  <Icon
                    name="play"
                    size={50}
                    color="#fff"
                    onPress={() => console.log('play button pressed')}
                  />
                </MotiView>
              ) : null}
            </AnimatePresence>
          </Box>
        </TouchableWithoutFeedback>
        <ScrollView
          style={{height: '100%', backgroundColor: '#212529'}}
          showsVerticalScrollIndicator={false}>
          <VStack p={2} mt={2}>
            <HStack>
              <Center
                bg={`#${bgColor}`}
                width={10}
                height={10}
                borderRadius={100}
              />
              <HStack>
                <VStack ml={2} mr={3.5}>
                  <Text
                    color="#fff"
                    fontSize="sm"
                    fontWeight="bold"
                    isTruncated={true}
                    width={width * 0.5}>
                    {streamName}
                  </Text>
                  <Text
                    color="#fff"
                    fontSize="xs"
                    fontWeight="light"
                    isTruncated={true}
                    width={width * 0.5}>
                    {streamerName}
                  </Text>
                </VStack>
                <ShareIcon
                  name="ios-share-outline"
                  size={30}
                  color="#35C280"
                  onPress={() => shareTest()}
                />
              </HStack>
            </HStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default PlayStream;
