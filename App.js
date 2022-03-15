import React, {useRef} from 'react';
import {
  StatusBar,
  Animated,
  View,
  Platform,
  Dimensions,
  Image,
} from 'react-native';
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
import StreamScreen from './Screens/StreamScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const width = Dimensions.get('window').width;

function getWidth() {
  let width = Dimensions.get('window').width;

  // Horizontal Padding = 20...
  width = width - 80;

  // Total five Tabs...
  return width / 5;
  // return width / 3;
}

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
              name="HomeTab"
              component={TabNavigator}
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

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Discover" component={DiscoverScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  // Animated Tab Indicator...
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <>
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
            borderRadius: 30,
          },

          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'compass';
            } else if (route.name === 'Settings') {
              iconName = 'cog';
            } else if (route.name === 'Stream') {
              return (
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: '#35C280',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS == 'android' ? 50 : 20,
                    zIndex: 2,
                  }}>
                  <Icon name="video-camera" size={25} color="#fff" />
                </View>
              );
            }

            return (
              <View style={{position: 'absolute', top: '50%'}}>
                <Icon name={iconName} size={30} color={color} />
              </View>
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeStackNavigator}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen name="Stream" component={StreamScreen} />
        <Tab.Screen
          name="Settings"
          component={Settings}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3.75,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: width * 0.15,
          height: 2,
          backgroundColor: '#35C280',
          position: 'absolute',
          bottom: 75,
          // Horizontal Padding = 20...
          left: 47,
          borderRadius: 20,
          transform: [{translateX: tabOffsetValue}],
        }}
      />
    </>
  );
};

export default function App() {
  return <SplashStackNavigation />;
}
