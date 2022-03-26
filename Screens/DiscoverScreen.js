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
import {Data} from '../utility/data';
import Icon from 'react-native-vector-icons/AntDesign';
import {sPath, vPath} from '../utility/dev';
import {MotiView} from 'moti';

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
    <Box flex={1} bg="#101010">
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
              keyboardAppearance="dark"
              ml={5}
              placeholder="Search"
              bg="#212529"
              borderColor="#212529"
              color="#CED4DA"
              fontSize="md"
              borderRadius={10}
              w={'90%'}
              _focus={{borderColor: '#101010'}}
              onChangeText={e => setSearchValue(e)}
              value={searchValue}
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
                  <MotiView
                    from={{opacity: 0, translateY: 100}}
                    animate={{opacity: 1, translateY: 0}}
                    delay={index * 250}
                    transition={{type: 'spring'}}>
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
                  </MotiView>
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
