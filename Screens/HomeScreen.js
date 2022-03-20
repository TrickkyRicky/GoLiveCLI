import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {VStack, Text, Heading, HStack, Center, Box} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
import Icon from 'react-native-vector-icons/AntDesign';
import Video from '../components/Video';
// remember to create this file for you dev env.
import {sPath, vPath} from '../utility/dev';

import {MotiView} from 'moti';

const Data = [
  {
    id: 1,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '416K',
    image: require('../assets/warzone2.jpg'),
  },
  {
    id: 2,
    streamName: 'Rebirth Resurgence Quads gdfvbngsgnvhfgdtradgn',
    streamerName: 'llamaLicker25',
    views: '652K',
    image: require('../assets/warzone3.jpg'),
  },
  {
    id: 3,
    streamName: 'Come Chill Out',
    streamerName: 'llamaLicker25',
    views: '295K',
    image: require('../assets/warzone4.jpg'),
  },
  {
    id: 4,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '6K',
    image: require('../assets/warzone.jpg'),
  },
];

const CATEGORIES = [
  {
    id: 1,
    category: 'Art',
  },
  {
    id: 2,
    category: 'Beauty',
  },
  {
    id: 3,
    category: 'Chatting',
  },
  {
    id: 4,
    category: 'Education',
  },
  {
    id: 5,
    category: 'Gaming',
  },
  {
    id: 6,
    category: 'Music',
  },
  {
    id: 7,
    category: 'Sports',
  },
  {
    id: 8,
    category: 'Vlogs',
  },
];

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  //Going to move up like nav bar
  return (
    <Box flex={1} bg="#212529" zIndex={1}>
      <SafeAreaView style={{paddingBottom: 50}}>
        <StatusBar
          animated={true}
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <MotiView
          from={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{type: 'timing'}}>
          <VStack>
            <Image
              source={Logo}
              alt="logo"
              style={{
                alignSelf: 'center',
                transform: [{scale: 0.8}],
              }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Heading color="#F5F4F4" size="2xl" px="3" mb={2}>
                Browse
              </Heading>

              <FlatList
                data={CATEGORIES}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.4}
                      style={{marginLeft: 10}}
                      onPress={() =>
                        navigation.navigate('Discover', {
                          width: width,
                        })
                      }>
                      <Box
                        w={width * 0.23}
                        h={7}
                        bg="#495057"
                        borderRadius={12}
                        mr={0.5}
                        justifyContent="center"
                        alignItems="center">
                        <Text color="#fff" fontSize="sm" fontWeight="bold">
                          {item.category}
                        </Text>
                      </Box>
                    </TouchableOpacity>
                  );
                }}
              />

              <HStack
                justifyContent={'space-between'}
                alignItems="flex-end"
                mt={4}
                mb={2}
                px={3}>
                <Heading size="md" color="#F5F4F4">
                  Trending Streams
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Discover', {
                      width: width,
                    })
                  }>
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({item}) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215,
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{marginLeft: 5}}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate('Play', {
                          playserver: playserver,
                          stream: stream,
                        })
                      }>
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <HStack
                justifyContent={'space-between'}
                alignItems="flex-end"
                mt={2}
                mb={2}
                px={3}>
                <Heading size="md" color="#F5F4F4">
                  Recorded Streams
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Discover', {
                      width: width,
                    })
                  }>
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({item}) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215,
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{marginLeft: 5}}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate('Play', {
                          playserver: playserver,
                          stream: stream,
                        })
                      }>
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <HStack
                justifyContent={'space-between'}
                alignItems="flex-end"
                mt={2}
                mb={2}
                px={3}>
                <Heading size="md" color="#F5F4F4">
                  Past Clips
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Discover', {
                      width: width,
                    })
                  }>
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                horizontal
                renderItem={({item}) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215,
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{marginLeft: 5}}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate('Play', {
                          playserver: playserver,
                          stream: stream,
                        })
                      }>
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <Center height={180} />
            </ScrollView>
          </VStack>
        </MotiView>
      </SafeAreaView>
    </Box>
  );
};

export default HomeScreen;
