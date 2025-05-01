// app/components/UpdateGoalModal.tsx
import React, { useEffect, useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS, FONTS } from "../styles/BaseStyles";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { auth } from "../firebase/config";

type Props = {
  visible: boolean;
  onClose: () => void;
  onGoalUpdated: (goal: number) => void;
};

export default function UpdateGoalModal({ visible, onClose, onGoalUpdated }: Props) {

    // Add a state to store the new goal
    const [newGoal, setNewGoal] = useState("");

    const handleSave = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const goalValue = parseFloat(newGoal);
    if (isNaN(goalValue)) return;

    try {
        await setDoc(doc(db, "users", user.uid), {
        monthlyGoal: goalValue
        }, { merge: true });
        onGoalUpdated(Number(newGoal));
        onClose();
    } catch (error) {
        console.error("Erreur lors de l'enregistrement :", error);
    }
    };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={FONTS.title}>Modifier l’objectif (€)</Text>
          <TextInput
            keyboardType="numeric"
            value={newGoal}
            onChangeText={setNewGoal}
            placeholder="ex: 300"
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleSave}>
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={onClose}>
            <Text style={styles.cancel}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: "100%",
    fontSize: 20,
    marginVertical: 20,
    padding: 5,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.primaryLight,
    fontSize: 18,
  },
  cancel: {
    marginTop: 15,
    color: "#888",
  },
});
