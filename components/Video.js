import {
  Text,
  Box,
  Image,
  HStack,
  VStack,
  Center,
  Actionsheet,
  Button,
  useDisclose,
} from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Dots from 'react-native-vector-icons/MaterialCommunityIcons';

const Video = ({width, streamName, streamerName, views, image, bgColor}) => {
  const {isOpen, onOpen, onClose} = useDisclose();

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
        borderRadius={30}
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

      <HStack py="2" justifyContent="space-between" alignItems="center">
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
        <Actionsheet.Content bg="#343A40">
          <Actionsheet.Item
            startIcon={<Icon name="ban" size={30} color="#ef4444" />}
            _pressed={{background: '#212529'}}
            _text={{
              color: 'red.500',
              fontWeight: 'bold',
            }}>{`Block ${streamerName}`}</Actionsheet.Item>
          <Actionsheet.Item
            startIcon={<Icon name="warning" size={27} color="#ef4444" />}
            _pressed={{background: '#212529'}}
            _text={{
              color: 'red.500',
              fontWeight: 'bold',
            }}>{`Report ${streamerName}`}</Actionsheet.Item>

          <Actionsheet.Item
            onPress={() => onClose()}
            justifyContent="center"
            _pressed={{background: '#212529'}}>
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
