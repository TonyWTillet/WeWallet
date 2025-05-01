import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { db, auth } from "../../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { COLORS, FONTS } from "../../styles/BaseStyles";

type Props = {
  visible: boolean;
  onClose: () => void;
  onLabelAdded: (label: { name: string; icon: string }) => void;
};

const iconOptions = [
  { name: "cart-outline", lib: "Ionicons" },
  { name: "home-outline", lib: "Ionicons" },
  { name: "food-outline", lib: "MaterialCommunityIcons" },
  { name: "wine-outline", lib: "Ionicons" },
  { name: "dots-three-horizontal", lib: "Entypo" },
];

export default function AddLabelModal({ visible, onClose, onLabelAdded }: Props) {
  const [labelName, setLabelName] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleAdd = async () => {
    if (!labelName.trim()) return;

    const newLabel = {
        name: labelName.trim(),
        emoji: emoji.trim(), 
    };
      
    const userRef = doc(db, "users", auth.currentUser!.uid);
    const docSnap = await getDoc(userRef);
    const currentLabels = docSnap.data()?.labels || [];

    const updatedLabels = [...currentLabels, newLabel];

    await setDoc(userRef, { labels: updatedLabels }, { merge: true });

    onLabelAdded(newLabel); // MAJ locale
    setLabelName("");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={FONTS.title}>Ajouter un label</Text>

          <TextInput
            placeholder="Nom du label"
            value={labelName}
            onChangeText={setLabelName}
            style={styles.input}
          />

          <Text style={FONTS.subtitle}>Choisir une icône :</Text>
          <TextInput
            placeholder="Emoji (ex: 💼)"
            value={emoji}
            onChangeText={setEmoji}
            style={styles.input}
            />

          <TouchableOpacity style={styles.button} onPress={handleAdd}>
            <Text style={styles.buttonText}>Ajouter</Text>
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
  modal: {
    backgroundColor: "#fff",
    padding: 25,
    borderRadius: 12,
    width: "90%",
  },
  input: {
    borderBottomWidth: 1,
    padding: 10,
    marginVertical: 10,
    fontSize: 18,
  },
  iconButton: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: "#eee",
    borderRadius: 8,
  },
  selected: {
    backgroundColor: COLORS.primaryLight,
  },
  button: {
    marginTop: 20,
    backgroundColor: COLORS.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  cancel: {
    textAlign: "center",
    color: "#999",
    marginTop: 12,
  },
});
