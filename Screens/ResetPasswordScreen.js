import {
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  Alert,
  IconButton,
  Collapse,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {Hoshi} from 'react-native-textinput-effects';

const width = Dimensions.get('window').width;

const ResetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Box flex={1} bg="#101010">
      <SafeAreaView style={{padding: 10}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <VStack alignItems="center">
              <HStack
                mb={10}
                width={width * 0.9}
                justifyContent={'space-between'}
                alignItems="center">
                <Icon
                  name="leftcircleo"
                  size={30}
                  color="#35C280"
                  onPress={() => navigation.goBack()}
                />
              </HStack>

              <Box w="100%" h={60} ml={3.5} mb={5} justifyContent="center">
                <Heading size="2xl" fontWeight={600} color="#ADB5BD">
                  Change Password
                </Heading>
              </Box>

              <VStack alignItems="center" w="95%" space={3}>
                <Hoshi
                  label={'Password'}
                  // this is used as active border color
                  borderColor={'#35C280'}
                  // active border height
                  borderHeight={3}
                  inputPadding={16}
                  // this is used to set backgroundColor of label mask.
                  // please pass the backgroundColor of your TextInput container.
                  backgroundColor={'transparent'}
                  style={{width: '100%'}}
                  secureTextEntry={true}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  keyboardAppearance="dark"
                />
                <Hoshi
                  label={'Confirm Password'}
                  // this is used as active border color
                  borderColor={'#35C280'}
                  // active border height
                  borderHeight={3}
                  inputPadding={16}
                  // this is used to set backgroundColor of label mask.
                  // please pass the backgroundColor of your TextInput container.
                  backgroundColor={'#101010'}
                  style={{width: '100%'}}
                  secureTextEntry={true}
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                  keyboardAppearance="dark"
                />
              </VStack>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  Keyboard.dismiss();
                  if (password != confirmPassword) {
                    setShowAlert(true);
                  } else {
                    navigation.goBack();
                  }
                }}>
                <Box
                  w={width * 0.9}
                  bg="#35C280"
                  borderRadius={10}
                  mt={5}
                  p={3}>
                  <Text
                    fontSize="md"
                    fontWeight={'medium'}
                    color="#fff"
                    alignSelf="center">
                    Save Changes
                  </Text>
                </Box>
              </TouchableOpacity>
              <Collapse w={width * 0.8} mt={7} isOpen={showAlert}>
                <Alert status="error" colorScheme="error">
                  <VStack space={2} flexShrink={1} w="100%">
                    <HStack
                      flexShrink={1}
                      space={2}
                      alignItems="center"
                      justifyContent="space-between">
                      <HStack flexShrink={1} space={2} alignItems="center">
                        <Alert.Icon />
                        <Text
                          fontSize="md"
                          fontWeight="medium"
                          color="coolGray.800">
                          Please try again!
                        </Text>
                      </HStack>
                      <IconButton
                        variant="unstyled"
                        _focus={{
                          borderWidth: 0,
                        }}
                        icon={
                          <Icon name="close" size={20} color="coolGray.600" />
                        }
                        onPress={() => setShowAlert(false)}
                      />
                    </HStack>
                    <Box
                      pl="6"
                      _text={{
                        color: 'coolGray.600',
                      }}>
                      Passwords did not match.
                    </Box>
                  </VStack>
                </Alert>
              </Collapse>
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default ResetPasswordScreen;
