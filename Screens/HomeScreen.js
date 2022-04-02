import React, { useState, useEffect, useRef } from "react";
import {
  Image,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  FlatList,
  ScrollView,
  ImageBackground,
} from "react-native";
import { VStack, Text, Heading, HStack, Center, Box } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../assets/Logo.png";
import Icon from "react-native-vector-icons/AntDesign";
import Video from "../components/Video";
// remember to create this file for you dev env.
import { sPath, vPath } from "../utility/dev";
import PopularStreamers from "../components/PopularStreamers";
import { MotiView } from "moti";
import { Data, CATEGORIES, POPULAR_STREAMERS } from "../utility/data";
import Category from "../components/Category";

import io from "socket.io-client";

const width = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  // Example: "https://0b3a-2603-8081-1604-91e7-fcca-eb88-d9a1-5b79.ngrok.io/live/"
  const [playserver, setPlayserver] = useState(vPath);
  // Example: "rtmp://4.tcp.ngrok.io:13824/live/"
  const [pushserver, setPushserver] = useState(sPath);

  const [stream, setStream] = useState("STREAM_NAME");

  /* ----- CODE FOR SOCKETS WILL BE MOVED LATER ----- */

  useEffect(() => {
    io.connect("http://localhost:8080", {
      withCredentials: true,
      query: "foo=SOCKET SUCCESSFULLY CONNECTED TO REACT NATIVE",
    });
  }, []);

  /* ------------------------------------------------ */

  return (
    <Box flex={1} bg="#101010" zIndex={1}>
      <ImageBackground
        blurRadius={5}
        source={require("../assets/bg.jpeg")}
        resizeMode="cover"
      >
        <SafeAreaView style={{ paddingBottom: 50 }}>
          <StatusBar
            animated={true}
            barStyle={"light-content"}
            showHideTransition={"fade"}
            hidden={false}
          />
          <VStack>
            <Image
              source={Logo}
              alt="logo"
              style={{
                alignSelf: "center",
                transform: [{ scale: 0.8 }],
              }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
              <Box h={5} />
              <FlatList
                data={CATEGORIES}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Box width={4}></Box>}
                renderItem={({ item, index }) => {
                  return (
                    <MotiView
                      from={{ opacity: 0, translateX: 100 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      delay={index * 300}
                      transition={{ type: "timing" }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() =>
                          navigation.navigate("Discover", {
                            width: width,
                          })
                        }
                      >
                        <Category category={item.category} />
                      </TouchableOpacity>
                    </MotiView>
                  );
                }}
              />

              <HStack
                justifyContent={"space-between"}
                alignItems="flex-end"
                mt={5}
                mb={2}
                px={3}
              >
                <Heading size="md" color="#F5F4F4">
                  Trending Streams
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Discover", {
                      width: width,
                    })
                  }
                >
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text letterSpacing={1.5} color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item, index }) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 5 }}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("Play", {
                          playserver: playserver,
                          stream: stream,
                          streamName: item.streamName,
                          streamerName: item.streamerName,
                          bgColor: randomColor,
                          width: width,
                        })
                      }
                    >
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        isLive={true}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />

              <Heading mt={3} pl={3} size="md" color="#F5F4F4">
                Popular Streamers
              </Heading>
              <FlatList
                data={POPULAR_STREAMERS}
                showsHorizontalScrollIndicator={false}
                horizontal
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Box width={4}></Box>}
                renderItem={({ item, index }) => {
                  return (
                    <MotiView
                      from={{ opacity: 0, translateX: 100 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      delay={index * 350}
                      transition={{ type: "timing" }}
                    >
                      <TouchableOpacity
                        activeOpacity={0.4}
                        onPress={() =>
                          navigation.navigate("ProfileScreen", {
                            width: width,
                            name: item.name,
                            followers: item.followers,
                          })
                        }
                      >
                        <PopularStreamers
                          name={item.name}
                          followers={item.folowers}
                        />
                      </TouchableOpacity>
                    </MotiView>
                  );
                }}
              />

              <HStack
                justifyContent={"space-between"}
                alignItems="flex-end"
                mt={2}
                mb={2}
                px={3}
              >
                <Heading size="md" color="#F5F4F4">
                  Recorded Streams
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Discover", {
                      width: width,
                    })
                  }
                >
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text letterSpacing={1.5} color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item, index }) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 5 }}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("Play", {
                          playserver: playserver,
                          stream: stream,
                          streamName: item.streamName,
                          streamerName: item.streamerName,
                          bgColor: randomColor,
                          width: width,
                        })
                      }
                    >
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        isLive={false}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <HStack
                justifyContent={"space-between"}
                alignItems="flex-end"
                mt={2}
                mb={2}
                px={3}
              >
                <Heading size="md" color="#F5F4F4">
                  Past Clips
                </Heading>

                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Discover", {
                      width: width,
                    })
                  }
                >
                  <HStack alignItems="center" justifyContent="center" space={1}>
                    <Text letterSpacing={1.5} color="#F5F4F4" fontSize="sm">
                      SEE ALL
                    </Text>
                    <Icon name="right" size={14} color="#CCC" />
                  </HStack>
                </TouchableOpacity>
              </HStack>

              <FlatList
                data={Data}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item, index }) => {
                  var randomColor = Math.floor(
                    Math.random() * 16777215
                  ).toString(16);
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 5 }}
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate("Play", {
                          playserver: playserver,
                          stream: stream,
                          streamName: item.streamName,
                          streamerName: item.streamerName,
                          bgColor: randomColor,
                          width: width,
                        })
                      }
                    >
                      <Video
                        width={width}
                        streamName={item.streamName}
                        streamerName={item.streamerName}
                        views={item.views}
                        image={item.image}
                        isLive={false}
                        bgColor={randomColor}
                      />
                    </TouchableOpacity>
                  );
                }}
              />
              <Center height={180} />
            </ScrollView>
          </VStack>
        </SafeAreaView>
      </ImageBackground>
    </Box>
  );
};

export default HomeScreen;
