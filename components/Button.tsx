import { StyleSheet, Text, View, Pressable, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  onPress?: () => void;
  containerStyle?: any; //FIXME:
  textStyle?: any; //FIXME:
  children: any; //FIXME:
};

export const Button = ({
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

// export default Button;

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
