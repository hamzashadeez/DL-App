import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
  Pressable,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { db } from "../Configs/firebase";
import firebase from "firebase";

import { useRecoilState } from "recoil";
import { userState } from "../Recoil/Atoms";

const BookDetail = ({ navigation, route }) => {
  const { data } = route.params;
  const [user, setUser] = useRecoilState(userState);
  const [showWarning, setWarning] = useState(false);

  useEffect(() => {
    console.log(data);
  }, []);

  const addBook = async () => {
    let exist = false;
    const bookExist = user.books;
    bookExist.map((b) => {
      if (b.id === data.id) {
        exist = true;
      }
    });
    if (exist !== false) {
      console.log("already exist");
      navigation.navigate("Chapters", { data });
    } else {
      if (user.coins >= 20) {
        db.collection("Users")
          .doc(user.email)
          .update({
            books: firebase.firestore.FieldValue.arrayUnion(data),
            coins: firebase.firestore.FieldValue.increment(parseInt(-20)),
          })
          .then(() => {
            // setUser(user=> {b})
            db.collection("Users")
              .doc(user.email)
              .get()
              .then((user) => {
                setUser(user.data());
              });
            console.log("Book added");
            setWarning(true);
            navigation.navigate("Chapters", { data });
          })
          .catch((e) => console.log(e.message));
      } else {
        alert("Baka da wadataccen Coins da raka bude wannan labari");
        console.log(
          "No Enough Coins Baka da wadataccen Coins da raka bude wannan"
        );
      }
    }
    console.log(user);
    console.log(bookExist);
  };

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
            fontSize: 30,
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
            <Text style={{ color: "#2e4850", fontWeight: "bold" }}>
              {" "}
              20 Coins
            </Text>
          </Text>
        </View>
        {/* Start Reading */}
        <Pressable style={styles.start} onPress={() => addBook()}>
          <MaterialCommunityIcons
            name="book-open-page-variant"
            color="#fff"
            size={20}
          />
          <Text style={{ fontFamily: "Lato", color: "#fff", fontSize: 14 }}>
            Start Reading
          </Text>
        </Pressable>
        {showWarning ? (
          <Text style={styles.warning}>
            Za'a fidda Coins 20 daga cikin Coins dinka domin karanta wannan
            labari
          </Text>
        ) : (
          <Text></Text>
        )}
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
    height: 150,
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
  warning: {
    fontFamily: "Lato",
    fontSize: 11,
    color: "dodgerblue",
    marginTop: 10,
    marginHorizontal: 15,
  },
});
