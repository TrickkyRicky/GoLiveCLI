import React, {useState, useEffect, useRef} from 'react';
import {
  TextInput,
  View,
  Platform,
  PermissionsAndroid,
  Animated,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import {VStack, Text, Heading} from 'native-base';
import {useSafeAreaInsets, SafeAreaView} from 'react-native-safe-area-context';
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
    image: require('../assets/warzone.jpg'),
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
    image: require('../assets/warzone.jpg'),
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

const Demo = ({navigation}) => {
  // useEffect(() => {
  //   //Starting Animation after 1ms
  //   setTimeout(() => {
  //     //Parallel Animation
  //     Animated.parallel([
  //       Animated.timing(startAnimation, {
  //         //for non safe area devices
  //         //uncomment to show logo header
  //         toValue: -Dimensions.get('window').height + (edges.top + 65),
  //         // toValue: -Dimensions.get('window').height,
  //         useNativeDriver: true,
  //       }),
  //       Animated.timing(scaleLogo, {
  //         toValue: 0.5,
  //         useNativeDriver: true,
  //       }),
  //       // Animated.timing(moveLogo, {
  //       //   toValue: {
  //       //     x: -Dimensions.get('window').width / 300,
  //       //     y: Dimensions.get('window').height / 2 - 38,
  //       //   },
  //       //   useNativeDriver: true,
  //       // }),
  //     ]).start();
  //   }, 0);
  // }, []);

  //Going to move up like nav bar
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#1F1F1F',
        padding: 10,
        paddingBottom: 30,
        zIndex: 1,
      }}>
      <SafeAreaView style={{paddingBottom: 50}}>
        <VStack>
          <Heading size="2xl" color="#fff">
            GoLive
          </Heading>
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

          <FlatList
            data={Data}
            keyExtractor={item => item.id}
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
        </VStack>
      </SafeAreaView>
    </View>
  );
};

export default Demo;
