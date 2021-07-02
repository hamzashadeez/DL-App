import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import firebase from "firebase";
import { db } from "../Configs/firebase";

import {useRecoilState} from "recoil";
import { userState } from "../Recoil/Atoms";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const logMeIn = ()=>{
      setLoading(!loading)
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(userData=>{
            db.collection("Users").doc(email).get().then(user=>{
                setUser(user.data())
            })
        }).catch((e)=>{
            alert( e.message);
            console.log("Error", e.message);
            setLoading(false)
        })
  }
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#2e4850" }}>
      <Text
        style={{
          fontFamily: "Lato",
          fontSize: 30,
          color: "#547c84",
          marginTop: 40,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontFamily: "Lato",
          fontSize: 14,
          color: "#547c84",
          marginBottom: 40,
        }}
      >
        Muna murna da dawowarka
      </Text>

      <View>
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Email Address"
          keyboardType="email-address"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Password"
          keyboardType="visible-password"
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => setPassword(e)}
        />
        <TouchableOpacity style={styles.btn} onPress={()=> logMeIn()}>
          {loading ? (
            <ActivityIndicator color="#fff" size={20} />
          ) : (
            <Text style={{ fontFamily: "Lato", fontSize: 16, color: "#fff" }}>
              Login
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            marginTop: 35,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontFamily: "Lato", fontSize: 16, color: "#eee" }}>
            Babu account?
          </Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Register")}
          >
            <Text
              style={{ fontFamily: "Lato", fontSize: 16, color: "#547c84" }}
            >
              Yi Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#547c84",
    borderRadius: 3,
    marginBottom: 10,
    fontSize: 15,
    color: "#eee",
    fontFamily: "Lato",
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "seagreen",
    alignItems: "center",
    justifyContent: "center",
  },
});
