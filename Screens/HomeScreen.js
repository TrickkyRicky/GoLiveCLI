import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Platform,
  PermissionsAndroid,
  Animated,
  Dimensions,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import { VStack } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Logo from "../assets/Logo.png";
import Video from "../components/Video";
// remember to create this file for you dev env.
import { sPath, vPath } from "../utility/dev";

const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(
      [
        PermissionsAndroid.PERMISSIONS.CAMERA,
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ],
      {
        title: "Camera And Microphone Permission",
        message: "Streaming App needs access to your camera ",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("You can use the camera");
    } else {
      console.log("Camera permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
};

const width = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  //SafeArea Value
  const edges = useSafeAreaInsets();

  //Animation Value
  const startAnimation = useRef(new Animated.Value(0)).current;

  //scaling down the logo
  const scaleLogo = useRef(new Animated.Value(1)).current;

  //offset animation
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState("STREAM_NAME");

  useEffect(() => {
    //Starting Animation after 1ms
    setTimeout(() => {
      //Parallel Animation
      Animated.parallel([
        Animated.timing(startAnimation, {
          //for non safe area devices
          //uncomment to show logo header
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          // toValue: -Dimensions.get('window').height,
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          toValue: 0.5,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          toValue: {
            x: -Dimensions.get("window").width / 300,
            y: Dimensions.get("window").height / 2 - 38,
          },
          useNativeDriver: true,
        }),
      ]).start();
    }, 1000);

    if (Platform.OS === "android") {
      requestCameraPermission();
    }
  }, []);

  //Going to move up like nav bar
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: "#1F1F1F",
          zIndex: 1,
          transform: [{ translateY: startAnimation }],
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Image
            source={Logo}
            style={{
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          />
        </Animated.View>
      </Animated.View>

      {/* CONTENT */}
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <Animated.View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            marginTop: 100,
            backgroundColor: "#1F1F1F",
            padding: 10,
            zIndex: 0,
          }}
        >
          <VStack>
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                marginTop: 15,
                marginBottom: 15,
              }}
            >
              Welcome
            </Text>
            <Text style={{ color: "#fff", fontSize: 18 }}>
              Please enter a stream name.
            </Text>
            <View
              style={{
                borderWidth: 1,
                borderColor: "#1B4332",
                borderWidth: 2,
                borderRadius: 10,
                marginTop: 20,
                marginBottom: 30,
              }}
            >
              <TextInput
                style={{ color: "#fff", height: 40, padding: 10 }}
                placeholder="Write stream name here"
                placeholderTextColor="#555"
                value={stream}
                onChangeText={(stream) => setStream(stream)}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 15,
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Play", {
                    playserver: playserver,
                    stream: stream,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: "#585858",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 24 }}>
                    Join Stream
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Push", {
                    pushserver: pushserver,
                    stream: stream,
                  })
                }
              >
                <View
                  style={{
                    backgroundColor: "#585858",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: "#fff", fontSize: 24 }}>
                    Stream a Video
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <Video width={width} />
          </VStack>
        </Animated.View>
      </TouchableWithoutFeedback>
      {/* CONTENT */}
    </View>
  );
};

export default HomeScreen;
