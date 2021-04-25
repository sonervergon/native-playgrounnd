import * as React from "react";
import { SafeArea } from "@base/components";
import Axios from "axios";
import { StackNavigationOptions } from "@react-navigation/stack";
import {
  theme,
  ThemeProvider,
  Box,
  Clickable,
  ScrollView,
  Text,
  useTheme,
  Image,
} from "@base/emotion";

export const options: StackNavigationOptions = {
  headerShown: false,
};

const Item = () => {
  const theme = useTheme();
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
    <Clickable
      activeOpacity={0.75}
      mb={7}
      onPress={() => alert(`You pressed ${title?.title}`)}
      backgroundColor="white"
      borderRadius="xl"
      shadow="xs"
    >
      <Box>
        <Image
          resizeMode="cover"
          borderTopLeftRadius={8}
          style={{
            height: 170,
            borderTopLeftRadius: theme.radii.xl,
            borderTopRightRadius: theme.radii.xl,
          }}
          source={{
            uri: "https://source.unsplash.com/random",
          }}
        />
        <Box px={4} py={3}>
          <Text fontSize="3xl" fontWeight="bold" color="gray.800">
            {title && title.description}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {title && title.title}
          </Text>
          <Text
            py={5}
            color="gray.700"
            fontSize="lg"
            lineHeight="heading"
            fontWeight="medium"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Text>
          <Box flexDirection="row">
            <Image
              style={{
                height: 45,
                width: 45,
                borderRadius: theme.radii.full,
              }}
              source={{
                uri: "https://source.unsplash.com/random",
              }}
            />
            <Box ml={4}>
              <Text
                style={{ textDecorationLine: "underline" }}
                fontWeight="bold"
                fontSize="base"
                color="gray.700"
              >
                Soner Vergon
              </Text>
              <Text fontWeight="medium" fontSize="base" color="gray.600">
                Mar 10, 2021 . 4 min read
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Clickable>
  );
};

const Content = () => {
  return (
    <>
      <SafeArea>
        <ScrollView>
          <Box flex={1} px={5}>
            <Text fontWeight="bold" color="black" fontSize="4xl" py={6}>
              Blog posts today
            </Text>
            {Array.from(Array(7).keys()).map((d) => (
              <Item key={d} />
            ))}
          </Box>
        </ScrollView>
      </SafeArea>
    </>
  );
};

const Index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Content />
    </ThemeProvider>
  );
};

export const Component = Index;
