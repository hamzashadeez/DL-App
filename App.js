import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState, useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./Stacks/MainStack";
import { useFonts } from "expo-font";
import AuthStack from "./Stacks/AuthStack";
import firebase from "firebase";
import { UserProvider, UserContext } from "./Configs/UserContext";
import {Data} from './Configs/Context'
import Flash from "./Screens/Flash";

export default function App() {
  const [state, setState] = useContext(UserContext);
  const [signed, setSigned] = useState(null);
  let [fontsLoaded] = useFonts({
    Lato: require("./assets/fonts/Lato-Bold.ttf"),
  });


  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        setSigned(user)
        console.log(user + " is here "+ user.email )
        console.log(state)
        // ...
      } else {
        // User is signed out
        // ...
        setSigned(false)
        console.log("No user here")
      }
    });
  }, []);

  if (!fontsLoaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  } else {
    return (
      <Data.Provider value={signed}>
        <NavigationContainer>
          {signed === null ? <Flash /> : signed === false ? <AuthStack /> : <MainStack />}
        </NavigationContainer>
      </Data.Provider>
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
