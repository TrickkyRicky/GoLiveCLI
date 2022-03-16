import {
  FlatList,
  TouchableOpacity,
  Dimensions,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Box,
  VStack,
  Text,
  HStack,
  Input,
  Select,
  KeyboardAvoidingView,
} from 'native-base';
import DiscoverVideo from '../components/DiscoverVideo';
import Video from '../components/Video';
import Icon from 'react-native-vector-icons/AntDesign';
import {sPath, vPath} from '../utility/dev';

const width = Dimensions.get('window').width;

const StreamFormScreen = ({navigation}) => {
  const [category, setCategory] = useState('');
  const [streamTitle, setStreamTitle] = useState('');

  const handleChange = text => {
    setSearchValue(text);
  };
  return (
    <Box flex={1} bg="#1F1F1f">
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
                  name="leftcircle"
                  size={30}
                  color="#35C280"
                  onPress={() => navigation.goBack()}
                />
              </HStack>

              <Box w="100%" h={60} px={4} justifyContent="center">
                <Text fontSize="16" color="#fff">
                  Create a Stream
                </Text>
              </Box>

              <Text color="#CCC" ml={2.5} mb={1} alignSelf="flex-start">
                Stream Title
              </Text>
              <Input
                mb={3}
                placeholder="Title"
                bg="#414141"
                borderColor="#414141"
                color="#CCC"
                fontSize="sm"
                borderRadius={10}
                w={'95%'}
                onChangeText={text => setStreamTitle(text)}
                value={streamTitle}
                // maxWidth="300px"
                // InputLeftElement={
                //   <Icon
                //     name="search1"
                //     size={15}
                //     color="#CCC"
                //     style={{marginLeft: 15}}
                //   />
                // }
              />

              <Text color="#CCC" ml={2.5} mb={1} alignSelf="flex-start">
                Category
              </Text>
              <Select
                mb={3}
                w={'95%'}
                placeholder="Choose Category"
                bg="#414141"
                fontSize="sm"
                color="#F5F4F4"
                borderColor="#414141"
                borderRadius={10}
                _actionSheetContent={{backgroundColor: '#414141'}}
                selectedValue={category}
                onValueChange={selectedItem => setCategory(selectedItem)}>
                <Select.Item
                  _text={{color: '#F5F4F4'}}
                  _pressed={{background: '#1F1F1F'}}
                  label="UX Research"
                  value="ux"
                />
                <Select.Item
                  _text={{color: '#F5F4F4'}}
                  _pressed={{background: '#1F1F1F'}}
                  label="Web Development"
                  value="web"
                />
                <Select.Item
                  _text={{color: '#F5F4F4'}}
                  _pressed={{background: '#1F1F1F'}}
                  label="Cross Platform Development"
                  value="cross"
                />
                <Select.Item
                  _text={{color: '#F5F4F4'}}
                  _pressed={{background: '#1F1F1F'}}
                  label="UI Designing"
                  value="ui"
                />
                <Select.Item
                  _text={{color: '#F5F4F4'}}
                  _pressed={{background: '#1F1F1F'}}
                  label="Backend Development"
                  value="backend"
                />
              </Select>
            </VStack>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </Box>
  );
};

export default StreamFormScreen;
