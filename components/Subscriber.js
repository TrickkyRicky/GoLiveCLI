import React, {useState} from 'react';
import {Box, Text, HStack, Avatar} from 'native-base';
import {TouchableOpacity, useWindowDimensions} from 'react-native';

const Subscriber = ({navigation, name}) => {
  const {height, width} = useWindowDimensions();
  const [isFollowing, setIsFollowing] = useState(true);
  return (
    <Box p={3}>
      <HStack justifyContent="space-between" alignItems="center">
        <HStack space={3} alignItems="center">
          <Avatar
            source={{
              uri: 'https://yt3.ggpht.com/ytc/AKedOLQaldPj-Tm-zaihNrmO0w30nGleIdemd2bQznyWbQ=s900-c-k-c0x00ffffff-no-rj',
            }}
            w={12}
            h={12}
            borderRadius={100}
          />
          <Text
            fontSize="md"
            w={width * 0.5}
            isTruncated
            fontWeight={600}
            color="#ADB5BD">
            {name}
          </Text>
        </HStack>

        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => setIsFollowing(!isFollowing)}>
          <Box
            bg={isFollowing ? '#35C280' : '#212529'}
            py={2}
            px={3}
            w={width * 0.25}
            borderRadius={10}
            justifyContent="center"
            alignItems="center">
            <Text fontSize="xs" fontWeight={600} color="#F8F9FA">
              {isFollowing ? 'Follow Back' : 'Friends'}
            </Text>
          </Box>
        </TouchableOpacity>
      </HStack>
    </Box>
  );
};

export default Subscriber;
