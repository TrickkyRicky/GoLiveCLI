import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {VStack, Text, Heading, HStack, Center} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
import Video from '../components/Video';
// remember to create this file for you dev env.
import {sPath, vPath} from '../utility/dev';

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
    streamName: 'Rebirth Resurgence Quads ',
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

const width = Dimensions.get('window').width;

const HomeScreen = ({navigation}) => {
  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  //Going to move up like nav bar
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1F1F1F',
        zIndex: 1,
      }}>
      <SafeAreaView style={{paddingBottom: 50}}>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle={'light-content'}
          showHideTransition={'fade'}
          hidden={false}
        />
        <VStack>
          <Image
            source={Logo}
            alt="logo"
            style={{
              alignSelf: 'center',
              transform: [{scale: 0.8}],
            }}
          />
          {/* <Text style={{color: '#fff', fontSize: 18}}>
                Please enter a stream name
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#1B4332',
                  borderWidth: 2,
                  borderRadius: 10,
                  marginTop: 10,
                  marginBottom: 10,
                }}>
                <TextInput
                  style={{color: '#95D5B2', height: 40, padding: 10}}
                  placeholder="Write stream name here"
                  placeholderTextColor="#1B4332"
                  value={stream}
                  onChangeText={stream => setStream(stream)}
                />
              </View> */}
          {/* <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Play', {
                  playserver: playserver,
                  stream: stream,
                })
              }>
              <View
                style={{
                  backgroundColor: '#585858',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 16}}>Join Stream</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Push', {
                  pushserver: pushserver,
                  stream: stream,
                })
              }>
              <View
                style={{
                  backgroundColor: '#585858',
                  padding: 10,
                  borderRadius: 10,
                }}>
                <Text style={{color: '#fff', fontSize: 16}}>
                  Stream a Video
                </Text>
              </View>
            </TouchableOpacity>
          </View> */}
          <ScrollView showsVerticalScrollIndicator={false}>
            <HStack
              justifyContent={'space-between'}
              alignItems="flex-end"
              mt={3}
              px={3}>
              <Heading size="lg" color="#F5F4F4">
                Streams
              </Heading>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Discover', {
                    width: width,
                  })
                }>
                <Text color="#F5F4F4" fontSize="md">
                  See More
                </Text>
              </TouchableOpacity>
            </HStack>

            <FlatList
              data={Data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
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
                  />
                </TouchableOpacity>
              )}
            />
            <HStack
              justifyContent={'space-between'}
              alignItems="flex-end"
              mt={3}
              px={3}>
              <Heading size="lg" color="#F5F4F4">
                Videos
              </Heading>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Discover', {
                    width: width,
                  })
                }>
                <Text color="#F5F4F4" fontSize="md">
                  See More
                </Text>
              </TouchableOpacity>
            </HStack>

            <FlatList
              data={Data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
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
                  />
                </TouchableOpacity>
              )}
            />
            <HStack
              justifyContent={'space-between'}
              alignItems="flex-end"
              mt={3}
              px={3}>
              <Heading size="lg" color="#F5F4F4">
                Clips
              </Heading>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Discover', {
                    width: width,
                  })
                }>
                <Text color="#F5F4F4" fontSize="md">
                  See More
                </Text>
              </TouchableOpacity>
            </HStack>

            <FlatList
              data={Data}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              horizontal
              renderItem={({item}) => (
                <TouchableOpacity
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
                  />
                </TouchableOpacity>
              )}
            />
            <Center height={100} />
          </ScrollView>
        </VStack>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;
