import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Tabs } from "expo-router";
import { useEffect } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  View,
  useColorScheme,
} from "react-native"; // Use React Native's useColorScheme

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colorScheme === "dark" ? "#fff" : "#000",
        tabBarStyle: {
          backgroundColor: colorScheme === "dark" ? "#000" : "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          // Add your tab options here
        }}
      />
      {/* Add other tab screens as needed */}
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
