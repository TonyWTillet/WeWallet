import { StyleSheet } from "react-native";

export const COLORS = {
  primary: "#002A00",        // vert foncé principal
  primaryLight: "#71D561",   // vert plus clair 
  lightGrey: "#F1F1F3",
  mediumGrey: "#E8E8E8",
  darkText: "#1A1A1A",
  mutedText: "#888888",
  white: "#FFFFFF",
  inputBorder: "#002A00",
  inputBackground: "#71D561",
  lightRed: '#ED7437',
  darkRed: '#7E2C03'
};

export const FONTS = {
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Helvetica-Bold",
    color: COLORS.darkText,
  },
  subtitle: {
    fontSize: 16,
    fontFamily: "Helvetica-Regular",
    color: COLORS.mutedText,
  },
  label: {
    fontSize: 14,
    fontFamily: "Helvetica-Regular",
    color: COLORS.darkText,
  },
};

export const SHADOW = {
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 2,
};

export const BaseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingTop: 70,
    paddingBottom: 50,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    ...SHADOW,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: COLORS.primaryLight,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: "Helvetica-Bold",
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.inputBorder,
    backgroundColor: COLORS.inputBackground,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    fontFamily: "Helvetica-Regular",
    color: COLORS.darkText,
  },
});
