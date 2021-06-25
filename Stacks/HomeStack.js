import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomNav";
import Home from "../Screens/Home";
import BookDetail from "../Screens/BookDetail";
import NoNetwork from "../Screens/NoNetwork";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={BookDetail} />
      <Stack.Screen name="No Network" component={NoNetwork} />
    </Stack.Navigator>
  );
};

export default HomeStack;
