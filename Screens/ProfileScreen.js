import {
  Text,
  VStack,
  HStack,
  Box,
  Center,
  Divider,
  Heading,
  Avatar,
} from 'native-base';
import {TouchableOpacity, Dimensions, Image, FlatList} from 'react-native';
import React, {useState} from 'react';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileVideo from '../components/ProfileVideo';
import {Data} from '../utility/data';
import {sPath, vPath} from '../utility/dev';
import {MotiView} from 'moti';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileScreen = props => {
  const {navigation} = props;
  const {name, followers} = props.route.params;
  const [isFollowing, setIsFollowing] = useState(false);

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  return (
    <Box flex={1}>
      <TouchableOpacity
        style={{position: 'absolute', top: 60, left: 23, zIndex: 2}}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <BackIcon name="leftcircleo" size={30} color="#35C280" />
      </TouchableOpacity>
      <Box h={height * 0.25} w={width} bg="#35C280">
        <Image
          source={require('../assets/bg.jpeg')}
          style={{height: '100%', width: '100%'}}
          blurRadius={5}
        />
      </Box>

      <Box
        position="absolute"
        bottom={0}
        left={0}
        h={height * 0.8}
        w={width}
        bg="#101010"
        zIndex={2}
        borderRadius={30}>
        <HStack>
          {true ? (
            <Avatar
              source={{
                uri: 'https://yt3.ggpht.com/ytc/AKedOLQaldPj-Tm-zaihNrmO0w30nGleIdemd2bQznyWbQ=s900-c-k-c0x00ffffff-no-rj',
              }}
              bg={'#495057'}
              width={90}
              height={90}
              borderRadius={100}
              top={-20}
              ml={15}
              borderWidth={4}
              borderColor="#101010"
            />
          ) : (
            <Center
              bg={'#495057'}
              width={90}
              height={90}
              borderRadius={100}
              top={-20}
              ml={15}
              borderWidth={4}
              borderColor="#101010"
            />
          )}

          <HStack mt={3} w={width * 0.7} justifyContent="space-between">
            <VStack ml={2}>
              <Text
                alignSelf="center"
                color="#DEE2E6"
                fontSize="xl"
                isTruncated={true}
                w={width * 0.42}
                fontWeight="bold">
                {name}
              </Text>
              <Text
                color="#6C757D"
                fontSize="md"
                numberOfLines={2}
                w={width * 0.42}
                isTruncated={true}
                fontWeight={300}>
                Hit That Follow Button!
              </Text>
            </VStack>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => setIsFollowing(!isFollowing)}>
              <Box bg="#35C280" mt={2} px={3} py={1.5} borderRadius={10}>
                <Text color="#fff" fontSize="md" fontWeight={600}>
                  {isFollowing ? 'Following' : 'Follow'}
                </Text>
              </Box>
            </TouchableOpacity>
          </HStack>
        </HStack>

        <HStack mt={3} mb={4} justifyContent="center" alignItems="center">
          <VStack alignItems="center">
            <Text color="#495057" fontSize="lg" fontWeight={500}>
              Following
            </Text>
            <Heading color="#ADB5BD" size="lg" fontWeight={800}>
              132
            </Heading>
          </VStack>
          <Divider mx={6} h="full" orientation="vertical" opacity={0.3} />
          <VStack alignItems="center">
            <Text color="#495057" fontSize="lg" fontWeight={500}>
              Followers
            </Text>
            <Heading color="#ADB5BD" size="lg" fontWeight={800}>
              324
            </Heading>
          </VStack>
          <Divider mx={6} h="full" orientation="vertical" opacity={0.3} />
          <VStack alignItems="center">
            <Text color="#495057" fontSize="lg" fontWeight={500}>
              Videos
            </Text>
            <Heading color="#ADB5BD" size="lg" fontWeight={800}>
              1350
            </Heading>
          </VStack>
        </HStack>

        <FlatList
          data={Data}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          numColumns={1}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Play', {
                    playserver: playserver,
                    stream: stream,
                    streamName: item.streamName,
                    streamerName: item.streamerName,
                    bgColor: '2B6FFF',
                    width: width,
                  })
                }>
                <MotiView
                  from={{opacity: 0, translateY: 100}}
                  animate={{opacity: 1, translateY: 0}}
                  delay={index * 250}
                  transition={{type: 'spring'}}>
                  <ProfileVideo
                    width={width}
                    streamName={item.streamName}
                    streamerName={item.streamerName}
                    views={item.views}
                    image={item.image}
                  />
                </MotiView>
              </TouchableOpacity>
            );
          }}
          ListFooterComponent={<Box h={130} />}
        />
      </Box>
    </Box>
  );
};

export default ProfileScreen;
