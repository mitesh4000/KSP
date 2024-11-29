import React from "react";
import { StyleSheet, View } from "react-native";

const Tl = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: "gray",
    marginVertical: 5,
  },
});

export default Tl;
