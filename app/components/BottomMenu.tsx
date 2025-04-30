import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../firebase/config";
import { COLORS } from "../styles/BaseStyles";

export default function BottomMenu() {
  const navigation = useNavigation<any>();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigation.reset({ index: 0, routes: [{ name: "Login" }] });
    } catch {
      // log or toast
    }
  };

  return (
    <View style={styles.menuBar}>

    <TouchableOpacity onPress={() => navigation.navigate("Calendar")}>
        <Ionicons name="calendar" size={28} color={COLORS.primaryLight} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.mainIcon} onPress={() => navigation.navigate("Dashboard")}>
        <Ionicons name="wallet" size={24} color={COLORS.primary} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
        <Ionicons name="settings" size={24} color={COLORS.primaryLight} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuBar: {
    position: "absolute",
    bottom: 30,
    left: "25%",
    right: "25%",
    backgroundColor: "#002A00",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 1000,
  },
  mainIcon: {
    backgroundColor: COLORS.primaryLight,
    padding: 10,
    borderRadius: 50,
    marginHorizontal: 10,
  },
});
