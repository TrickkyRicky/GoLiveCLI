import React, {useState, useEffect, useRef} from 'react';
import {
  StatusBar,
  View,
  Platform,
  PermissionsAndroid,
  Animated,
  Dimensions,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Logo from '../assets/Logo.png';
// remember to create this file for you dev env.
import {sPath, vPath} from '../utility/dev';

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ],
      {
        title: 'Camera And Microphone Permission',
        message: 'Streaming App needs access to your camera ',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('You can use the camera');
    } else {
      console.log('Camera permission denied');
    }
  } catch (err) {
    console.warn(err);
  }
};

const width = Dimensions.get('window').width;

const SplashScreen = ({navigation}) => {
  //SafeArea Value
  const edges = useSafeAreaInsets();

  //Animation Value
  const startAnimation = useRef(new Animated.Value(0)).current;

  //scaling down the logo
  const scaleLogo = useRef(new Animated.Value(1)).current;

  //offset animation
  const moveLogo = useRef(new Animated.ValueXY({x: 0, y: 0})).current;

  useEffect(() => {
    //Starting Animation after 1ms
    setTimeout(() => {
      //Parallel Animation
      Animated.parallel([
        Animated.timing(startAnimation, {
          //for non safe area devices
          //uncomment to show logo header
          // toValue: -Dimensions.get('window').height + (edges.top + 65),
          toValue: -Dimensions.get('window').height,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: -Dimensions.get('window').width / 300,
            y: Dimensions.get('window').height / 2 - 38,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);

    setTimeout(() => {
      navigation.navigate('HomeTab');
    }, 1050);

    if (Platform.OS === 'android') {
      requestCameraPermission();
    }
  }, []);

  //Going to move up like nav bar
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: '#212529',
          zIndex: 2,
          transform: [{translateY: startAnimation}],
        }}>
        <Animated.View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            barStyle={'light-content'}
            showHideTransition={'fade'}
            hidden={true}
          />
          <Animated.Image
            source={Logo}
            style={{
              transform: [
                {translateX: moveLogo.x},
                {translateY: moveLogo.y},
                {scale: scaleLogo},
              ],
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* CONTENT */}
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#212529',
          padding: 10,
          paddingBottom: 30,
          zIndex: 1,
        }}></Animated.View>
      {/* CONTENT */}
    </View>
  );
};

export default SplashScreen;
