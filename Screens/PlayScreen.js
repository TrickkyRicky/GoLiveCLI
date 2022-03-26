import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableWithoutFeedback, Share} from 'react-native';
import {Box, HStack, Text, VStack, Center} from 'native-base';
import {NodePlayerView} from 'react-native-nodemediaclient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-media-console';
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
    <Box flex={1} bg="#101010">
      <SafeAreaView style={{paddingBottom: 0}}>
        <Center h={300} w={width}>
          <VideoPlayer
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            navigator={props.navigation}
            rewindTime={10}
            forwardTime={10}
            controlTimeoutDelay={5000}
            toggleResizeModeOnFullscreen={false}
            fullscreen={true}
            fullscreenOrientation="all"
            pictureInPicture={true}
            playInBackground={true}
            playWhenInactive={true}
            poster="https://picsum.photos/200/300"
            posterResizeMode="cover"
            volume={1}
            showDuration={false}
            ignoreSilentSwitch="ignore"
            showTimeRemaining={true}
            showHours={false}
            disableVolume={true}
            seekColor="#35C280"
            style={{
              width,
            }}
            videoStyle={{width}}
            // onEnterFullscreen={() => { }}
          />
        </Center>
        <ScrollView
          style={{height: '100%', backgroundColor: '#101010'}}
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
