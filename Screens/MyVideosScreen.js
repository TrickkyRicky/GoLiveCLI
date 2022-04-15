import {TouchableOpacity, Dimensions, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Box,
  VStack,
  HStack,
  Text,
  Heading,
  Pressable,
  Center,
} from 'native-base';
import NoVideos from '../components/NoVideos';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
import {Data} from '../utility/data';
import {SwipeListView} from 'react-native-swipe-list-view';
import {useDispatch, useSelector} from 'react-redux';
const width = Dimensions.get('window').width;

const MyVideos = ({navigation}) => {
  const [listData, setListData] = useState(Data);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.id === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = ({item, index}) => (
    <Box>
      <Pressable onPress={() => console.log('You touched me')} bg="#101010">
        <Box pr="4" py="2">
          <HStack alignItems="center" pl={3} space={2}>
            <Image
              alt="stream image"
              source={item.image}
              style={{
                resizeMode: 'cover',
                height: 100,
                width: width * 0.45,
                borderRadius: 5,
              }}
            />

            <VStack pr={1}>
              <Text
                fontSize="md"
                w={width * 0.47}
                color="#DEE2E6"
                numberOfLines={2}
                bold>
                {item.streamName}
              </Text>
              <HStack>
                <Text fontSize="xs" color="#ADB5BD">
                  {item.views} Views
                </Text>
                <Text fontSize="xs" color="#ADB5BD" mx={1}>
                  •
                </Text>
                <Text fontSize="xs" color="#ADB5BD">
                  {index} Days Ago
                </Text>
              </HStack>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1">
      <Pressable
        w="70"
        ml="auto"
        bg="#6C757D"
        justifyContent="center"
        onPress={() => {
          closeRow(rowMap, data.item.id);
        }}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon name="ios-create-outline" size={25} color="#212529" />
          <Text fontSize="md" fontWeight="medium" color="#212529">
            Edit
          </Text>
        </VStack>
      </Pressable>

      <Pressable
        w="70"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        onPress={() => deleteRow(rowMap, data.item.id)}
        _pressed={{
          opacity: 0.5,
        }}>
        <VStack alignItems="center" space={2}>
          <Icon name="ios-trash-bin" size={25} color="#DEE2E6" />
          <Text color="#DEE2E6" fontSize="md" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box
      flex={1}
      bg="#101010"
      //   p={3}
    >
      <TouchableOpacity
        style={{position: 'absolute', top: 60, left: 23, zIndex: 2}}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <BackIcon name="leftcircleo" size={30} color="#35C280" />
      </TouchableOpacity>

      <SafeAreaView>
        {listData && listData.length != 0 ? (
          <Heading mt={16} px={5} size="2xl" color="#CED4DA">
            My Videos
          </Heading>
        ) : null}

        <Box h="full">
          {listData && listData.length != 0 ? (
            <SwipeListView
              data={listData}
              renderItem={renderItem}
              renderHiddenItem={renderHiddenItem}
              keyExtractor={item => item.id}
              rightOpenValue={-140}
              closeOnRowPress={true}
              useNativeDriver={true}
              disableRightSwipe={true}
              onRowDidOpen={onRowDidOpen}
            />
          ) : (
            <NoVideos />
          )}
        </Box>
      </SafeAreaView>
    </Box>
  );
};

export default MyVideos;
