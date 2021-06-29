import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  BackHandler,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChapterListItem from "../Components/ChapterListItem";

const Chapters = ({ navigation, route }) => {
  const { data } = route.params;

  const backAction = () => {
    navigation.goBack();
    return true;
  };

  const backHandler = BackHandler.addEventListener(
    "hardwareBackPress",
    backAction
  );
  return (
    <View style={styles.screen}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/dl.jpg")}
        style={styles.banner}
      >
        <View style={styles.overlay}></View>
        <TouchableOpacity
          style={{ zIndex: 40 }}
          onPress={() => navigation.goBack()}
        >
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={30}  style={{marginTop: 22, marginBottom: 0}}/>
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
              fontSize: 25,
              fontFamily: "Lato",
              color: "#fff",
              zIndex: 4,
              marginTop: -10
            }}
          >
            {data.title}
          </Text>
        </View>
      </ImageBackground>
      <ScrollView style={{ flex: 1, padding: 15 }}>
        <Text
          style={{
            textTransform: "uppercase",
            fontSize: 10,
            color: "#ccc",
            marginBottom: 8,
          }}
        >
          CHAPTERS
        </Text>
        {data.chapters.map((d) => (
          <ChapterListItem
            navigation={navigation}
            data={data}
            key={d.title}
            title={d.title}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default Chapters;

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
});
