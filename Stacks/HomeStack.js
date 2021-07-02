import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import BookDetail from "../Screens/BookDetail";
import NoNetwork from "../Screens/NoNetwork";
import Chapters from "../Screens/Chapters";
import Chat from "../Screens/Chat";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={BookDetail} />
      <Stack.Screen name="Chapters" component={Chapters} />
      {/* <Stack.Screen name="Chat" component={Chat} /> */}
      <Stack.Screen name="No Network" component={NoNetwork} />
    </Stack.Navigator>
  );
};

export default HomeStack;
