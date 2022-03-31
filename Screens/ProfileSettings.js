import {
  TouchableOpacity,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Center,
  Actionsheet,
  useDisclose,
  Input,
  Spinner,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const width = Dimensions.get('window').width;

const ProfileSettings = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
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

  const captureCamera = () => {};

  const uploadFromCamera = () => {
    let options = {
      mediaType: 'photo',
      saveToPhotos: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setFileUri(response.assets[0].uri);
      }
    });
  };

  let userName = 'llamalicker25';
  let emailAddress = 'llamalicker25@gmail.com';

  return (
    <Box flex={1} bg="#101010">
      <TouchableOpacity
        style={{position: 'absolute', top: 60, left: 23, zIndex: 2}}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <BackIcon name="leftcircleo" size={30} color="#35C280" />
      </TouchableOpacity>

      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView>
          <VStack justifyContent="center" p={4}>
            <Box py={5}>
              <VStack space={3} justifyContent="center" alignItems="center">
                <TouchableOpacity activeOpacity={0.8} onPress={() => onOpen()}>
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

                    <Center
                      bg="#000"
                      p={2}
                      justifyContent="center"
                      alignItems="center"
                      borderRadius={30}
                      borderColor="#35C280"
                      borderWidth={2}
                      position="absolute"
                      bottom={0}
                      right={3}
                      zIndex={2}>
                      <Icon
                        name="create-outline"
                        size={15}
                        color="#35C280"
                        style={{zIndex: 5}}
                      />
                    </Center>
                  </HStack>
                </TouchableOpacity>

                <Text color="#ADB5BD" fontSize="2xl" fontWeight="bold">
                  {userName}
                </Text>

                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Change Username
                </Text>
                <Input
                  keyboardAppearance="dark"
                  mb={1}
                  placeholder={userName}
                  bg="#212529"
                  borderColor="#212529"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={12}
                  px={5}
                  _focus={{borderColor: '#495057'}}
                  onChangeText={text => setUsername(text)}
                  value={username}
                />

                <Text color="#CED4DA" ml={1} alignSelf="flex-start">
                  Change Email
                </Text>
                <Input
                  keyboardAppearance="dark"
                  keyboardType="email-address"
                  mb={1}
                  placeholder={emailAddress}
                  bg="#212529"
                  borderColor="#212529"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'100%'}
                  h={12}
                  px={5}
                  _focus={{borderColor: '#495057'}}
                  onChangeText={text => setEmail(text)}
                  value={email}
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
                    bg="#343A40"
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
                        Save Changes
                      </Text>
                    )}
                  </Box>
                </TouchableOpacity>

                <Actionsheet isOpen={isOpen} onClose={onClose}>
                  <Actionsheet.Content bg="#212529">
                    <Box w="100%" h={60} px={4} justifyContent="center">
                      <Text fontSize="md" fontWeight={700} color="#6C757D">
                        Upload a Photo
                      </Text>
                    </Box>
                    <Actionsheet.Item
                      onPress={() => selectAPhoto()}
                      startIcon={
                        <Icon name="image-outline" size={30} color="#CED4DA" />
                      }
                      _pressed={{background: '#1F1F1F'}}>
                      <Text color="#CED4DA" fontWeight={700} fontSize="md">
                        Choose from Camera Roll
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      onPress={() => uploadFromCamera()}
                      startIcon={
                        <Icon
                          name="ios-camera-outline"
                          size={30}
                          color="#CED4DA"
                        />
                      }
                      _pressed={{background: '#1F1F1F'}}>
                      <Text color="#CED4DA" fontWeight={700} fontSize="md">
                        Capture from Camera
                      </Text>
                    </Actionsheet.Item>
                    <Actionsheet.Item
                      onPress={() => onClose()}
                      startIcon={
                        <Icon name="close" size={30} color="#CED4DA" />
                      }
                      _pressed={{background: '#1F1F1F'}}>
                      <Text color="#CED4DA" fontWeight={700} fontSize="md">
                        Cancel
                      </Text>
                    </Actionsheet.Item>
                  </Actionsheet.Content>
                </Actionsheet>
              </VStack>
            </Box>
          </VStack>
        </SafeAreaView>
      </ScrollView>
    </Box>
  );
};

export default ProfileSettings;
