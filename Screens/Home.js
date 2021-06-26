import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Box from "../Components/Box";
import HomeHeader from "../Components/HomeHeader";
import { db } from "../Configs/firebase";
import {userState} from '../Recoil/Atoms'
import { useRecoilState, useRecoilValue } from "recoil";

const Home = ({navigation}) => {
  const [books, setBooks] = useState([]);
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    console.log(user.phone)
    db.collection("Stories").onSnapshot((shot) => {
      setBooks(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  return (
    <View style={styles.screen}>
      <HomeHeader />
      <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
        <Text style={styles.desc}>Zabi bangaren da kake so</Text>
        {/* Category New Arrival */}
        <View style={styles.category}>
          <Text style={{ fontFamily: "Lato", color: "#222" }}>NEW</Text>
          <ScrollView
            snapToInterval={100}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {books.map((book) => (
              <Box navigation={navigation} key={book.id} book={book.data} />
            ))}
          </ScrollView>
        </View>
        {/* Category Soyayyah */}
        <View style={styles.category}>
          <Text style={{ fontFamily: "Lato", color: "#222" }}>SOYAYYAH</Text>
          <ScrollView
            snapToInterval={100}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {books.map((book) => {
              if (book.data.category === "soyayyah") {
                return <Box navigation={navigation} key={book.id} book={book.data} />;
              }
            })}
          </ScrollView>
        </View>
        {/* Category Rayuwa */}
        <View style={styles.category}>
          <Text style={{ fontFamily: "Lato", color: "#222" }}>RAYUWA</Text>
          <ScrollView
            snapToInterval={100}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {books.map((book) => {
              if (book.data.category === "rayuwa") {
                return <Box navigation={navigation} key={book.id} book={book.data} />;
              }
            })}
          </ScrollView>
        </View>
        {/* Category Soyayyah */}
        <View style={styles.category}>
          <Text style={{ fontFamily: "Lato", color: "#222" }}>
            DOGON ZANGO (SERIES)
          </Text>
          <ScrollView
            snapToInterval={100}
            style={styles.list}
            showsHorizontalScrollIndicator={false}
            horizontal
          >
            {books.map((book) => (
              <Box navigation={navigation} key={book.id} book={book.data} />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "white",
    flex: 1,
  },
  main: {
    flex: 1,
    padding: 10,
  },
  desc: {
    textTransform: "uppercase",
    fontSize: 10,
    color: "#ccc",
    marginBottom: 8,
  },
  category: {
    marginBottom: 20,
  },
  list: {
    // height: 150,
    width: "100%",
    marginTop: 3,
  },
});
