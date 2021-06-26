import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";

import { UserProvider, UserContext } from "./Configs/UserContext";
import { Data } from "./Configs/Context";

import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

import { userState } from "./Recoil/Atoms";
import AppStack from "./Stacks/AppStack";

export default function App() {
  const [state, setState] = useContext(UserContext);
  // const [text, setText] = useRecoilState(userState);
  const [signed, setSigned] = useState(null);
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
          {/* {signed === null ? <Flash /> : signed === false ? <AuthStack /> : <MainStack />} */}
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
