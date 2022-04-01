import {
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, Text, HStack, Heading, Input} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

const width = Dimensions.get('window').width;

const ResetPasswordScreen = ({navigation}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

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
              <Input
                isRequired
                keyboardAppearance="dark"
                secureTextEntry={true}
                mb={3}
                px={5}
                placeholder="Password"
                bg="#212529"
                borderColor="#212529"
                _focus={{borderColor: '#101010'}}
                color="#CED4DA"
                fontSize="md"
                fontWeight={600}
                borderRadius={10}
                w={'95%'}
                h={12}
                onChangeText={text => setPassword(text)}
                value={password}
              />
              <Input
                isRequired
                keyboardAppearance="dark"
                secureTextEntry={true}
                mb={3}
                px={5}
                placeholder="Confirm Password"
                bg="#212529"
                borderColor="#212529"
                _focus={{borderColor: '#101010'}}
                color="#CED4DA"
                fontSize="md"
                fontWeight={600}
                borderRadius={10}
                w={'95%'}
                h={12}
                onChangeText={text => setConfirmPassword(text)}
                value={confirmPassword}
              />
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.goBack()}>
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
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default ResetPasswordScreen;
