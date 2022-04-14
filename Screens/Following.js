import {TouchableOpacity, Dimensions, FlatList} from 'react-native';
import React from 'react';
import {Box} from 'native-base';
import Subscribed from '../components/Subscribed';
import {POPULAR_STREAMERS} from '../utility/data';
const width = Dimensions.get('window').width;

const Following = ({navigation}) => {
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
            <Subscribed name={item.name} />
          </TouchableOpacity>
        )}
      />
    </Box>
  );
};

export default Following;
