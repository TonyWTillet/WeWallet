import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BaseStyles, COLORS, FONTS } from "../styles/BaseStyles";
import BottomMenu from "../components/BottomMenu";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

export default function SettingsScreen() {

    const labelIcons: { [key: string]: React.ReactNode } = {
        Courses: <Ionicons name="cart-outline" size={24} color="#000" />,
        Maison: <Ionicons name="home-outline" size={24} color="#000" />,
        Snack: <MaterialCommunityIcons name="food-outline" size={24} color="#000" />,
        Sorties: <Ionicons name="wine-outline" size={24} color="#000" />,
        Autres: <Entypo name="dots-three-horizontal" size={24} color="#000" />,
    };

    const labels = ["Courses", "Maison", "Snack", "Sorties", "Autres"];

  return (
    <View style={BaseStyles.container}>
      <BottomMenu />
      {/* Ligne de l'objectif */}
      <View style={styles.row}>
        <View style={styles.objectifBox}>
          <Text style={styles.objectifLabel}>objectif mensuel</Text>
          <Text style={styles.objectifPrice}>300€</Text>
        </View>
        <TouchableOpacity style={styles.modifyButton}>
          <Text style={styles.modifyButtonText}>Modifier l’objectif</Text>
        </TouchableOpacity>
      </View>

      {/* Ligne de boutons + liste */}
      <View style={styles.row}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.sideButton}>
            <Text style={styles.sideButtonText}>Supprimer label</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideButton}>
            <Text style={styles.sideButtonText}>Ajouter label</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.labelBox}>
          {["Courses", "Maison", "Snack", "Sorties", "Autres"].map((label, index) => (
            <View key={index} style={styles.labelItem}>
              {labelIcons[label]}
              <Text style={FONTS.body}>{label}</Text>
            </View>
          ))}
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  objectifBox: {
    backgroundColor: COLORS.primaryLight,
    padding: 15,
    borderRadius: 8,
    flex: 1,
    marginRight: 10,
  },
  objectifLabel: {
    fontSize: 14,
    color: "#000",
    fontWeight: "500",
  },
  objectifPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
  },
  modifyButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  modifyButtonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  actionButtons: {
    justifyContent: "space-between",
    marginRight: 10,
  },
  sideButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 60,
  },
  sideButtonText: {
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
  labelBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
  },
  labelItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  labelIcon: {
    width: 24,
    height: 24,
  },
});
