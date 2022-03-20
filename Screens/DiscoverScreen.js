import {
  FlatList,
  TouchableOpacity,
  Dimensions,
  View,
  Animated,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, Text, Heading, HStack, Input} from 'native-base';
import DiscoverVideo from '../components/DiscoverVideo';
import Video from '../components/Video';
import Icon from 'react-native-vector-icons/AntDesign';
import {sPath, vPath} from '../utility/dev';

const Data = [
  {
    id: 1,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '416K',
    image: require('../assets/warzone3.jpg'),
  },
  {
    id: 2,
    streamName: 'Rebirth Resurgence Quads ',
    streamerName: 'llamaLicker25',
    views: '652K',
    image: require('../assets/warzone.jpg'),
  },
  {
    id: 3,
    streamName: 'Come Chill Out',
    streamerName: 'llamaLicker25',
    views: '295K',
    image: require('../assets/warzone2.jpg'),
  },
  {
    id: 4,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '6K',
    image: require('../assets/warzone4.jpg'),
  },
  {
    id: 5,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '416K',
    image: require('../assets/warzone.jpg'),
  },
  {
    id: 6,
    streamName: 'Rebirth Resurgence Quads ',
    streamerName: 'llamaLicker25',
    views: '652K',
    image: require('../assets/warzone2.jpg'),
  },
  {
    id: 7,
    streamName: 'Come Chill Out',
    streamerName: 'llamaLicker25',
    views: '295K',
    image: require('../assets/warzone3.jpg'),
  },
  {
    id: 8,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '6K',
    image: require('../assets/warzone4.jpg'),
  },
  {
    id: 9,
    streamName: 'Come Chill Out',
    streamerName: 'llamaLicker25',
    views: '295K',
    image: require('../assets/warzone.jpg'),
  },
  {
    id: 10,
    streamName: 'Warzone Live',
    streamerName: 'llamaLicker25',
    views: '6K',
    image: require('../assets/warzone2.jpg'),
  },
];

const width = Dimensions.get('window').width;
const ITEM_SIZE = 250;
//130

const DiscoverScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');

  const scrollY = useRef(new Animated.Value(0)).current;

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  return (
    <Box flex={1} bg="#212529">
      <SafeAreaView style={{padding: 10}}>
        <VStack>
          <HStack
            mb={2}
            width={width * 0.9}
            justifyContent={'space-between'}
            alignItems="center">
            <Icon
              name="leftcircle"
              size={30}
              color="#35C280"
              onPress={() => navigation.goBack()}
            />

            <Input
              ml={5}
              placeholder="Search"
              bg="#495057"
              borderColor="#495057"
              color="#CCC"
              fontSize="sm"
              borderRadius={10}
              w={'90%'}
              onChangeText={e => setSearchValue(e)}
              value={searchValue}
              // maxWidth="300px"
              InputLeftElement={
                <Icon
                  name="search1"
                  size={15}
                  color="#CCC"
                  style={{marginLeft: 15}}
                />
              }
            />
          </HStack>

          <Animated.FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            onScroll={Animated.event(
              [{nativeEvent: {contentOffset: {y: scrollY}}}],
              {useNativeDriver: true},
            )}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({item, index}) => {
              const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2),
              ];

              const opacityInputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 0.8), //change this for opacity
              ];

              const scale = scrollY.interpolate({
                inputRange,
                outputRange: [1, 1, 1, 0.5], //change this for scale
              });

              const opacity = scrollY.interpolate({
                inputRange: opacityInputRange,
                outputRange: [1, 1, 1, 0],
              });

              return (
                <TouchableOpacity
                  activeOpacity={0.9}
                  onPress={() =>
                    navigation.navigate('Play', {
                      playserver: playserver,
                      stream: stream,
                    })
                  }>
                  <Animated.View
                    style={{
                      opacity,
                      transform: [{scale}],
                    }}>
                    <DiscoverVideo
                      width={width}
                      streamName={item.streamName}
                      streamerName={item.streamerName}
                      views={item.views}
                      image={item.image}
                    />
                  </Animated.View>
                </TouchableOpacity>
              );
            }}
            ListFooterComponent={<View style={{height: 120}} />}
          />
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default DiscoverScreen;
