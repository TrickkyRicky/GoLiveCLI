import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, Dimensions, TouchableOpacity, FlatList} from 'react-native';
import {
  Box,
  HStack,
  Text,
  VStack,
  Center,
  Heading,
  Input,
  Button,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import Likes from 'react-native-vector-icons/AntDesign';
import VideoPlayer from 'react-native-media-console';
import {MotiView, AnimatePresence} from 'moti';
import LottieView from 'lottie-react-native';
import Orientation from 'react-native-orientation-locker';
import {sPath, vPath} from '../utility/dev';
import {COMMENTS} from '../utility/data';
import {shareSheet} from '../utility/share';
import Comments from '../components/Comments';

const PlayStream = props => {
  const [playerRef, setPlayerRef] = useState(null);
  const [showControls, setShowControls] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const animation = useRef(null);
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

  const streamKey = 'g4hs6f6tds5';

  const toggleFullScreen = () => {
    if (isFullScreen) {
      Orientation.lockToPortrait();
      setIsFullScreen(false);
    } else {
      Orientation.lockToLandscape();
      setIsFullScreen(true);
    }
  };

  const [changedData, setChangedData] = useState(COMMENTS);

  return (
    <Box flex={1} bg="#000">
      <SafeAreaView style={{backgroundColor: '#101010'}}>
        <Center h={height * 0.26} w={width}>
          <VideoPlayer
            // source={{
            //   uri: 'https://2572-2603-8081-1604-91e7-75eb-8bab-2abc-6a15.ngrok.io/live/STREAM_NAME/index.m3u8',
            // }}
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

        <VStack w={width}>
          <HStack
            justifyContent="space-between"
            alignItems="center"
            borderBottomColor="#212529"
            borderBottomWidth={1.5}>
            <HStack pl={3} py={3} alignItems="center">
              <Center
                bg={`#${bgColor}`}
                width={9}
                height={9}
                borderRadius={100}
              />
              <VStack alignItems="flex-start" ml={2} w={width * 0.4}>
                <Heading
                  color="#6C757D"
                  size="sm"
                  fontWeight={800}
                  isTruncated={true}>
                  {streamerName}
                </Heading>
                <Text color="#ADB5BD" fontSize="sm" fontWeight={300}>
                  1.5K Followers
                </Text>
              </VStack>
            </HStack>

            <HStack
              space={3}
              justifyContent="space-between"
              alignItems="center">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setIsFollowing(!isFollowing)}>
                <Box bg="#35C280" px={5} py={1.5} borderRadius={10}>
                  <Text color="#fff" fontSize="md" fontWeight={600}>
                    {isFollowing ? 'Following' : 'Follow'}
                  </Text>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => shareSheet(streamKey)}>
                <Center
                  bg="#212529"
                  p={1.5}
                  mr={3}
                  alignItems="center"
                  justifyContent="center"
                  borderRadius={10}>
                  <Icon name="ios-share-outline" size={25} color="#35C280" />
                </Center>
              </TouchableOpacity>
            </HStack>
          </HStack>

          <HStack ml={3}>
            <HStack alignItems="center">
              <Icon name="time-outline" size={20} color="#35C280" />
              <Text
                color="#ADB5BD"
                fontSize="xs"
                fontWeight={500}
                ml={0.5}
                pr={3}
                py={3}
                isTruncated={true}>
                38 minutes ago
              </Text>
            </HStack>
            <HStack alignItems="center">
              <Icon name="eye-outline" size={20} color="#35C280" />
              <Text
                color="#ADB5BD"
                fontSize="xs"
                fontWeight={500}
                ml={1}
                pr={3}
                py={3}
                isTruncated={true}>
                56,545 viewers
              </Text>
            </HStack>
          </HStack>

          <HStack px={3} justifyContent="space-between" alignItems="center">
            <Heading
              color="#ADB5BD"
              size="lg"
              fontWeight="bold"
              isTruncated={true}
              numberOfLines={2}
              width={width * 0.8}>
              {streamName}
            </Heading>

            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => {
                animation.current.play(0, 76);
                // animation.current.play();
              }}>
              <LottieView
                source={require('../assets/lottie/like2.json')}
                ref={animation}
                loop={false}
                // onAnimationFinish={() => {
                // 	animation.current.pause();
                // }}
                style={{
                  height: 60,
                  width: 60,
                }}
              />
            </TouchableOpacity>
          </HStack>
        </VStack>

        <Box h={'60%'}>
          <FlatList
            data={COMMENTS}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            extraData={changedData}
            renderItem={({item, index}) => (
              <MotiView
                from={{opacity: 0, translateY: 100}}
                animate={{opacity: 1, translateY: 0}}
                delay={index * 600}
                transition={{type: 'timing'}}>
                <Comments
                  name={item.name}
                  comment={item.comment}
                  width={width}
                />
              </MotiView>
            )}
            ListFooterComponent={<Box h={160} />}
          />
        </Box>

        <Box
          h={32}
          w={width}
          bg="#101010"
          position="absolute"
          bottom={5}
          left={0}>
          <HStack
            w={width}
            px={3}
            mt={3}
            position="absolute"
            top={0}
            left={0}
            justifyContent="center">
            <Input
              borderRadius={10}
              keyboardAppearance="dark"
              w="95%"
              h={12}
              px={3}
              placeholder="Add a comment..."
              borderColor="#212529"
              bg="#212529"
              InputRightElement={
                <Icon
                  name="send"
                  size={18}
                  color="#CED4DA"
                  style={{marginRight: 12}}
                  onPress={() => null}
                />
              }
            />
          </HStack>
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default PlayStream;
