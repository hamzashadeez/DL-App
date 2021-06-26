import React, { useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const BookDetail = ({ navigation, route }) => {
  const { data } = route.params;

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <View style={styles.screen}>
      <ImageBackground
        resizeMode="cover"
        source={require("../assets/dl.jpg")}
        style={styles.banner}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="arrow-left" color="#fff" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 35,
            fontFamily: "Lato",
            color: "#555",
            marginLeft: 150,
            marginTop: 30,
          }}
        >
          Dausayin {"\n"}Labarai
        </Text>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          marginBottom: 10,
        }}
      >
        <Image source={{ uri: data?.photo }} style={styles.image} />
        <View style={{ margin: 15 }}>
          <Text style={{ fontFamily: "Lato", fontSize: 25, color: "#222" }}>
            {data?.title}
          </Text>
          <Text style={{ fontFamily: "Lato", fontSize: 14, color: "#222" }}>
            {data?.author}
          </Text>
          <Text style={{ fontFamily: "Lato", fontSize: 10, color: "#555" }}>
            {data?.category}
          </Text>
        </View>
      </View>
      {/* Desciption */}
      <ScrollView style={{ flex: 1 }}>
        <View>
          <Text
            style={{
              width: "90%",
              marginLeft: "5%",
              fontSize: 15,
              fontFamily: "lato",
              color: "#222",
            }}
          >
            {data?.desc}
          </Text>
          <Text
            style={{
              fontFamily: "Lato",
              fontSize: 16,
              marginLeft: "5%",
              marginTop: 20,
            }}
          >
            Price:{" "}
            <Text style={{ color: "#2e4850", fontWeight: "bold" }}> Free</Text>
          </Text>
        </View>
        {/* Start Reading */}
        <Pressable style={styles.start}>
          <MaterialCommunityIcons
            name="book-open-page-variant"
            color="#fff"
            size={20}
          />
          <Text style={{ fontFamily: "Lato", color: "#fff", fontSize: 14 }}>
            Start Reading
          </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default BookDetail;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner: {
    height: 200,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    padding: 15,
    paddingTop: 20,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 160,
    borderRadius: 10,
    elevation: 4,
    backgroundColor: "#c4c4c4",
    marginTop: -60,
  },
  start: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#2e4850",
    width: 140,
    marginLeft: "5%",
    padding: 10,
    marginTop: 10,
    borderRadius: 4,
  },
});
