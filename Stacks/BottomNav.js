import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import HomeStack from "./HomeStack";
import Coins from "../Screens/Coins";

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  inactiveTintColor: "#ddd",
  activeTintColor: "#2e4850",
  style: {
    backgroundColor: "#fff",
    paddingBottom: 3,
    paddingTop: 3,
  },
};

const BottomNav = () => {
  return (
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Coins" component={Coins}
        options={{
          tabBarLabel: "Coins",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="coins"  color={color} size={20} />
          ),
        }}/>
      <Tab.Screen name="Profile" component={Profile}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}/>
    </Tab.Navigator>
  );
};

export default BottomNav;
