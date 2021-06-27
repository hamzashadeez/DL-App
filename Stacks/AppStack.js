import React, { useEffect } from "react";
import { Text, View } from "react-native";
import firebase from "firebase";
import AuthStack from "../Stacks/AuthStack";
import Flash from "../Screens/Flash";
import MainStack from "../Stacks/MainStack";
import { useRecoilState, useRecoilValue } from "recoil";

import { db } from "../Configs/firebase";

import { userState } from "../Recoil/Atoms";
const AppStack = () => {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    console.log(userState);
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        db.collection("Users")
          .doc(userData.email)
          .get()
          .then((user) => {
            setUser(user.data());
          });
        console.log("Found a user: " + userData.email);
      } else {
        console.log("No user here");
        setUser(false);
      }
    });
  }, []);

  return (
    <>
      {user === null ? (
        <Flash />
      ) : user === false ? (
        <AuthStack />
      ) : (
        <MainStack />
      )}
    </>
  );
};

export default AppStack;
