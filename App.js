import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import PlayScreen from './Screens/PlayScreen';
import PushScreen from './Screens/PushScreen';
import HomeScreen from './Screens/HomeScreen';
import Demo from './Screens/Demo';

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title: 'iShow'}}
            />
            <Stack.Screen
              name="Demo"
              component={Demo}
              options={{animationEnabled: false, gestureEnabled: false}}
            />
            <Stack.Screen name="Play" component={PlayScreen} />
            <Stack.Screen name="Push" component={PushScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

export default function App() {
  return <StackNavigation />;
}
