import React, { useEffect, useState, useRef } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Second, First } from "../Components/Message";
import { set } from "react-native-reanimated";

const Chat = ({ navigation, route }) => {
  const { data, title } = route.params;

  const scrollViewRef = useRef();
  const [chapter, setChapter] = useState({});
  const [messages, setMessages] = useState([]);
  const [playing, setPlayer] = useState(true);
  const [index, setIndex] = useState(0);

  const [chat, setChat] = useState([]);

  const soundClick = ()=>{
    // Play sound here
    // change Icon here
    setPlayer(!playing)
  }

  const resetStory = ()=>{
    setChat([]);
    setIndex(0)
  }

  const displayNextChat = ()=>{
    if(index < messages.length){
      setChat(oldArray => [...oldArray, messages[index]]);
      setIndex(index + 1)
    }
    else{
      alert("The end of this chapter")
    }
  }
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

  useEffect(()=>{
    messages.map((m, index)=>{
        setChat(oldArray => [...oldArray, m]);
    })
    console.log(chat)
  }, [])

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
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
      style={{ flex: 1, padding: 15 }}>
        <Text style={styles.time}>{chapter.time}</Text>
        <View></View>
        {chat.map(
          (m, index) => {
            if (m.p === "2") {
                return (
                  <Second key={m.body} message={m.body} sender={m.sender} />
                );
              } else {
                return (
                  <First key={m.body} message={m.body} sender={m.sender} />
                );
              }
          }
            
          
        
        
        )}
      </ScrollView>
      <View style={styles.control}>
        <TouchableOpacity style={styles.controlBtn} onPress={()=> resetStory()}>
        <MaterialCommunityIcons name="restart" color="#333" size={20} />
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> displayNextChat()} style={[styles.controlBtn, {backgroundColor: "#2e4850"}]}>
        <MaterialCommunityIcons name="skip-forward" color="#fff" size={20} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.controlBtn} onPress={()=> soundClick()}>
        <MaterialCommunityIcons name={playing ? "volume-high": "volume-mute"} color="#333" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  banner: {
    // width: "100%",
    height: 95,
    padding: 10,
    zIndex: -1,
    position: "relative",
  },
  overlay: {
    position: "absolute",
    width: "100%",
    height: 95,
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
  control:{
    marginTop: 5,
    alignItems: 'center',
    justifyContent: "space-between",
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderTopColor: '#efefef',
    borderTopWidth: 1
  },
  controlBtn:{
    flex: 1,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
