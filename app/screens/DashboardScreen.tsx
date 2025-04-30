import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { auth } from "../firebase/config";
import { BaseStyles, COLORS, FONTS } from "../styles/BaseStyles";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import BottomMenu from "../components/BottomMenu";

export default function DashboardScreen() {
  const navigation = useNavigation();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch (error) {
      Alert.alert("Erreur", "Échec de la déconnexion");
    }
  };

  return (
    <View style={styles.container}>
        <Text style={FONTS.title}>Bienvenue sur WeWallet 🏠</Text>
        <BottomMenu />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingBottom: 80, // pour ne pas cacher le contenu avec le menu
  },
});
