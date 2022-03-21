import {TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Box, VStack, HStack, Text, Heading, Center} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';

const ProfileSettings = ({navigation}) => {
  return (
    <Box bg="#212529" flex={1}>
      <SafeAreaView>
        <VStack p={3}>
          {/* <Icon
            name="left"
            size={30}
            onPress={() => {
              props.navigation.goBack();
            }}
            color="#35C280"
            style={{
              padding: 12,
              position: 'absolute',
              top: 0,
              left: 10,
              zIndex: 2,
            }}
          /> */}
          <Heading color="#CED4DA" size="3xl">
            Profile Settings
          </Heading>
        </VStack>
      </SafeAreaView>
    </Box>
  );
};

export default ProfileSettings;
