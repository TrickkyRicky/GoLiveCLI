import React from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NativeBaseProvider} from 'native-base';
import PlayScreen from './Screens/PlayScreen';
import PushScreen from './Screens/PushScreen';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import Settings from './Screens/Settings';
import DiscoverScreen from './Screens/DiscoverScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Demo from './Screens/Demo';

const width = Dimensions.get('window').width;
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SplashStackNavigation() {
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Splash"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen
              name="Home"
              component={TabNavigator}
              options={{animationEnabled: false, gestureEnabled: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Discover" component={DiscoverScreen} />
      <Stack.Screen name="Play" component={PlayScreen} />
      <Stack.Screen name="Push" component={PushScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#35C280',
        tabBarInactiveTintColor: '#CCC',
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 0,
          backgroundColor: '#323432',
          border: 'none',
          borderWidth: 0,
          borderTopWidth: 0,
          height: 50,
          width: width * 0.9,
          marginLeft: 20,
          borderRadius: 20,
          // alignSelf: 'center',
        },

        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'video-camera';
          } else if (route.name === 'Settings') {
            iconName = 'cog';
          }
          return (
            <View style={{position: 'absolute', top: '50%'}}>
              <Icon name={iconName} size={size} color={color} />
            </View>
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeStackNavigator} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default function App() {
  return <SplashStackNavigation />;
}
