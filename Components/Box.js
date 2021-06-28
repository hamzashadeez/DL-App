import React, { useEffect } from "react";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

const Box = ({ book, navigation }) => {
  
  return (
    <Pressable style={styles.box} onPress={()=>navigation.navigate("Detail", {data:book})}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bg}
        source={{ uri: book?.photo }}
      >
        <Text style={{ fontFamily: "lato", color: "#fff" }}>{book?.title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    height: 160,
    width: 105,
    backgroundColor: "#c7c4c4",
    marginRight: 15,
    borderRadius: 10,
    elevation: 4
  },

  bg: {
    flex: 1,
    width: "100%",
    borderRadius: 10,
    paddingBottom: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
