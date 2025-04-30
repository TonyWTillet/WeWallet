import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BaseStyles, COLORS, FONTS } from "../styles/BaseStyles";
import { DarkTheme } from "@react-navigation/native";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "SignUp">;

type Props = {
  navigation: SignUpScreenNavigationProp;
};

export default function SignUpScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("✅ Compte créé avec succès");
      navigation.replace("Dashboard");
    } catch (err: any) {
      console.error("Erreur d'inscription:", err.message);
      setError("Impossible de créer le compte. Veuillez réessayer.");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={60}
      >
        <ScrollView contentContainerStyle={BaseStyles.container}>
          <Image source={require("../assets/images/icon.png")} style={styles.logo} />
          <Text style={FONTS.title}>Créer un compte</Text>
          <Text style={FONTS.subtitle}>Entrez votre email et mot de passe</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkText}
            style={[BaseStyles.input, { marginTop: 30 }]
            }
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
          />
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor={COLORS.darkText}
            style={[BaseStyles.input, { marginTop: 20 }]}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={[BaseStyles.button, { marginTop: 30 }]} onPress={handleSignUp}>
            <Text style={BaseStyles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Vous avez déjà un compte ? Se connecter</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: 50,
    marginBottom: 20,
    alignSelf: "center",
  },
  error: {
    color: "red",
    marginBottom: 12,
    textAlign: "center",
  },
  link: {
    textAlign: "center",
    color: COLORS.darkText,
    fontSize: 16,
    fontFamily: "Helvetica-Regular",
  },
});
