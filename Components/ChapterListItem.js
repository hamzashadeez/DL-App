import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

const ChapterListItem = ({ navigation, title, data }) => {
  return (
    <Pressable
      style={styles.main}
      onPress={() => navigation.navigate("Chat", { data, title })}
    >
      <Text style={{ fontFamily: "Lato", fontSize: 13, color: "#2e4850" }}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ChapterListItem;

const styles = StyleSheet.create({
  main: {
    marginBottom: 10,
    width: "100%",
    padding: 13,
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "#d4d4d4",
  },
});
