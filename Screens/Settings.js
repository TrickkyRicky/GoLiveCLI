import {ScrollView, Dimensions, TouchableOpacity, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  HStack,
  VStack,
  Text,
  Center,
  Box,
  Switch,
  Input,
  Heading,
  Spinner,
  Modal,
  Button,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Arrow from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {MotiView, AnimatePresence} from 'moti';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {postLogin} from '../store/auth/auth-actions';
import {useDispatch} from 'react-redux';
import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

const width = Dimensions.get('window').width;

const Settings = ({navigation, route}) => {
  const [useFaceID, setUseFaceID] = useState(false);
  const [useNotifications, setUseNotifications] = useState(true);
  const bgColor = '#101010';
  const {disableBiometric} = route.params;

  return (
    <VStack bg="#101010" flex={1}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <AnimatePresence>
            <MotiView
              from={{translateX: 100}}
              animate={{translateX: 0}}
              exit={{translateX: -100}}
              transition={{type: 'timing'}}>
              <Box py={5}>
                <VStack space={3} justifyContent="center" alignItems="center">
                  <Center
                    bg={'#495057'}
                    width={100}
                    height={100}
                    borderRadius={100}
                  />
                  <Text color="#ADB5BD" fontSize="xl" fontWeight="bold">
                    llamalicker25
                  </Text>

                  <HStack space={3} justifyContent="space-between">
                    <VStack
                      px={3}
                      py={4}
                      h={24}
                      w={width * 0.45}
                      bg="#212529"
                      borderRadius={20}
                      justifyContent="space-between">
                      <Text fontSize="lg" color="#6C757D" fontWeight={700}>
                        Videos
                      </Text>
                      <Text fontSize="2xl" color="#ADB5BD">
                        13
                      </Text>
                    </VStack>
                    <VStack
                      px={3}
                      py={4}
                      h={24}
                      w={width * 0.45}
                      bg="#212529"
                      borderRadius={20}
                      justifyContent="space-between">
                      <Text fontSize="lg" color="#6C757D" fontWeight={700}>
                        Views
                      </Text>
                      <Text fontSize="2xl" color="#ADB5BD">
                        456,565
                      </Text>
                    </VStack>
                  </HStack>
                  <VStack
                    px={3}
                    py={4}
                    h={32}
                    w={width * 0.93}
                    bg="#212529"
                    borderRadius={20}
                    justifyContent="space-between">
                    <Text fontSize="xl" color="#6C757D" fontWeight={700}>
                      Followers
                    </Text>
                    <Text fontSize="3xl" color="#ADB5BD">
                      32,565
                    </Text>
                  </VStack>
                </VStack>
              </Box>

              <Text
                color="#ADB5BD"
                bg="#212529"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                USER SETTINGS
              </Text>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Profile')}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2 name="person-outline" size={25} color="#35C280" />
                      <Text fontSize="lg" color="#F4F4F4">
                        Edit Profile
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('MyVideos')}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2 name="folder-outline" size={25} color="#35C280" />
                      <Text fontSize="lg" color="#F4F4F4">
                        My Videos
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2
                        name="cellular-outline"
                        size={25}
                        color="#35C280"
                      />
                      <Text fontSize="lg" color="#F4F4F4">
                        Subscriptions
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <Text
                color="#ADB5BD"
                bg="#212529"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                APP SETTINGS
              </Text>
              <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                <HStack
                  alignItems="center"
                  justifyContent={'space-between'}
                  width={'100%'}>
                  <HStack alignItems="center" space={4} ml={2}>
                    <Icon2
                      name="mail-unread-outline"
                      size={25}
                      color="#35C280"
                    />
                    <Text fontSize="lg" color="#F4F4F4">
                      Allow Notifications
                    </Text>
                  </HStack>

                  <Switch
                    value={useNotifications}
                    onToggle={() => setUseNotifications(!useNotifications)}
                    size="md"
                    onTrackColor="#35C280"
                  />
                </HStack>
              </Box>
              <Text
                color="#ADB5BD"
                bg="#212529"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                SECURITY SETTINGS
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('ResetPassword')}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2
                        name="lock-open-outline"
                        size={25}
                        color="#35C280"
                      />
                      <Text fontSize="lg" color="#F4F4F4">
                        Password Reset
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                <HStack
                  alignItems="center"
                  justifyContent={'space-between'}
                  width={'100%'}>
                  <HStack alignItems="center" space={4} ml={2}>
                    <Icon2
                      name="finger-print-outline"
                      size={25}
                      color="#35C280"
                    />
                    <Text fontSize="lg" color="#F4F4F4">
                      Biometric Unlock
                    </Text>
                  </HStack>

                  <Switch
                    value={useFaceID}
                    onToggle={() => setUseFaceID(!useFaceID)}
                    isDisabled={disableBiometric == true ? true : false}
                    size="md"
                    onTrackColor="#35C280"
                  />
                </HStack>
              </Box>

              <Text
                color="#ADB5BD"
                bg="#212529"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                GENERAL
              </Text>

              <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2
                        name="information-circle-outline"
                        size={25}
                        color="#35C280"
                      />
                      <Text fontSize="lg" color="#F4F4F4">
                        Help and Feedback
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ContactUs')}>
                <Box bg={bgColor} h={50} justifyContent="center" px={3} py={1}>
                  <HStack
                    alignItems="center"
                    justifyContent={'space-between'}
                    width={'100%'}>
                    <HStack alignItems="center" space={4} ml={2}>
                      <Icon2
                        name="people-circle-outline"
                        size={25}
                        color="#35C280"
                      />
                      <Text fontSize="lg" color="#F4F4F4">
                        Contact US
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.goBack()}>
                <Box
                  bg="#343A40"
                  m={4}
                  py={3}
                  borderRadius={10}
                  justifyContent="center"
                  alignItems="center">
                  <Text color="#fff" fontSize="lg" fontWeight="bold">
                    Sign Out
                  </Text>
                </Box>
              </TouchableOpacity>
            </MotiView>
          </AnimatePresence>
          <Box h={100} />
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Settings;
