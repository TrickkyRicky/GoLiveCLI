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
import {Box, VStack, Text, Center, Input, Spinner} from 'native-base';
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
            <Box py={5}>
              <VStack space={3} justifyContent="center" alignItems="center">
                <Text color="#ADB5BD" fontSize="3xl" fontWeight="bold">
                  Registration
                </Text>

                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Username
                </Text>
                <Input
                  keyboardAppearance="dark"
                  placeholder="Username"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={10}
                  onChangeText={text => setUsername(text)}
                  value={username}
                  InputLeftElement={
                    <Icon
                      name="person"
                      size={18}
                      color="#CED4DA"
                      style={{marginLeft: 10}}
                    />
                  }
                />

                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Email
                </Text>
                <Input
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  placeholder="Email Address"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={10}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  InputLeftElement={
                    <Icon
                      name="mail"
                      size={18}
                      color="#CED4DA"
                      style={{marginLeft: 10}}
                    />
                  }
                />

                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Password
                </Text>
                <Input
                  keyboardAppearance="dark"
                  secureTextEntry={showPasswordText}
                  placeholder="Password"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={10}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  InputLeftElement={
                    <Icon
                      name="mail"
                      size={18}
                      color="#CED4DA"
                      style={{marginLeft: 10}}
                    />
                  }
                  InputRightElement={
                    <Icon
                      name="eye"
                      size={18}
                      color="#CED4DA"
                      onPress={() => setShowPasswordText(!showPasswordText)}
                      style={{marginRight: 10}}
                    />
                  }
                />
                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Confirm Password
                </Text>
                <Input
                  keyboardAppearance="dark"
                  secureTextEntry={true}
                  placeholder="Confirm Password"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={10}
                  onChangeText={text => setConfirmPassword(text)}
                  value={confirmPassword}
                  InputLeftElement={
                    <Icon
                      name="mail"
                      size={18}
                      color="#CED4DA"
                      style={{marginLeft: 10}}
                    />
                  }
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
                    m={4}
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
