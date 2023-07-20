import { StyleSheet, ActivityIndicator, View } from "react-native";
import React from "react";
import { themeColors } from "../../utils/colors";

const LoadingOverlay = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeColors.primaryDark,
  },
});
