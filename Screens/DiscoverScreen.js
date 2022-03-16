import {FlatList, TouchableOpacity, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
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
];

const width = Dimensions.get('window').width;

const DiscoverScreen = ({navigation}) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = text => {
    setSearchValue(text);
  };

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

  return (
    <Box flex={1} bg="#1F1F1f">
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
              bg="#414141"
              borderColor="#414141"
              color="#CCC"
              fontSize="sm"
              borderRadius={10}
              w={'90%'}
              onChangeText={() => handleChange()}
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

          <FlatList
            data={Data}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            numColumns={1}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Play', {
                    playserver: playserver,
                    stream: stream,
                  })
                }>
                <DiscoverVideo
                  width={width}
                  streamName={item.streamName}
                  streamerName={item.streamerName}
                  views={item.views}
                  image={item.image}
                />
              </TouchableOpacity>
            )}
            ListFooterComponent={<View style={{height: 120}} />}
          />
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default DiscoverScreen;
