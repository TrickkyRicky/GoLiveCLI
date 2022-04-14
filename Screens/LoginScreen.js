import {ScrollView, TouchableOpacity, Image, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  HStack,
  VStack,
  Text,
  Center,
  Box,
  Input,
  Heading,
  Spinner,
} from 'native-base';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {MotiView, AnimatePresence} from 'moti';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import {postLogin} from '../store/auth/auth-actions';
import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';
import {useDispatch} from 'react-redux';

const MMKV = new MMKVStorage.Loader().initialize();
const width = Dimensions.get('window').width;

const LoginScreen = ({navigation}) => {
  const [useFaceID, setUseFaceID] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [disableBiometric, setDisablebiometric] = useState(false);
  const [typeOfBiometric, setTypeOfBiometric] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showlogin, setShowLogin] = useState(false);
  const bgColor = '#101010';

  const dispatch = useDispatch();

  useEffect(() => {
    FingerprintScanner.isSensorAvailable()
      .then(biometryType => {
        setTypeOfBiometric(biometryType);
      })
      .catch(error => {
        setDisablebiometric(true);
        setUseFaceID(false);
      });

    const auth = JSON.parse(MMKV.getString('auth'));
    console.log(auth);
  }, []);

  const getMessage = () => {
    if (typeOfBiometric == 'Face ID') {
      return 'Scan your Face on the device to continue';
    } else {
      return 'Scan your Fingerprint on the device scanner to continue';
    }
  };

  const showAuthenticationDialog = () => {
    if (typeOfBiometric !== null && typeOfBiometric !== undefined) {
      FingerprintScanner.authenticate({
        description: getMessage(),
      })
        .then(() => {
          //you can write your logic here to what will happen on successful authentication
          console.log('successful signin');
          navigation.navigate('SettingsScreen', {disableBiometric});
        })
        .catch(error => {
          console.log('Authentication error is => ', error);
        });
    } else {
      console.log('biometric authentication is not available');
    }
  };

  const clickSubmit = () => {
    setIsLoading(true);
    navigation.navigate('SettingsScreen', {disableBiometric});
    setIsLoading(false);

    // dispatch(postLogin(username, password)).then(res => {
    //   setIsLoading(false);
    //   setIsSignedIn(true);
    // });
  };

  return (
    <VStack bg="#101010" flex={1}>
      <SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <MotiView
            from={{translateX: 100}}
            animate={{translateX: 0}}
            exit={{translateX: -100}}>
            <VStack h="full" p={4}>
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
              <HStack
                mt={3}
                space={2}
                justifyContent="center"
                alignItems="center">
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => showAuthenticationDialog()}>
                  <Box
                    bg="#35C280"
                    w={width * 0.45}
                    borderRadius={10}
                    py={3}
                    px={5}
                    alignItems="center">
                    <HStack
                      justifyContent="center"
                      alignItems="center"
                      space={2}>
                      <Image
                        source={require('../assets/faceid.png')}
                        style={{width: 25, height: 25, resizeMode: 'cover'}}
                      />
                      <Text color="#000" fontSize="lg" fontWeight={700}>
                        Face ID
                      </Text>
                    </HStack>
                  </Box>
                </TouchableOpacity>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    clickSubmit();
                  }}>
                  <Box
                    bg="#343A40"
                    // mx={3}
                    w={width * 0.45}
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
              </HStack>
              <HStack mt={4} px={2} justifyContent="space-between">
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
            </VStack>
          </MotiView>
        </ScrollView>
        <Center position="absolute" bottom={120} left={0} right={0}>
          <Text alignSelf="center" fontSize="sm" color="#ADB5BD">
            Dont have an Account?{' '}
            <Text
              fontSize="sm"
              color="green.400"
              onPress={() => navigation.navigate('Register')}>
              Register now{' '}
            </Text>
          </Text>
        </Center>
      </SafeAreaView>
    </VStack>
  );
};

export default LoginScreen;
