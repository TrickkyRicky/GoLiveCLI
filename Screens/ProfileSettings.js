import {
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Center,
  Actionsheet,
  useDisclose,
  Input,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {launchImageLibrary} from 'react-native-image-picker';

const width = Dimensions.get('window').width;

const ProfileSettings = ({navigation}) => {
  const [fileUri, setFileUri] = useState(null);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const {isOpen, onOpen, onClose} = useDisclose();

  const selectAPhoto = () => {
    const options = {
      mediaType: 'photo',
      storageOptions: {
        skipBackup: true,
        waitUntilSaved: true,
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        onClose();
        setFileUri(response.assets[0].uri);
      }
    });
  };

  return (
    <Box bg="#212529" flex={1}>
      <SafeAreaView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <VStack justifyContent="center" p={4}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                activeOpacity={0.8}>
                <Text color="#fff" fontSize="xl">
                  Cancel
                </Text>
              </TouchableOpacity>

              <Heading
                letterSpacing={1.5}
                // alignSelf="center"
                mt={7}
                color="#CED4DA"
                size="2xl">
                Edit Profile
              </Heading>

              <Box py={5}>
                <VStack space={3} justifyContent="center" alignItems="center">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => onOpen()}>
                    {/* // onPress={() => selectAPhoto()}> */}
                    <HStack alignItems="center" space={3}>
                      {fileUri ? (
                        <Image
                          source={{
                            uri: fileUri,
                          }}
                          style={{
                            height: 150,
                            width: 150,
                            borderRadius: 100,
                            resizeMode: 'cover',
                          }}
                        />
                      ) : (
                        <Center
                          bg={'#495057'}
                          width={150}
                          height={150}
                          borderRadius={100}
                        />
                      )}

                      <Icon
                        name="ios-create-outline"
                        size={30}
                        color="#35C280"
                      />
                    </HStack>
                  </TouchableOpacity>

                  <Text color="#ADB5BD" fontSize="xl" fontWeight="bold">
                    llamalicker25
                  </Text>

                  <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                    Change Username
                  </Text>
                  <Input
                    isRequired
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    mb={1}
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
                    Change Email
                  </Text>
                  <Input
                    isRequired
                    keyboardAppearance="dark"
                    secureTextEntry={true}
                    mb={1}
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

                  <Actionsheet isOpen={isOpen} onClose={onClose}>
                    <Actionsheet.Content bg="#343A40">
                      <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text fontSize="md" fontWeight={700} color="#6C757D">
                          Upload a Photo
                        </Text>
                      </Box>
                      <Actionsheet.Item
                        onPress={() => selectAPhoto()}
                        startIcon={
                          <Icon
                            name="image-outline"
                            size={30}
                            color="#CED4DA"
                          />
                        }
                        _pressed={{background: '#212529'}}>
                        <Text color="#CED4DA" fontWeight={700} fontSize="md">
                          Choose from Camera Roll
                        </Text>
                      </Actionsheet.Item>
                      <Actionsheet.Item
                        onPress={() => onClose()}
                        startIcon={
                          <Icon name="close" size={30} color="#CED4DA" />
                        }
                        _pressed={{background: '#212529'}}>
                        <Text color="#CED4DA" fontWeight={700} fontSize="md">
                          Cancel
                        </Text>
                      </Actionsheet.Item>
                    </Actionsheet.Content>
                  </Actionsheet>
                </VStack>
              </Box>
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default ProfileSettings;
