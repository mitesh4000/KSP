import { router } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function WelcomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Welcome to Our App</Text>
        <Text style={styles.subtitle}>Your journey begins here!</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.navigate("/ExpenseReimbursementForm")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  innerContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 10 },
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#38454a",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: "#38454a",
    marginBottom: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#e34e25",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
