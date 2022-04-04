import {Text, VStack, HStack, Box, Center, Divider} from 'native-base';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileVideo from '../components/ProfileVideo';
import {Data} from '../utility/data';
import Carousel from 'react-native-snap-carousel';

const ProfileScreen = props => {
  const {navigation} = props;
  const {width, name, followers} = props.route.params;

  return (
    <Box flex={1} bg="#101010">
      <SafeAreaView>
        <TouchableOpacity
          style={{position: 'absolute', top: 60, left: 23, zIndex: 2}}
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}>
          <BackIcon name="leftcircleo" size={30} color="#35C280" />
        </TouchableOpacity>
        <VStack justifyContent="center" p={4}>
          <VStack justifyContent="center" p={4}>
            <Box py={5}>
              <VStack space={3} justifyContent="center" alignItems="center">
                <Center
                  bg={'#495057'}
                  width={150}
                  height={150}
                  borderRadius={100}
                />

                <Text color="#ADB5BD" fontSize="3xl" fontWeight="bold">
                  {name}
                </Text>

                {/* <Text color="#ADB5BD" fontSize="xl" fontWeight="bold">
                  Check out my Videos
                </Text> */}
              </VStack>
              <HStack mt={5} justifyContent="center" alignItems="center">
                <VStack alignItems="center">
                  <Text color="#6C757D" fontSize="md" fontWeight="bold">
                    132
                  </Text>
                  <Text color="#ADB5BD" fontSize="md" fontWeight="bold">
                    Following
                  </Text>
                </VStack>
                <Divider mx={4} h="full" orientation="vertical" opacity={0.3} />
                <VStack alignItems="center">
                  <Text color="#6C757D" fontSize="md" fontWeight="bold">
                    324
                  </Text>
                  <Text color="#ADB5BD" fontSize="md" fontWeight="bold">
                    Followers
                  </Text>
                </VStack>
                <Divider mx={4} h="full" orientation="vertical" opacity={0.3} />
                <VStack alignItems="center">
                  <Text color="#6C757D" fontSize="md" fontWeight="bold">
                    13
                  </Text>
                  <Text color="#ADB5BD" fontSize="md" fontWeight="bold">
                    Videos
                  </Text>
                </VStack>
              </HStack>

              <Center mt={5}>
                <Carousel
                  data={Data}
                  layout="stack"
                  layoutCardOffset={50}
                  activeSlideAlignment="end"
                  activeSlideOffset={20}
                  loop={true}
                  sliderWidth={width}
                  itemWidth={width}
                  renderItem={({item, index}) => {
                    var randomColor = Math.floor(
                      Math.random() * 16777215,
                    ).toString(16);
                    return (
                      <ProfileVideo
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        isLive={true}
                        bgColor={randomColor}
                      />
                    );
                  }}
                />
              </Center>
            </Box>
          </VStack>
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default ProfileScreen;
