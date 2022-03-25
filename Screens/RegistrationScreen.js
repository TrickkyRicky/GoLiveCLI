import {
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {Box, VStack, Text, Center, Input, Heading, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const RegistrationScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(true);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: '#212529',
        justifyContent: 'flex-start',
      }}>
      <VStack justifyContent="center" p={4}>
        <Center
          w={50}
          h={1.5}
          my={2}
          borderRadius={20}
          bg="#ADB5BD"
          alignSelf="center"
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{height: '100%'}}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Box p={2}>
              <VStack justifyContent="center" alignItems="center">
                <Heading
                  mt={4}
                  mb={1}
                  color="#CED4DA"
                  size="2xl"
                  fontWeight={700}
                  alignSelf="flex-start">
                  Getting Started.
                </Heading>
                <Heading
                  mb={18}
                  color="#CED4DA"
                  size="lg"
                  fontWeight={400}
                  alignSelf="flex-start">
                  Get ready to Go Live
                </Heading>

                <Input
                  keyboardAppearance="dark"
                  placeholder="Username"
                  bg="#343A40"
                  color="#CED4DA"
                  fontSize="md"
                  borderColor="#495057"
                  borderWidth={2}
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={16}
                  px={5}
                  mb={3}
                  _focus={{borderColor: '#ADB5BD'}}
                  onChangeText={text => setUsername(text)}
                  value={username}
                />

                <Input
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  placeholder="Email Address"
                  bg="#343A40"
                  color="#CED4DA"
                  fontSize="md"
                  borderColor="#495057"
                  borderWidth={2}
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={16}
                  px={5}
                  mb={3}
                  _focus={{borderColor: '#ADB5BD'}}
                  onChangeText={text => setEmail(text)}
                  value={email}
                />

                <Input
                  keyboardAppearance="dark"
                  secureTextEntry={showPasswordText}
                  placeholder="Password"
                  bg="#343A40"
                  color="#CED4DA"
                  fontSize="md"
                  borderColor="#495057"
                  borderWidth={2}
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={16}
                  px={5}
                  mb={3}
                  _focus={{borderColor: '#ADB5BD'}}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  InputRightElement={
                    <Icon
                      name="eye"
                      size={18}
                      color="#495057"
                      onPress={() => setShowPasswordText(!showPasswordText)}
                      style={{marginRight: 15}}
                    />
                  }
                />

                <Input
                  keyboardAppearance="dark"
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  bg="#343A40"
                  color="#CED4DA"
                  fontSize="md"
                  borderColor="#495057"
                  borderWidth={2}
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={16}
                  px={5}
                  _focus={{borderColor: '#ADB5BD'}}
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      navigation.goBack();
                    }, 2000);
                  }}>
                  <Box
                    bg="#495057"
                    mt={4}
                    mb={1}
                    w={width * 0.9}
                    py={3}
                    borderRadius={10}
                    justifyContent="center"
                    alignItems="center">
                    {isLoading ? (
                      <Spinner color="emerald.500" />
                    ) : (
                      <Text color="#fff" fontSize="lg" fontWeight="bold">
                        Create Account
                      </Text>
                    )}
                  </Box>
                </TouchableOpacity>
                <Text
                  color="#CCC"
                  fontSize={10}
                  width={'100%'}
                  alignSelf="center">
                  By creating an account, you agree to the{' '}
                  <Text onPress={() => null} color="#35C280" fontSize={9}>
                    Terms of Service
                  </Text>{' '}
                  and{' '}
                  <Text onPress={() => null} color="#35C280" fontSize={9}>
                    Privacy Policy
                  </Text>
                  .
                </Text>
              </VStack>
              <Center h={100} />
            </Box>
          </TouchableWithoutFeedback>
        </ScrollView>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
