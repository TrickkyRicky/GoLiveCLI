import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PlayScreen from './Screens/PlayScreen';
import PushScreen from './Screens/PushScreen';
import HomeScreen from './Screens/HomeScreen';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'iShow'}}
        />
        <Stack.Screen name="Play" component={PlayScreen} />
        <Stack.Screen name="Push" component={PushScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  return <StackNavigation />;
}
