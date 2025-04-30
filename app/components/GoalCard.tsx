// app/components/GoalCard.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../styles/BaseStyles";

export default function GoalCard({ amount = 300, onEdit }: { amount?: number; onEdit: () => void }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={FONTS.subtitle}>objectif mensuel</Text>
        <Text style={styles.amount}>{amount}€</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onEdit}>
        <Text style={styles.buttonText}>Modifier l'objectif</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: 8,
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  amount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
  },
  button: {
    backgroundColor: "#1c4c1c",
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 12,
  },
});
