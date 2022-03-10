import React, { useState, useEffect } from "react";
import {
  Text,
  TextInput,
  View,
  Button,
  Platform,
  PermissionsAndroid,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlayScreen from "./Screens/PlayScreen";
import PushScreen from "./Screens/PushScreen";

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

const HomeScreen = (props) => {
  const [playserver, setPlayserver] = useState(
    "https://9732-2603-8081-1604-91e7-2da4-bf3b-19a7-103e.ngrok.io/live/"
  );
  const [pushserver, setPushserver] = useState(
    "rtmp://8.tcp.ngrok.io:15721/live/"
  );
  const [stream, setStream] = useState("STREAM_NAME");

  useEffect(() => {
    if (Platform.OS === "android") {
      requestCameraPermission();
    }
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 24,
        backgroundColor: "orange",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 25,
          marginBottom: 150,
        }}
      >
        {"React Native\nLive Stream Video example"}
      </Text>
      <Text style={{ color: "#fff", fontSize: 18 }}>
        Please enter a stream name.
      </Text>
      <View
        style={{
          borderWidth: 1,
          borderColor: "blue",
          marginTop: 20,
          marginBottom: 100,
        }}
      >
        <TextInput
          style={{ color: "#fff", height: 40 }}
          placeholder="Write stream name here"
          placeholderTextColor="#555"
          value={stream}
          onChangeText={(stream) => setStream(stream)}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Button
          onPress={() =>
            props.navigation.navigate("Play", {
              playserver: playserver,
              stream: stream,
            })
          }
          title="Join Stream"
        />
        <Button
          onPress={() =>
            props.navigation.navigate("Push", {
              pushserver: pushserver,
              stream: stream,
            })
          }
          title="Stream a Video"
        />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "iShow" }}
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
