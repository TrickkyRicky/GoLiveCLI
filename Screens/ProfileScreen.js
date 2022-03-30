import {Text, VStack, HStack, Box, Center} from 'native-base';
import {TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
import Video from '../components/Video';

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

                <Text color="#ADB5BD" fontSize="xl" fontWeight="bold">
                  Check out my Videos
                </Text>
              </VStack>
            </Box>
          </VStack>
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default ProfileScreen;
