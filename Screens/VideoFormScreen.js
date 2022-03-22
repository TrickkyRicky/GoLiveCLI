import {
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  Text,
  HStack,
  Heading,
  Input,
  Select,
  FormControl,
  KeyboardAvoidingView,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {sPath, vPath} from '../utility/dev';
import {launchImageLibrary} from 'react-native-image-picker';

const width = Dimensions.get('window').width;

const VideoFormScreen = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [streamTitle, setStreamTitle] = useState('');
  //   const [fileData, setFileData] = useState('');
  const [fileUri, setFileUri] = useState(''); //file path

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
      //   console.log(response.assets[0].fileName);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        //   const source = {uri: response.uri};
        setFileUri(response.assets[0].uri);
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
                <Icon
                  name="leftcircleo"
                  size={30}
                  color="#35C280"
                  onPress={() => navigation.goBack()}
                />
              </HStack>

              <Box w="100%" h={60} ml={3.5} justifyContent="center">
                <Heading size="2xl" color="#E9ECEF">
                  Upload a Video
                </Heading>
              </Box>

              <FormControl alignItems="center">
                <Text color="#CED4DA" ml={2.5} mb={1} alignSelf="flex-start">
                  Video Title
                </Text>
                <Input
                  isRequired
                  keyboardAppearance="dark"
                  mb={3}
                  placeholder="Title"
                  bg="#343A40"
                  borderColor="#343A40"
                  color="#CED4DA"
                  fontSize="sm"
                  fontWeight={600}
                  borderRadius={10}
                  w={'95%'}
                  h={10}
                  onChangeText={text => setStreamTitle(text)}
                  value={streamTitle}
                />

                <Text color="#CED4DA" ml={2.5} mb={1} alignSelf="flex-start">
                  Category
                </Text>
                <Select
                  isRequired
                  w={'95%'}
                  h={10}
                  placeholder="Choose Category"
                  bg="#343A40"
                  fontSize="sm"
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

              <TouchableOpacity onPress={() => selectAVideo()}>
                <Box w="95%" bg="#35C280" borderRadius={10} mt={5} p={3}>
                  <Text
                    fontSize="md"
                    fontWeight={'medium'}
                    color="#fff"
                    alignSelf="center">
                    Choose a Video
                  </Text>
                </Box>
              </TouchableOpacity>

              {fileUri ? (
                <Image
                  source={{
                    uri: fileUri,
                  }}
                  style={{height: 300, width: 300}}
                />
              ) : null}
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default VideoFormScreen;
