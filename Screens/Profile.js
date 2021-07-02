import React, { useContext, useEffect, useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  BackHandler
} from "react-native";
import firebase from "firebase";
import { Data } from "../Configs/Context";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import {userState} from '../Recoil/Atoms';

const Profile = ({navigation}) => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const logout = async () => {
    setLoading(true);
    setTimeout(() => {
      firebase
        .auth()
        .signOut()
        .then(() => {
          setUser(false)
          console.log("Signed Out ");
        });
    }, 2000);
    
  };

  const backAction = () => {
     navigation.navigate("Home")
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  return (
    <View
      style={{
        backgroundColor: "white",
        flex: 1,
        alignItems: "center",
        // paddingHorizontal: 15,
      }}
    >
      <View style={styles.header}>
        <Text style={styles.text}>Profile</Text>
      </View>
      <View style={styles.banner}>
        <MaterialCommunityIcons
          size={70}
          name="account-circle"
          color="#2e4850"
        />
        <View style={{marginLeft: 12}}>
        <Text style={styles.username}>{user?.username}</Text>
        <Text style={styles.label}>{user.email}</Text>
        <Text style={styles.label}>{user.phone}</Text>
        <Text style={styles.coinText}>Coins: {user.coins}</Text>

        </View>
      </View>

      {/* Coin Banner */}
      <View style={styles.coinBanner}>
        <FontAwesome5 name="coins" size={35} color="gold" />
        <View style={{ maxWidth: 250, marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 15,
              fontFamily: "Lato",
              color: "#fff",
              marginBottom: 7,
            }}
          >
            Kanaso ka karanta labarai masu yawa kuma masu kayatarwa?
          </Text>
          <Text
            style={{
              fontSize: 11,
              fontWeight: "600",
              fontFamily: "Lato",
              color: "#fff",
            }}
          >
            Zaka samu wannan dama ne idan kanada coins sosai, domin samun coins,
            shiga nan
          </Text>
          <TouchableOpacity style={styles.getCoinBtn}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Lato",
                color: "#fff",
              }}
            >
              Get Coins
            </Text>
            <FontAwesome5 name="coins" size={13} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Pressable
        style={{
          padding: 10,
          marginTop: 10,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row",
          borderRadius: 3,
          backgroundColor: "#c4c4c4",
          width: 120,
        }}
        onPress={() => setShow(!show)}
      >
        <Text style={styles.label}>Log Out</Text>
      </Pressable>
      {show ? (
        <View style={{ maxWidth: 300, marginTop: 7 }}>
          <Text style={{ fontFamily: "Lato", fontSize: 12 }}>
            {" "}
            Idan kayi log out, zaka fita daga wannan application, har sai ka
            sake sanya email da password dinka{" "}
          </Text>
          <Text
            style={{
              fontFamily: "Lato",
              color: "dodgerblue",
              marginVertical: 8,
              fontSize: 12
            }}
          >
            Ka amince?
          </Text>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Pressable style={styles.yes} onPress={()=> logout()}>
              <Text style={{ fontFamily: "Lato", color: "#2e4850", fontSize:12 }}>
                Eh, Log Out
              </Text>
              {loading ? (
                <ActivityIndicator
                  color="#2e4850"
                  size={10}
                  style={{ marginLeft: 10 }}
                />
              ) : (
                <Text></Text>
              )}
            </Pressable>

            <Pressable style={styles.no} onPress={()=> setShow(false)}>
              <Text style={{ fontFamily: "Lato", color: "#fff", fontSize:12 }}>
                Ok, Na Fasa
              </Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  coinBanner: {
    backgroundColor: "#2e4850",
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    // height: 160,
    width: "90%",
    // marginHorizontal: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#2e4850",
    paddingTop: 25,
    paddingBottom: 15,
    marginBottom: 5,
    paddingHorizontal: 13,
    width: "100%",
  },
  text: {
    color: "#fff",
    fontFamily: "Lato",
    fontSize: 20,
  },
  banner: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginVertical: 10,
    flexDirection: 'row',
    width: '90%'
  },
  username: {
    fontFamily: "Lato",
    fontSize: 14,
    color: "#2e4850",
  },
  label: {
    fontFamily: "Lato",
    fontSize: 12,
    color: "#2e4850",
  },
  coinText: {
    fontFamily: "Lato",
    fontSize: 12,
    color: "gold",
  },
  getCoinBtn: {
    backgroundColor: "gold",
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 5,
    
  },
  yes: {
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 135,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#2e4850",
    flexDirection: 'row'
  },
  no: {
    paddingHorizontal: 9,
    paddingVertical: 7,
    backgroundColor: "#2e4850",
    alignItems: "center",
    justifyContent: "center",
    width: 125,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#2e4850",
  },
});
