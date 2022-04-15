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
import {useDispatch} from 'react-redux';
import {Box, VStack, Text, Center, Heading, Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {Hoshi} from 'react-native-textinput-effects';
import {postRegister} from '../store/auth/auth-actions';

const width = Dimensions.get('window').width;

const RegistrationScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswordText, setShowPasswordText] = useState(true);

  const dispatch = useDispatch();

  const clickSubmit = () => {
    setIsLoading(true);

    dispatch(postRegister(username, email, password))
      .then(res => {
        setIsLoading(false);
        navigation.goBack();
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{
        flex: 1,
        backgroundColor: '#101010',
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
              <VStack space={2} justifyContent="center" alignItems="center">
                <Heading
                  mt={4}
                  mb={1}
                  color="#ADB5BD"
                  size="xl"
                  fontWeight={700}
                  alignSelf="flex-start">
                  Getting Started.
                </Heading>
                <Heading
                  mb={18}
                  color="#ADB5BD"
                  size="md"
                  fontWeight={400}
                  alignSelf="flex-start">
                  Stream. Upload. Enjoy.
                </Heading>

                <Hoshi
                  label={'Username'}
                  // this is used as active border color
                  borderColor={'#35C280'}
                  // active border height
                  borderHeight={3}
                  inputPadding={16}
                  // this is used to set backgroundColor of label mask.
                  // please pass the backgroundColor of your TextInput container.
                  backgroundColor={'#101010'}
                  style={{width: '100%'}}
                  onChangeText={text => setUsername(text)}
                  value={username}
                  keyboardAppearance="dark"
                />

                <Hoshi
                  label={'Email Address'}
                  // this is used as active border color
                  borderColor={'#35C280'}
                  // active border height
                  borderHeight={3}
                  inputPadding={16}
                  // this is used to set backgroundColor of label mask.
                  // please pass the backgroundColor of your TextInput container.
                  backgroundColor={'#101010'}
                  style={{width: '100%'}}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  keyboardAppearance="dark"
                />

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
                  backgroundColor={'transparent'}
                  style={{width: '100%'}}
                  secureTextEntry={true}
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                  keyboardAppearance="dark"
                />

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => {
                    Keyboard.dismiss();
                    if (password != confirmPassword) {
                      setShowAlert(true);
                    } else {
                      clickSubmit();
                    }
                  }}>
                  <Box
                    bg="#343A40"
                    mt={5}
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
                  mt={2}
                  color="#6C757D"
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
