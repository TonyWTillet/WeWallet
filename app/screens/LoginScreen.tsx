import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BaseStyles, COLORS, FONTS } from "../styles/BaseStyles";

type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Dashboard: undefined;
};

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("✅ Connexion avec email réussie");
      navigation.replace("Dashboard");
    } catch (err: any) {
      console.error("Erreur de connexion:", err.message);
      setError("Email ou mot de passe invalide");
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
          <Text style={FONTS.title}>Bienvenue sur WeWallet 👋</Text>
          <Text style={FONTS.subtitle}>Connexion avec votre e-mail</Text>

          <TextInput
            placeholder="Email"
            placeholderTextColor={COLORS.darkText}
            style={[BaseStyles.input, { marginTop: 30 }]}
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

          <TouchableOpacity style={[BaseStyles.button, { marginTop: 30 }]} onPress={handleLogin}>
            <Text style={BaseStyles.buttonText}>Se connecter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.link}>Créer un compte</Text>
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
