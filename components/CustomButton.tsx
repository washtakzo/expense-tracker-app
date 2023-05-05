import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import {
  ViewStyle,
  TextStyle,
} from "react-native/Libraries/StyleSheet/StyleSheetTypes";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  onPress?: () => void;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  children: React.ReactNode;
};

const CustomButton = ({
  onPress,
  containerStyle,
  textStyle,
  children,
}: Props) => {
  return (
    <Pressable style={[styles.button, containerStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, textStyle]}>{children}</Text>
    </Pressable>
  );
};

export default CustomButton;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  button: {
    marginHorizontal: deviceWidth / 24,
    backgroundColor: themeColors.secondaryDark,
    paddingHorizontal: deviceWidth / 14,
    paddingVertical: deviceWidth / 64,
    borderRadius: deviceWidth / 92,
  },
  buttonText: {
    fontWeight: "bold",
    color: themeColors.textOnSecondary,
  },
});
