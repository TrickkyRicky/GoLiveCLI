import React, {useState, useEffect} from 'react';
import {ScrollView, Dimensions, Share} from 'react-native';
import {Box, HStack, Text, VStack, Center, Heading} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/AntDesign';
import ShareIcon from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-media-console';
import {MotiView, AnimatePresence} from 'moti';
import Orientation from 'react-native-orientation-locker';
import {sPath, vPath} from '../utility/dev';

const PlayStream = props => {
  const [playerRef, setPlayerRef] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const {height} = Dimensions.get('window');
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

  const toggleFullScreen = () => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      setIsFullScreen(false);
    } else {
      Orientation.lockToLandscape();
      setIsFullScreen(true);
    }
  };

  return (
    <Box flex={1} bg="#000">
      <SafeAreaView>
        <Center h={height * 0.24} w={width}>
          <VideoPlayer
            source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
            navigator={props.navigation}
            rewindTime={10}
            forwardTime={10}
            controlTimeoutDelay={5000}
            toggleResizeModeOnFullscreen={false}
            fullscreen={isFullScreen}
            fullscreenOrientation="all"
            pictureInPicture={true}
            playInBackground={true}
            playWhenInactive={true}
            // poster="https://picsum.photos/200/300"
            // posterResizeMode="cover"
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
            onEnterFullscreen={() => setIsFullScreen(true)}
            onExitFullscreen={() => setIsFullScreen(false)}
          />
        </Center>
        <ScrollView
          style={{height: '100%', backgroundColor: '#101010'}}
          showsVerticalScrollIndicator={false}>
          <VStack w={width} p={3}>
            <HStack justifyContent="space-between" alignItems="center">
              <HStack alignItems="center">
                <Center
                  bg={`#${bgColor}`}
                  width={10}
                  height={10}
                  borderRadius={100}
                />
                <Heading
                  color="#ADB5BD"
                  size="sm"
                  fontWeight={400}
                  ml={2}
                  isTruncated={true}
                  // width={width * 0.4}
                >
                  {streamerName}
                </Heading>
              </HStack>
              <Text
                color="#ADB5BD"
                fontSize="xs"
                fontWeight={500}
                ml={2}
                isTruncated={true}
                // width={width * 0.4}
              >
                56,545 viewers
              </Text>
            </HStack>
            <Heading
              color="#ADB5BD"
              size="xl"
              my={3}
              fontWeight="bold"
              isTruncated={true}
              numberOfLines={2}
              width={width * 0.7}>
              {streamName}
            </Heading>

            <HStack justifyContent="space-between" alignItems="center">
              <Box bg="#35C280" px={5} py={1} borderRadius={10}>
                <Text color="#fff" fontSize="md">
                  Follow
                </Text>
              </Box>

              <ShareIcon
                name="ios-share-outline"
                size={30}
                color="#35C280"
                onPress={() => shareTest()}
              />
            </HStack>
          </VStack>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

export default PlayStream;
