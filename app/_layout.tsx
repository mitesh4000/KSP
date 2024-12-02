import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { router, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useRef } from "react";

import CustomHeader from "@/components/CustomHeader";
import Sidebar from "@/components/Sidebar";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Animated } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useAppStore } from "./utils/store";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const { toggleSidebar, isSidebarOpen } = useAppStore();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  const sidebarAnimation = useRef(new Animated.Value(0)).current;

  const setSidebar = () => {
    const toValue = isSidebarOpen ? 0 : 1;
    Animated.timing(sidebarAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    toggleSidebar();
  };

  const handleNotificationPress = () => {
    console.log("Notification pressed");
  };

  const handleProfilePress = () => {
    router.navigate("/Profile");
  };

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView>
        <CustomHeader title={"root"} onMenuPress={setSidebar} />

        <Stack>
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="Profile" options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
          <Stack.Screen
            name="Reimbursements"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ExpenseReimbursementForm"
            options={{ headerShown: false }}
          />

          <Stack.Screen name="TaskListing" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />

        <Sidebar
          isOpen={isSidebarOpen}
          onClose={setSidebar}
          animatedValue={sidebarAnimation}
        />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
