import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import {
  RecoilRoot,
 } from "recoil";

import AppStack from "./Stacks/AppStack";

export default function App() {
  let [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <RecoilRoot>
        <NavigationContainer>
          <AppStack />
        </NavigationContainer>
      </RecoilRoot>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
