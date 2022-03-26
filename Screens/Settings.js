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
  Modal,
  Button,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Arrow from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {MotiView, AnimatePresence} from 'moti';
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showPasswordText, setShowPasswordText] = useState(true);
  const bgColor = '#101010';

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
    <VStack bg="#101010" flex={1}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <AnimatePresence>
            {isSignedIn ? (
              <MotiView
                from={{translateX: 100}}
                animate={{translateX: 0}}
                exit={{translateX: -100}}>
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
                  bg="#212529"
                  letterSpacing={1.5}
                  fontSize="sm"
                  py={2.5}
                  px={3}>
                  CONTENT
                </Text>

                <TouchableOpacity onPress={() => null}>
                  <Box
                    bg={bgColor}
                    h={50}
                    justifyContent="center"
                    px={3}
                    py={1}>
                    <HStack
                      alignItems="center"
                      justifyContent={'space-between'}
                      width={'100%'}>
                      <HStack alignItems="center" space={4} ml={2}>
                        <Icon2
                          name="folder-outline"
                          size={25}
                          color="#35C280"
                        />
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
                  bg="#212529"
                  letterSpacing={1.5}
                  fontSize="sm"
                  py={2.5}
                  px={3}>
                  APP SETTINGS
                </Text>

                <TouchableOpacity onPress={() => null}>
                  <Box
                    bg={bgColor}
                    h={50}
                    justifyContent="center"
                    px={3}
                    py={1}>
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
                  bg="#212529"
                  letterSpacing={1.5}
                  fontSize="sm"
                  py={2.5}
                  px={3}>
                  SECURITY SETTINGS
                </Text>

                <TouchableOpacity onPress={() => setShowModal(true)}>
                  <Box
                    bg={bgColor}
                    h={50}
                    justifyContent="center"
                    px={3}
                    py={1}>
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

                <TouchableOpacity onPress={() => null}>
                  <Box
                    bg={bgColor}
                    h={50}
                    justifyContent="center"
                    px={3}
                    py={1}>
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
                  <Box
                    bg={bgColor}
                    h={50}
                    justifyContent="center"
                    px={3}
                    py={1}>
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

                <Modal
                  avoidKeyboard
                  bottom="20"
                  _backdrop={{bg: '#000'}}
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}>
                  <Modal.Content w={width * 0.9} bg="#212529">
                    <Modal.CloseButton />
                    <Modal.Header
                      borderBottomColor="#343A40"
                      _text={{color: '#ADB5BD'}}>
                      Password Reset
                    </Modal.Header>

                    <Modal.Body alignItems="center">
                      <Text
                        color="#6C757D"
                        ml={2.5}
                        fontSize="md"
                        fontWeight={500}
                        my={2}
                        alignSelf="flex-start">
                        Enter the new password
                      </Text>
                      <Input
                        isRequired
                        keyboardAppearance="dark"
                        secureTextEntry={showPasswordText}
                        mb={3}
                        placeholder="Password"
                        bg="#343A40"
                        borderColor="#343A40"
                        borderWidth={2}
                        color="#CED4DA"
                        fontSize="md"
                        fontWeight={600}
                        borderRadius={10}
                        w={'95%'}
                        h={12}
                        px={5}
                        mt={3}
                        onChangeText={text => setPassword(text)}
                        value={password}
                        _focus={{borderColor: '#495057'}}
                        InputRightElement={
                          <Icon2
                            name="eye"
                            size={18}
                            color="#6C757D"
                            onPress={() =>
                              setShowPasswordText(!showPasswordText)
                            }
                            style={{marginRight: 10}}
                          />
                        }
                      />
                      <Input
                        isRequired
                        keyboardAppearance="dark"
                        secureTextEntry={true}
                        // mb={1}
                        placeholder="Confirm Password"
                        bg="#343A40"
                        borderColor="#343A40"
                        borderWidth={2}
                        color="#CED4DA"
                        fontSize="md"
                        fontWeight={600}
                        borderRadius={10}
                        w={'95%'}
                        h={12}
                        px={5}
                        onChangeText={text => setConfirmPassword(text)}
                        value={confirmPassword}
                        _focus={{borderColor: '#495057'}}
                      />
                    </Modal.Body>

                    <Modal.Footer bg="#212529">
                      <Button.Group space={2}>
                        <Button
                          variant="ghost"
                          _text={{color: '#CED4DA', fontSize: 'md'}}
                          _pressed={{bg: '#343A40'}}
                          onPress={() => {
                            setShowModal(false);
                          }}>
                          Cancel
                        </Button>

                        <Button
                          bg="#343A40"
                          _text={{color: '#fff'}}
                          _pressed={{bg: '#212529', fontSize: 'md'}}
                          onPress={() => {
                            null;
                          }}>
                          Save
                        </Button>
                      </Button.Group>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              </MotiView>
            ) : (
              <MotiView
                from={{translateX: 100}}
                animate={{translateX: 0}}
                exit={{translateX: -100}}>
                <VStack p={4}>
                  <Heading
                    mt={4}
                    mb={2}
                    color="#ADB5BD"
                    size="2xl"
                    fontWeight={600}>
                    Let's sign you in.
                  </Heading>
                  <Heading mb={10} color="#ADB5BD" size="md" fontWeight={400}>
                    {`Welcome back.\nYou've been missed.`}
                  </Heading>
                  <VStack alignItems="center">
                    <Input
                      isRequired
                      keyboardAppearance="dark"
                      mb={3}
                      px={5}
                      placeholder="Username"
                      bg="#212529"
                      borderColor="#212529"
                      borderWidth={2}
                      color="#ADB5BD"
                      fontSize="md"
                      fontWeight={600}
                      borderRadius={10}
                      _focus={{borderColor: '#343A40'}}
                      w={'95%'}
                      h={12}
                      onChangeText={text => setUsername(text)}
                      value={username}
                    />

                    <Input
                      isRequired
                      keyboardAppearance="dark"
                      secureTextEntry={true}
                      mb={3}
                      px={5}
                      placeholder="Password"
                      bg="#212529"
                      borderColor="#212529"
                      borderWidth={2}
                      color="#CED4DA"
                      fontSize="md"
                      fontWeight={600}
                      borderRadius={10}
                      _focus={{borderColor: '#343A40'}}
                      w={'95%'}
                      h={12}
                      onChangeText={text => setPassword(text)}
                      value={password}
                      InputRightElement={
                        <Icon2
                          name="lock-open"
                          size={18}
                          color="#495057"
                          style={{marginRight: 12}}
                        />
                      }
                    />
                  </VStack>

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
                      bg="#343A40"
                      m={4}
                      py={3}
                      borderRadius={10}
                      justifyContent="center"
                      alignItems="center">
                      {isLoading ? (
                        <Spinner color="emerald.500" />
                      ) : (
                        <Text color="#DEE2E6" fontSize="lg" fontWeight="bold">
                          Sign In
                        </Text>
                      )}
                    </Box>
                  </TouchableOpacity>
                  <Text
                    alignSelf="center"
                    mt={2.5}
                    fontSize="sm"
                    color="#ADB5BD">
                    Dont have an Account?{' '}
                    <Text
                      fontSize="sm"
                      color="green.400"
                      onPress={() => navigation.navigate('Register')}>
                      Register now{' '}
                    </Text>
                  </Text>

                  <HStack mt={10} px={2} justifyContent="space-between">
                    <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                      <Text fontSize="sm" color="#6C757D">
                        Forgot Username?
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} onPress={() => null}>
                      <Text fontSize="sm" color="#6C757D">
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
              </MotiView>
            )}{' '}
          </AnimatePresence>
          <Box h={100} />
        </ScrollView>
      </SafeAreaView>
    </VStack>
  );
};

export default Settings;
