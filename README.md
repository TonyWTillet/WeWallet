# 💸 WeWallet

**WeWallet** est une application mobile moderne développée avec **React Native (Expo)** qui permet aux utilisateurs – seuls ou en couple – de suivre **leurs dépenses quotidiennes**, **leurs abonnements**, et de **visualiser leur budget mensuel** grâce à une interface claire, intuitive et stylisée.

---

## 📱 Aperçu de l'application

Interface élégante et minimaliste pensée pour une utilisation fluide au quotidien.

---

## ⚙️ Fonctionnalités principales

- 🔐 Authentification sécurisée par **e-mail et mot de passe** (Firebase)
- 🧾 Gestion et visualisation des **transactions**
- 📅 Affichage et suivi des **abonnements mensuels**
- 🎯 Définition et modification d'un **objectif budgétaire mensuel**
- 🏷️ Ajout et suppression de **labels personnalisés**
- 📊 Interface responsive avec **menu de navigation bas**
- ☁️ Backend simple et scalable via **Firebase**

---

## 🛠️ Stack technique

| Technologie             | Description                                           |
|-------------------------|-------------------------------------------------------|
| **React Native + Expo** | Développement mobile multi-plateforme                |
| **Firebase Auth**       | Authentification sécurisée                           |
| **React Navigation**    | Navigation entre les écrans                          |
| **TypeScript**          | Sécurité de typage et maintenabilité du code         |
| **@expo/vector-icons**  | Icônes modernes et stylées                           |

---

## 🔧 Installation & Lancement

```bash
# 1. Cloner le projet
git clone https://github.com/tonytillet/wewallet.git
cd wewallet

# 2. Installer les dépendances
npm install

# 3. Lancer Expo
npx expo start
```

📱 **Scanne le QR code avec Expo Go pour tester sur ton smartphone.**

---

## 🔑 Configuration Firebase

1. Crée un projet Firebase sur https://firebase.google.com
2. Active l'authentification via e-mail/mot de passe
3. Récupère les clés du projet (apiKey, authDomain, etc.)
4. Mets-les dans `.env` :

```ts
export const firebaseConfig = {
  apiKey: "VOTRE_CLE_API",
  authDomain: "votre-app.firebaseapp.com",
  projectId: "votre-id",
  storageBucket: "votre-app.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "1:XXXXXX:web:YYYYY"
};
```

---

## 🧠 À propos du projet

WeWallet a été imaginé pour répondre à un besoin réel : gérer ses dépenses simplement. Il m'a permis de :

- Concevoir une application complète avec navigation et persistance
- Approfondir mon usage de Firebase (Authentification, Firestore Database)
- Créer des composants réutilisables et des interfaces modulaires
- Penser une expérience utilisateur mobile fluide

---

## 🎯 Prochaines évolutions

- 🔄 Partage et synchronisation avec un partenaire
- 📊 Graphiques de dépenses par catégorie
- ☁️ Mode hors-ligne avec synchronisation
- 💬 Ajout de notifications ou rappels

---

## 🙋‍♂️ Auteur

**Tony Tillet**  
Développeur Full Stack / Mobile  

---

## 📄 Licence

Projet à but éducatif — utilisation personnelle et non commerciale autorisée.
