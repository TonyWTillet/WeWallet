import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { ActivityIndicator, View } from "react-native";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import LoginScreen from "./app/screens/LoginScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import * as Google from "expo-auth-session/providers/google";
import Navigation from "./app/navigation/Navigation";

SplashScreen.preventAutoHideAsync();

function Main() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return user ? <DashboardScreen /> : <LoginScreen />;
}

export default function App() {
  
  const [fontsLoaded] = useFonts({
    "Helvetica-Bold": require("./app/assets/fonts/HelveticaNeueBold.otf"),
    "Helvetica-Regular": require("./app/assets/fonts/HelveticaNeueRoman.otf"),
    "SpaceMono-Regular": require("./app/assets/fonts/SpaceMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
