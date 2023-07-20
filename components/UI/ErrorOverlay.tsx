import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../../utils/colors";
import CustomButton from "../CustomButton";

type Props = {
  message: string;
  onConfirm: () => void;
};

const ErrorOverlay = ({ message, onConfirm }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.title]}>An error occured !</Text>
      <Text style={styles.text}>{message}</Text>
      <CustomButton onPress={onConfirm}>Okay</CustomButton>
    </View>
  );
};

export default ErrorOverlay;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: themeColors.primaryDark,
  },
  text: {
    alignItems: "center",
    justifyContent: "center",
    color: themeColors.textOnPrimary,
    marginBottom: deviceWidth / 28,
  },
  title: {
    fontSize: deviceWidth / 16,
    fontWeight: "bold",
  },
});
