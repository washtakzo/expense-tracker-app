import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../utils/colors";

const deviceWidth = Dimensions.get("window").width;

const AddButton = () => {
  return (
    <View style={styles.button}>
      <Ionicons
        name="add"
        size={deviceWidth / 12}
        color={themeColors.textOnSecondary}
      />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    paddingRight: deviceWidth / 42,
  },
});
