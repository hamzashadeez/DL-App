import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Box = () => {
  return (
    <View style={styles.box}>
      <Text>Box</Text>
    </View>
  );
};

export default Box;

const styles = StyleSheet.create({
  box: {
    height: 160,
    width: 105,
    backgroundColor: "#c4c4c4",
    marginRight: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
});
