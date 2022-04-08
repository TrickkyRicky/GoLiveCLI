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
  Input,
  Select,
  FormControl,
  Switch,
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import {sPath, vPath} from '../utility/dev';

const width = Dimensions.get('window').width;

const StreamFormScreen = ({navigation}) => {
  const selectFontColor = '#ADB5BD';
  const selectOnPressedBGColor = '#343A40';
  const [category, setCategory] = useState('');
  const [streamTitle, setStreamTitle] = useState('');
  const [privateVideo, setPrivateVideo] = useState(false);

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState('STREAM_NAME');

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

              <Box w="100%" h={60} ml={3.5} mb={12} justifyContent="center">
                <Heading size="2xl" fontWeight={600} color="#ADB5BD">
                  Create a Stream
                </Heading>
                <Heading size="md" fontWeight={400} color="#ADB5BD">
                  Share with other viewers.
                </Heading>
              </Box>

              <FormControl alignItems="center">
                <Text
                  color="#ADB5BD"
                  fontSize="sm"
                  ml={2.5}
                  mb={1}
                  alignSelf="flex-start">
                  Stream Title
                </Text>
                <Input
                  isRequired
                  keyboardAppearance="dark"
                  mb={3}
                  px={5}
                  placeholder="Title"
                  bg="#212529"
                  borderColor="#212529"
                  _focus={{borderColor: '#101010'}}
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
                  color="#ADB5BD"
                  fontSize="sm"
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
                  placeholder="Choose Category"
                  bg="#212529"
                  fontSize="md"
                  fontWeight={600}
                  color="#CED4DA"
                  borderColor="#212529"
                  _focus={{borderColor: '#101010'}}
                  borderRadius={10}
                  _actionSheetContent={{backgroundColor: '#212529'}}
                  selectedValue={category}
                  onValueChange={selectedItem => setCategory(selectedItem)}>
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Art"
                    value="Art"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Beauty"
                    value="Beauty"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Chatting"
                    value="Chatting"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Education"
                    value="Education"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Gaming"
                    value="Gaming"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Music"
                    value="Music"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Sports"
                    value="Sports"
                  />
                  <Select.Item
                    _text={{color: selectFontColor}}
                    _pressed={{background: selectOnPressedBGColor}}
                    label="Vlogs"
                    value="Vlogs"
                  />
                </Select>

                <HStack
                  mt={7}
                  mb={5}
                  w="97%"
                  justifyContent="space-between"
                  alignItems="center">
                  <Heading color="#ADB5BD" size="sm" ml={2.5} mb={1}>
                    Make this stream private?
                  </Heading>
                  <Switch
                    value={privateVideo}
                    onToggle={() => setPrivateVideo(!privateVideo)}
                    size="md"
                    onTrackColor="#35C280"
                  />
                </HStack>

                <FormControl.ErrorMessage
                  leftIcon={<Icon name="warning" color="#dc2626" size={20} />}>
                  Please make a selection!
                </FormControl.ErrorMessage>
              </FormControl>

              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() =>
                  navigation.navigate('Push', {
                    pushserver: pushserver,
                    stream: stream,
                  })
                }>
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
                    Start Streaming
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

export default StreamFormScreen;
