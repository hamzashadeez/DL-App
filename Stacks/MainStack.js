import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import BottomNav from "./BottomNav";

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNav" component={BottomNav} />
    </Stack.Navigator>
  );
};

export default MainStack;
