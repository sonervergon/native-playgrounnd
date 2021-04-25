import * as React from "react";
import { useNavigation } from "@react-navigation/native";
import Axios from "axios";
import { RefreshControl } from "react-native";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  SafeArea,
  ScrollView,
} from "@base/components";
import {
  StackNavigationOptions,
  createStackNavigator,
} from "@react-navigation/stack";
import { Card } from "../../../base/ui";
import { color } from "@base/tw";

export const options: StackNavigationOptions = {
  headerShown: false,
};
const Home = createStackNavigator();

function ModalScreen() {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Dismiss</Text>
      </TouchableOpacity>
    </View>
  );
}

const Item = () => {
  const [title, setTitle] = React.useState<{
    description: string;
    title: string;
  } | null>(null);
  React.useEffect(() => {
    Axios.get("https://random-words-api.vercel.app/word", {}).then((d) => {
      const data = d.data[0];
      setTitle({ description: data.definition, title: data.word });
    });
  }, []);
  return (
    <Card className="mb-10 rounded-xl bg-white">
      <TouchableHighlight
        activeOpacity={0.7}
        underlayColor={color("white")}
        className="rounded-xl"
        onPress={() => alert(`You pressed ${title ? title.description : ""}`)}
      >
        <View>
          <Image
            resizeMode="cover"
            className="rounded-t-xl h-44"
            source={{
              uri: "https://source.unsplash.com/random",
            }}
          />
          <View className="px-4 py-3">
            <Text className="text-3xl font-bold text-gray-600">
              {title && title.description}
            </Text>
            <Text className="text-sm text-gray-400">
              {title && title.title}
            </Text>
            <Text className="py-5 text-gray-600 text-lg font-medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </Text>
            <View className="flex-row">
              <Image
                height={45}
                width={45}
                className="rounded-full h-12 w-12"
                source={{
                  uri: "https://source.unsplash.com/random",
                }}
              />
              <View className="ml-4">
                <Text className="font-bold text-base text-gray-700 underline">
                  Soner Vergon
                </Text>
                <Text className="font-medium text-base text-gray-500">
                  Mar 10, 2021 . 4 min read
                </Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </Card>
  );
};

const Index = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const handle = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 2000);
  }, []);
  return (
    <SafeArea className="flex-1 pt-6">
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handle} />
        }
      >
        <View className="flex-1 p-6">
          <Text className="font-bold text-4xl pt-5 pb-11">
            Blog posts today
          </Text>
          {!refreshing &&
            Array.from(Array(7).keys()).map((d) => <Item key={d} />)}
        </View>
      </ScrollView>
    </SafeArea>
  );
};

export const Component = () => {
  const navigation = useNavigation();
  return (
    <Home.Navigator>
      <Home.Screen
        options={{ headerShown: false }}
        name="index"
        component={Index}
      />
      <Home.Screen name="Settings" component={ModalScreen} />
    </Home.Navigator>
  );
};
