import {
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  Input,
  Select,
  useToast,
  Actionsheet,
  useDisclose,
  FormControl,
  KeyboardAvoidingView,
} from 'native-base';
import BackIcon from 'react-native-vector-icons/AntDesign';
import UploadIcon from 'react-native-vector-icons/Ionicons';
import {sPath, vPath} from '../utility/dev';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

import Icon from 'react-native-vector-icons/Ionicons';

const width = Dimensions.get('window').width;

const VideoFormScreen = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [streamTitle, setStreamTitle] = useState('');
  const [fileData, setFileData] = useState(null); //file name
  const [fileUri, setFileUri] = useState(''); //file path
  const toast = useToast();
  const {isOpen, onOpen, onClose} = useDisclose();

  // const dispatch = useDispatch();

  const selectAVideo = () => {
    const options = {
      mediaType: 'video',
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
        toast.show({
          duration: 2000,
          render: () => {
            return (
              <Box
                bg="#495057"
                px={4}
                py={3}
                rounded="sm"
                mb={16}
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <HStack space={3}>
                  <UploadIcon name="cloud-upload" size={30} color="#fff" />
                  <Text color="#fff" fontSize="lg" fontWeight={600}>
                    Uploading Video...
                  </Text>
                </HStack>
              </Box>
            );
          },
        });
      }
    });
  };

  const uploadFromCamera = () => {
    let options = {
      mediaType: 'video',
      saveToPhotos: true,
      storageOptions: {
        skipBackup: true,
        path: 'videos',
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
        onClose();
        setFileUri(response.assets[0].uri);
        toast.show({
          duration: 2000,
          render: () => {
            return (
              <Box
                bg="#495057"
                px={4}
                py={3}
                rounded="sm"
                mb={16}
                flexDirection="row"
                justifyContent="center"
                alignItems="center">
                <HStack space={3}>
                  <UploadIcon name="cloud-upload" size={30} color="#fff" />
                  <Text color="#fff" fontSize="lg" fontWeight={600}>
                    Uploading Video...
                  </Text>
                </HStack>
              </Box>
            );
          },
        });
      }
    });
  };

  return (
    <Box flex={1} bg="#212529">
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
                <BackIcon
                  name="leftcircleo"
                  size={30}
                  color="#35C280"
                  onPress={() => navigation.goBack()}
                />
              </HStack>

              <Box w="100%" h={60} ml={3.5} mb={12} justifyContent="center">
                <Heading size="2xl" fontWeight={600} color="#E9ECEF">
                  Upload a Video
                </Heading>
                <Heading size="md" fontWeight={400} color="#E9ECEF">
                  Post videos for others to watch.
                </Heading>
              </Box>

              <FormControl alignItems="center">
                <Text
                  fontSize="md"
                  color="#CED4DA"
                  ml={2.5}
                  mb={1}
                  alignSelf="flex-start">
                  Video Title
                </Text>
                <Input
                  isRequired
                  keyboardAppearance="dark"
                  mb={3}
                  px={5}
                  _focus={{borderColor: '#ADB5BD'}}
                  placeholder="Title"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="md"
                  fontWeight={600}
                  borderRadius={10}
                  w={'95%'}
                  h={12}
                  onChangeText={text => setStreamTitle(text)}
                  value={streamTitle}
                />

                <Text
                  color="#CED4DA"
                  fontSize="md"
                  ml={2.5}
                  mb={1}
                  alignSelf="flex-start">
                  Category
                </Text>
                <Select
                  isRequired
                  w={'95%'}
                  h={12}
                  px={5}
                  _focus={{borderColor: '#ADB5BD'}}
                  placeholder="Choose Category"
                  bg="#343A40"
                  fontSize="md"
                  fontWeight={600}
                  color="#CED4DA"
                  borderColor="#343A40"
                  borderRadius={10}
                  _actionSheetContent={{backgroundColor: '#343A40'}}
                  selectedValue={category}
                  onValueChange={selectedItem => setCategory(selectedItem)}>
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#212529'}}
                    label="Art"
                    value="Art"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Beauty"
                    value="Beauty"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Chatting"
                    value="Chatting"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Education"
                    value="Education"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Gaming"
                    value="Gaming"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Music"
                    value="Music"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Sports"
                    value="Sports"
                  />
                  <Select.Item
                    _text={{color: '#F5F4F4'}}
                    _pressed={{background: '#1F1F1F'}}
                    label="Vlogs"
                    value="Vlogs"
                  />
                </Select>
                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" color="#dc2626" size={20} />}>
                  Please make a selection!
                </FormControl.ErrorMessage>
              </FormControl>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => {
                  onOpen();
                }}>
                <Box
                  w={width * 0.9}
                  bg="#35C280"
                  borderRadius={10}
                  mt={6}
                  p={3}
                  _pressed={{bg: '#000'}}>
                  <Text
                    fontSize="md"
                    fontWeight={'medium'}
                    color="#fff"
                    alignSelf="center">
                    Upload a Video
                  </Text>
                </Box>
              </TouchableOpacity>

              <Actionsheet isOpen={isOpen} onClose={onClose}>
                <Actionsheet.Content bg="#343A40">
                  <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text fontSize="md" fontWeight={700} color="#6C757D">
                      Upload a Video
                    </Text>
                  </Box>
                  <Actionsheet.Item
                    onPress={() => selectAVideo()}
                    startIcon={
                      <Icon name="image-outline" size={30} color="#CED4DA" />
                    }
                    _pressed={{background: '#212529'}}>
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
                    _pressed={{background: '#212529'}}>
                    <Text color="#CED4DA" fontWeight={700} fontSize="md">
                      Capture from Camera
                    </Text>
                  </Actionsheet.Item>
                  <Actionsheet.Item
                    onPress={() => onClose()}
                    startIcon={<Icon name="close" size={30} color="#CED4DA" />}
                    _pressed={{background: '#212529'}}>
                    <Text color="#CED4DA" fontWeight={700} fontSize="md">
                      Cancel
                    </Text>
                  </Actionsheet.Item>
                </Actionsheet.Content>
              </Actionsheet>
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default VideoFormScreen;
