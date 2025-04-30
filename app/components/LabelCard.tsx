// app/components/LabelCard.tsx
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function LabelCard({ label, icon }: { label: string; icon: any }) {
  return (
    <View style={styles.row}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
});
