import {
  Text,
  Box,
  Image,
  HStack,
  VStack,
  Center,
  Actionsheet,
  useDisclose,
  Avatar,
} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CrossIcon from 'react-native-vector-icons/Ionicons';
import Dots from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import {shareSheet} from '../utility/share';

const Video = ({
  width,
  streamName,
  streamerName,
  views,
  image,
  isLive,
  bgColor,
}) => {
  const {isOpen, onOpen, onClose} = useDisclose();

  const streamKey = 'g4hs6f6tds5';
  let redWarningColor = '#b91c1c';

  return (
    <Box borderRadius={10} width={width * 0.7} m={2}>
      <Image
        source={image}
        alt="stream image"
        height={160}
        width={width}
        borderRadius={5}
        style={{resizeMode: 'cover'}}
      />

      <Box
        bg="#000"
        opacity={0.7}
        width="25%"
        h={6}
        borderRadius={5}
        position="absolute"
        bottom={16}
        left={3}>
        <HStack
          p={1}
          space={1}
          ml={1}
          alignItems="center"
          justifyContent="center">
          <Icon name="eye" size={14} color="#CCC" />
          <Text fontSize="xs" color="#CCC">
            {views}
          </Text>
        </HStack>
      </Box>

      {isLive ? (
        <Box
          width="25%"
          h={6}
          borderRadius={30}
          position="absolute"
          top={-7}
          left={-10}>
          <LottieView
            source={require('../assets/lottie/streaming.json')}
            autoPlay
            loop
            style={{
              width: '100%',
            }}
          />
        </Box>
      ) : null}

      <HStack py="2" justifyContent="space-between" alignItems="center">
        <HStack>
          {/* <Center
            bg={`#${bgColor}`}
            width={10}
            height={10}
            borderRadius={100}
          /> */}
          <Avatar
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AKedOLQaldPj-Tm-zaihNrmO0w30nGleIdemd2bQznyWbQ=s900-c-k-c0x00ffffff-no-rj',
            }}
            w={10}
            h={10}
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
            <Dots
              name="dots-vertical"
              size={25}
              color="#fff"
              onPress={() => onOpen()}
            />
          </HStack>
        </HStack>
      </HStack>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content bg="#212529">
          <Actionsheet.Item
            startIcon={<Icon name="ban" size={30} color={redWarningColor} />}
            _pressed={{background: '#1F1F1F'}}
            _text={{
              color: redWarningColor,
              fontWeight: 'bold',
            }}>{`Block ${streamerName}`}</Actionsheet.Item>
          <Actionsheet.Item
            startIcon={
              <Icon name="warning" size={27} color={redWarningColor} />
            }
            _pressed={{background: '#1F1F1F'}}
            _text={{
              color: redWarningColor,
              fontWeight: 'bold',
            }}>{`Report ${streamerName}`}</Actionsheet.Item>

          <Actionsheet.Item
            onPress={() => shareSheet(streamKey)}
            startIcon={<CrossIcon name="arrow-redo" size={30} color="#fff" />}
            _pressed={{background: '#1F1F1F'}}
            _text={{
              color: '#fff',
              fontWeight: 'bold',
            }}>
            Share
          </Actionsheet.Item>

          <Actionsheet.Item
            onPress={() => onClose()}
            startIcon={<CrossIcon name="close" size={30} color="#CED4DA" />}
            _pressed={{background: '#1F1F1F'}}>
            <Text color="#DEE2E6" fontWeight={800} fontSize="md">
              Cancel
            </Text>
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};

export default Video;
