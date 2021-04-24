import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "@base/components";
import { StackNavigationOptions } from "@react-navigation/stack";

export const options: StackNavigationOptions = {
  headerShown: false,
};

const Index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-base">This is the test screen!</Text>
      <TouchableOpacity className="p-2.5 bg-blue-700">
        <Text>Boilerplate</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Component = Index;
