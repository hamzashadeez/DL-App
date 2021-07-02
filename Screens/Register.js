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
import {userState} from '../Recoil/Atoms'
import { useRecoilState } from "recoil";  

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useRecoilState(userState);

  const signUp = () => {
    setLoading(!loading);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var userData = {
          username,
          email,
          password,
          phone,
          coins: 20,
          books: [],
        };
        db.collection("Users").doc(email).set( userData ).then(()=>{
          setUser(userData)
        })
        // ...
       
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Alert("Error", errorMessage);
        // ..
      });
  };
  return (
    <View style={{ flex: 1, padding: 15, backgroundColor: "#2e4850" }}>
      <Text
        style={{
          fontFamily: "Lato",
          fontSize: 30,
          color: "#547c84",
          marginTop: 30,
        }}
      >
        Register Here
      </Text>
      <Text
        style={{
          fontFamily: "Lato",
          fontSize: 14,
          color: "#547c84",
          marginBottom: 30,
        }}
      >
        A cike form din dake a kasa
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
          placeholder="Phone e.g: 080xxxxxxxx"
          keyboardType="numeric"
          value={phone}
          onChangeText={(e) => setPhone(e)}
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Username e.g Yusuf11212"
          value={username}
          onChangeText={(e) => setUsername(e)}
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
        <TouchableOpacity style={styles.btn} onPress={() => signUp()}>
          {loading ? (
            <ActivityIndicator color="#fff" size={20} />
          ) : (
            <Text style={{ fontFamily: "Lato", fontSize: 16, color: "#fff" }}>
              Register
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
            kanada account?
          </Text>
          <TouchableOpacity
            style={{ marginLeft: 10 }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{ fontFamily: "Lato", fontSize: 16, color: "#547c84" }}
            >
              Yi Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

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
