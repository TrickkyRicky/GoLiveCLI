import {FlatList, TouchableOpacity, Dimensions, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, Text, Heading, HStack} from 'native-base';
import DiscoverVideo from '../components/DiscoverVideo';
import Video from '../components/Video';
import Icon from 'react-native-vector-icons/AntDesign';

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
  return (
    <Box flex={1} bg="#1F1F1f">
      <SafeAreaView style={{padding: 10}}>
        <VStack>
          <HStack justifyContent={'space-between'} alignItems="center">
            <Icon
              name="left"
              size={25}
              color="#CCC"
              onPress={() => navigation.goBack()}
            />
            <Heading color="#35C280" size="2xl">
              Discover
            </Heading>
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
