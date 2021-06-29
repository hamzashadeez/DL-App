import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, BackHandler } from "react-native";
import {  FontAwesome5 } from "@expo/vector-icons";
import { useRecoilState, useRecoilValue } from "recoil";
import {userState} from '../Recoil/Atoms'

const Coins = ({navigation}) => {
    const [user, setUser] = useRecoilState(userState);

    const backAction = () => {
      navigation.navigate("Home")
      return true;
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.text}>Coins</Text>
      </View>
      <View style={styles.banner}>
        <FontAwesome5 name="coins" color="#2e4850" size={70} />
        <Text style={{fontFamily: "Lato", fontSize: 16, marginVertical: 14, color: '#2e4850'}}>A halin yanzu coins dinka saura:</Text>
        <Text style={{fontFamily: "Lato", fontSize: 35, color: "#2e4850", fontWeight: "bold", marginBottom: 50}}>{user.coins}</Text>
        {/* Ads */}
        <Text style={{paddingHorizontal: 10}}>Coins zasu taimakeka wajen samun damar bude kowane labari da kakeso</Text>
        <Text style={{marginTop: 30, fontFamily: "Lato", marginBottom: 5, paddingHorizontal: 15, textAlign: "center"}}>Domin samun Coins ka kalli Video Reward Ads</Text>
        <TouchableOpacity style={styles.btn}>
            <Text style={{color: "#fff", fontFamily: "Lato", fontSize: 15}}> Get Free Coins</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Coins;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#2e4850",
    paddingTop: 25,
    paddingBottom: 15,
    marginBottom: 5,
    paddingHorizontal: 13,
  },
  text: {
    color: "#fff",
    fontFamily: "Lato",
    fontSize: 20,
  },
  banner:{
      alignItems: "center",
      paddingTop: 20,
      flex: 1,
      paddingHorizontal: 15
      
  },
  btn:{
      paddingVertical: 10,
      paddingHorizontal: 15,
      backgroundColor: "#2e4850",
      borderRadius: 5, 
      alignItems: 'center',
      justifyContent: 'center',
      width: 200
  }
});
