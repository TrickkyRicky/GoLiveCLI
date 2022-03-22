import {ScrollView, Dimensions, TouchableOpacity, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  HStack,
  VStack,
  Text,
  Center,
  Box,
  Switch,
  FormControl,
  Input,
  Heading,
  Spinner,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Arrow from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const width = Dimensions.get('window').width;

const Settings = ({navigation}) => {
  const [useFaceID, setUseFaceID] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [disableBiometric, setDisablebiometric] = useState(false);
  const [typeOfBiometric, setTypeOfBiometric] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        setTypeOfBiometric(biometryType);
      })
      .catch(error => {
        setDisablebiometric(true);
        setUseFaceID(false);
      });

    showAuthenticationDialog = () => {
      if (typeOfBiometric !== null && typeOfBiometric !== undefined) {
        FingerprintScanner.authenticate({
          description: getMessage(),
        })
          .then(() => {
            //you can write your logic here to what will happen on successful authentication
            console.log('successful signin');
          })
          .catch(error => {
            console.log('Authentication error is => ', error);
          });
      } else {
        console.log('biometric authentication is not available');
      }
    };
  }, []);

  const getMessage = () => {
    if (typeOfBiometric == 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  return (
    <VStack bg="#212529" flex={1}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          {isSignedIn ? (
            <>
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

                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => navigation.navigate('Profile')}>
                    <Box
                      bg="#35C280"
                      h={10}
                      w={width * 0.35}
                      borderRadius={10}
                      justifyContent="center">
                      <HStack justifyContent="center" alignItems="center">
                        <Text color="#fff" fontSize="md" mr={2}>
                          Edit Profile
                        </Text>
                        <Arrow name="right" size={17} color="#fff" />
                      </HStack>
                    </Box>
                  </TouchableOpacity>
                </VStack>
              </Box>

              <Text
                color="#ADB5BD"
                bg="#343A40"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                CONTENT
              </Text>

              <TouchableOpacity onPress={() => null}>
                <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
              <Text
                color="#ADB5BD"
                bg="#343A40"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                APP SETTINGS
              </Text>

              <TouchableOpacity onPress={() => null}>
                <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
                        Notifications
                      </Text>
                    </HStack>

                    <Arrow name="right" size={20} color="#CCC" />
                  </HStack>
                </Box>
              </TouchableOpacity>
              <Text
                color="#ADB5BD"
                bg="#343A40"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                SECURITY SETTINGS
              </Text>

              <TouchableOpacity onPress={() => null}>
                <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
              <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
                bg="#343A40"
                letterSpacing={1.5}
                fontSize="sm"
                py={2.5}
                px={3}>
                GENERAL
              </Text>

              <TouchableOpacity onPress={() => null}>
                <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
              <TouchableOpacity onPress={() => null}>
                <Box bg="#212529" h={50} justifyContent="center" px={3} py={1}>
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
                onPress={() => setIsSignedIn(false)}>
                <Box
                  bg="#495057"
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
            </>
          ) : (
            <>
              <VStack p={3}>
                <Heading mb={18} color="#CED4DA" size="3xl">
                  Sign In
                </Heading>
                <FormControl alignItems="center">
                  <Text color="#CED4DA" ml={2.5} mb={1} alignSelf="flex-start">
                    Username
                  </Text>
                  <Input
                    isRequired
                    keyboardAppearance="dark"
                    mb={3}
                    placeholder="Username"
                    bg="#343A40"
                    borderColor="#343A40"
                    color="#CED4DA"
                    fontSize="sm"
                    fontWeight={600}
                    borderRadius={10}
                    w={'95%'}
                    h={10}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    InputLeftElement={
                      <Icon2
                        name="person"
                        size={18}
                        color="#CED4DA"
                        style={{marginLeft: 10}}
                      />
                    }
                  />
                  <Text color="#CED4DA" ml={2.5} mb={1} alignSelf="flex-start">
                    Password
                  </Text>
                  <Input
                    isRequired
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    mb={3}
                    placeholder="Password"
                    bg="#343A40"
                    borderColor="#343A40"
                    color="#CED4DA"
                    fontSize="sm"
                    fontWeight={600}
                    borderRadius={10}
                    w={'95%'}
                    h={10}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    InputLeftElement={
                      <Icon2
                        name="lock-open"
                        size={18}
                        color="#CED4DA"
                        style={{marginLeft: 10}}
                      />
                    }
                  />
                </FormControl>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      setIsSignedIn(true);
                    }, 2000);
                  }}>
                  <Box
                    bg="#495057"
                    m={4}
                    py={3}
                    borderRadius={10}
                    justifyContent="center"
                    alignItems="center">
                    {isLoading ? (
                      <Spinner color="emerald.500" />
                    ) : (
                      <Text color="#fff" fontSize="lg" fontWeight="bold">
                        Sign In
                      </Text>
                    )}
                  </Box>
                </TouchableOpacity>
                <Text alignSelf="center" fontSize="sm" color="#ADB5BD">
                  Dont have an Account?{' '}
                  <Text fontSize="sm" color="green.400" onPress={() => null}>
                    Create one now{' '}
                  </Text>
                </Text>

                <HStack mt={10} px={2} justifyContent="space-between">
                  <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                    <Text fontSize="sm" color="green.400">
                      Forgot Username?
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                    <Text fontSize="sm" color="green.400">
                      Forgot Password?
                    </Text>
                  </TouchableOpacity>
                </HStack>

                {/* {useFaceID ? (
                  <TouchableOpacity onPress={() => showAuthenticationDialog()}>
                    <Center
                      mt={10}
                      p={4}
                      borderRadius={20}
                      bg="coolGray.700"
                      justifyContent="center"
                      alignItems="center">
                      <Text color="#fff" fontSize="xl">
                        Authenticate
                      </Text>
                    </Center>
                  </TouchableOpacity>
                ) : null} */}
              </VStack>
            </>
          )}
          <Box h={100} />
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Settings;
