import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomNav";
import Chat from "../Screens/Chat";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default MainStack;
