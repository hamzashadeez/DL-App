import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { userState } from "../Recoil/Atoms";
import { Second, First } from "../Components/Message";

const Chat = ({ navigation, route }) => {
  const { data, title } = route.params;

  const [chapter, setChapter] = useState({});
  const [messages, setMessages] = useState([]);
  const [p1, setP1] = useState(messages[0]?.sender);

  useEffect(() => {
    data.chapters.map((chapt) => {
      if (chapt.title === title) {
        setChapter(chapt);
        setMessages(chapt.messages);
      } else {
        console.log(chapt.title, title);
      }
    });
  }, []);

  return (
    <View style={styles.screen}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/dl.jpg")}
        style={styles.banner}
      >
        <View style={styles.overlay}></View>
        <TouchableOpacity
          style={{ zIndex: 40, marginTop: 10 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 40,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              fontFamily: "Lato",
              color: "#fff",
              zIndex: 4,
            }}
          >
            {title}
          </Text>

          <Text
            style={{
              fontSize: 10,
              fontFamily: "Lato",
              color: "#fff",
              zIndex: 4,
            }}
          >
            {data.title}
          </Text>
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1, padding: 15 }}>
        <Text style={styles.time}>{chapter.time}</Text>
        <View></View>
        {messages.map(
          (m, index) => {
            if (m.p === "2") {
              return <Second key={m.body} message={m.body} sender={m.sender} />;
            }else{
                return <First key={m.body} message={m.body} sender={m.sender} />;
            }
          }
          // {p1 === m.sender ? }
        )}
      </ScrollView>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  banner: {
    // width: "100%",
    height: 120,
    padding: 10,
    zIndex: -1,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: 120,
    top: 0,
    left: 0,
    backgroundColor: "#000",
    opacity: 0.7,
    zIndex: 1,
  },
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  time: {
    fontSize: 11,
    fontFamily: "Lato",
    textAlign: "center",
    marginBottom: 10,
  },
});
