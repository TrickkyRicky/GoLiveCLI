import {TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, VStack, HStack, Text, Heading, Center} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import BackIcon from 'react-native-vector-icons/AntDesign';
const width = Dimensions.get('window').width;

const ContactUs = ({navigation}) => {
  return (
    <Box flex={1} bg="#101010">
      <TouchableOpacity
        style={{position: 'absolute', top: 60, left: 23, zIndex: 2}}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}>
        <BackIcon name="leftcircleo" size={30} color="#35C280" />
      </TouchableOpacity>

      <SafeAreaView>
        <Center mt={16} alignItems="center">
          <Heading color="#DEE2E6" size="3xl">
            You Rock!!!
          </Heading>
          <Heading color="#ADB5BD" size="lg" px={3}>
            Thank you for testing the app. Please submit any feedback through
            Testflight. Your input helps to improve the app.
          </Heading>
        </Center>
      </SafeAreaView>
    </Box>
  );
};

export default ContactUs;
