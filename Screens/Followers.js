import {TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, VStack, HStack, Text, Heading, Center} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width;

const Followers = ({navigation}) => {
  return (
    <Box flex={1} bg="#101010">
      <Center mt={16} alignItems="center">
        <Heading color="#DEE2E6" size="3xl">
          Followers
        </Heading>
      </Center>
    </Box>
  );
};

export default Followers;
