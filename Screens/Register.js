import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Register = ({navigation}) => {
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
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Phone e.g: 080xxxxxxxx"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Username e.g Yusuf11212"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#2e4850"
          placeholder="Password"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontFamily: "Lato", color: "#fff" }}>Register</Text>
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
          <TouchableOpacity style={{ marginLeft: 10 }} onPress={()=>navigation.navigate("Login")}>
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
