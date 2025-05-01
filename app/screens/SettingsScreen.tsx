import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { BaseStyles, COLORS, FONTS } from "../styles/BaseStyles";
import BottomMenu from "../components/BottomMenu";
import { Ionicons, MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { db, auth } from "../firebase/config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import UpdateGoalModal from "../components/UpdateGoalModal";
import { useState, useEffect } from "react";
import AddLabelModal from "../components/LabelActions/AddLabelModal";


export default function SettingsScreen() {

  // Add modal visible state
  const [modalVisible, setModalVisible] = useState(false);

  // Add goal state
  const [goal, setGoal] = useState<number>(0);

  // Fetch goal from Firebase
  useEffect(() => {
    const fetchGoal = async () => {
      try {
        const docRef = doc(db, "users", auth.currentUser?.uid || "");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data?.monthlyGoal) {
            setGoal(data.monthlyGoal);
          }
        }
      } catch (err) {
        console.error("Erreur de chargement de l’objectif :", err);
      }
    };
  
    fetchGoal();
  }, []);
  
  // Fetch labels from Firebase
  useEffect(() => {
    const loadLabels = async () => {
      const userRef = doc(db, "users", auth.currentUser?.uid || "");
      const snap = await getDoc(userRef);
  
      const defaultLabels = [
          { name: "Courses", emoji: "🛒" },
          { name: "Maison", emoji: "🏠" },
          { name: "Snack", emoji: "🍕" },
          { name: "Sorties", emoji: "🍻" },
          { name: "Autres", emoji: "⚙️" },
      ];
  
      if (!snap.exists() || !snap.data()?.labels) {
        await setDoc(userRef, { labels: defaultLabels }, { merge: true });
        setLabels(defaultLabels);
      } else {
        setLabels(snap.data()?.labels);
      }
    };
  
    loadLabels();
  }, []);

  // Add labels state
  const [labels, setLabels] = useState<{ name: string; emoji: string }[]>([]);
  // Add modal visible state
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);


  return (
    <View style={BaseStyles.container}>
      <BottomMenu />
      {/* Ligne de l'objectif */}
      <View style={styles.row}>
        <View style={styles.objectifBox}>
          <Text style={styles.objectifLabel}>objectif mensuel</Text>
          <Text style={styles.objectifPrice}>{goal}€</Text>
        </View>
        <TouchableOpacity style={styles.modifyButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.modifyButtonText}>Modifier l’objectif</Text>
        </TouchableOpacity>
        <UpdateGoalModal visible={modalVisible} onClose={() => setModalVisible(false)} onGoalUpdated={setGoal} />

      </View>

      {/* Ligne de boutons + liste */}
      <View style={styles.row}>
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.sideButton}>
            <Text style={styles.sideButtonText}>Supprimer label</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sideButtonSecondary} onPress={() => setShowAddModal(true)}>
            <Text style={styles.sideButtonSecondaryText}>Ajouter label</Text>
          </TouchableOpacity>
          <AddLabelModal
            visible={showAddModal}
            onClose={() => setShowAddModal(false)}
            onLabelAdded={(newLabel) => setLabels((prev) => [...prev, newLabel])}
          />

        </View>

        <View style={styles.labelBox}>
          {labels.map((label, index) => (
            <View key={index} style={[styles.labelItem, index === labels.length - 1 ? styles.labelItemLast : {}]}>
              <Text style={{ fontSize: 24 }}>{label.emoji}</Text>
              <Text style={FONTS.label}>{label.name}</Text>
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
    padding: 10,
    borderRadius: 8,
    flex: 2,
    marginRight: 10,
  },
  objectifLabel: {
    fontSize: 20,
    color: COLORS.darkText,
    marginBottom: 0,
  },
  objectifPrice: {
    fontSize: 35,
    fontWeight: "bold",
    color: COLORS.darkText,
    marginTop: 0,   
    lineHeight: 35,
    letterSpacing: 0,
  },
  modifyButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginLeft: 10,
  },
  modifyButtonText: {
    color: COLORS.primaryLight,
    textAlign: "center",
    fontSize: 20,
  },
  actionButtons: {
    justifyContent: "flex-start",
    marginRight: 20,
  },
  sideButton: {
    backgroundColor: COLORS.primary,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    width: 120,
    height: "auto",
  },
  sideButtonText: {
    color: COLORS.primaryLight,
    fontSize: 20,
    textAlign: "left",
  },
  sideButtonSecondary: {
    backgroundColor: COLORS.primaryLight,
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 120,
    height: "auto",
  },
  sideButtonSecondaryText: {
    color: COLORS.darkText,
    fontSize: 20,
    textAlign: "left",
  },
  labelBox: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    height: 'auto',
  },
  labelItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    gap: 10,
  },
  labelItemLast: {
    marginBottom: 0,
  },
  labelIcon: {
    width: 24,
    height: 24,
  },
});
