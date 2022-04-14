import {TouchableOpacity, Dimensions} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Box, FlatList} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Subscriber from '../components/Subscriber';
import {POPULAR_STREAMERS} from '../utility/data';

const width = Dimensions.get('window').width;

const Followers = ({navigation}) => {
  return (
    <Box flex={1} bg="#101010">
      <FlatList
        data={POPULAR_STREAMERS}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() =>
              navigation.navigate('ProfileScreen', {
                name: item.name,
              })
            }>
            <Subscriber name={item.name} />
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default Followers;
