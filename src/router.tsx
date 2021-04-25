import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home as HomeIcon, Cog } from "icons";
import * as Home from "./pages/home";
import * as Emotion from "./pages/emotion";
import { Text } from "@base/components";
import { color } from "@base/tw";

export const Root = createBottomTabNavigator();
export const Main = createStackNavigator();

const App = () => {
  return (
    <Main.Navigator>
      <Main.Screen
        options={Home.options}
        name="Home"
        component={Home.Component}
      />
    </Main.Navigator>
  );
};

const ICON_MAP = {
  App: HomeIcon,
  Emotion: Cog,
};

type Routes = "App" | "Emotion";

export function Router() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Root.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: ({ color }) => {
            return (
              <Text className="pb-1 text-xs font-medium" style={{ color }}>
                {route.name}
              </Text>
            );
          },
          tabBarIcon: ({ focused, color, size }) => {
            const C = ICON_MAP[route.name as Routes];
            return (
              <C width={35} height={35} style={{ marginTop: 5 }} fill={color} />
            );
          },
        })}
        tabBarOptions={{
          inactiveTintColor: color("gray-400"),
          activeBackgroundColor: undefined,
          activeTintColor: color("gray-900"),
          style: {
            height: Platform.OS === "ios" ? 90 : 60,
            alignItems: "center",
          },
        }}
      >
        <Root.Screen name="App" component={App} />
        <Root.Screen name="Emotion" component={Emotion.Component} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
