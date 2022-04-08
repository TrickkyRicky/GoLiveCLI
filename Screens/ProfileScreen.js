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
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileVideo from '../components/ProfileVideo';
import {Data} from '../utility/data';
import Carousel from 'react-native-snap-carousel';
import {MotiView} from 'moti';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const ProfileScreen = props => {
  const {navigation} = props;
  const {name, followers} = props.route.params;
  const [isFollowing, setIsFollowing] = useState(false);

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
                uri: 'https://images.ctfassets.net/mmeshd7gafk1/3zPFdwwYIwHLZjrxhTdtuD/8b15546c40d832ad8aeddc9670d1d3e8/_logo_Apple.png',
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
                fontWeight="bold">
                {name}
              </Text>
              <Text color="#6C757D" fontSize="md" fontWeight={300}>
                Enjoy the stream!
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
              <TouchableOpacity activeOpacity={0.9} onPress={() => null}>
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
