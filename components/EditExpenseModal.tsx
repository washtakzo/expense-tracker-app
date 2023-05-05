import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";
import { Button as ModalButton } from "./Button";
import { Ionicons } from "@expo/vector-icons";
import ModalCard from "./UI/ModalCard";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const EditExpenseModal = ({ isVisible, closeModal }: Props) => {
  return (
    <ModalCard isVisible={isVisible} title="Edit Expense">
      <View style={styles.userChoicesContainer}>
        <View style={styles.buttonsContainer}>
          <ModalButton
            containerStyle={styles.cancelButtonContainer}
            textStyle={styles.cancelButtonText}
            onPress={closeModal}
          >
            Cancel
          </ModalButton>
          <ModalButton onPress={closeModal}>Update</ModalButton>
        </View>
        <View style={styles.divider}></View>
        <Pressable onPress={closeModal}>
          <Ionicons
            name="trash"
            size={deviceWidth / 12}
            color={themeColors.thirdDark}
          />
        </Pressable>
      </View>
    </ModalCard>
  );
};

export default EditExpenseModal;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  userChoicesContainer: {
    paddingVertical: deviceWidth / 24,
    paddingHorizontal: deviceWidth / 12,
    alignItems: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancelButtonContainer: {
    backgroundColor: "#ffeeff0",
  },
  cancelButtonText: {
    fontWeight: "normal",
  },
  divider: {
    backgroundColor: themeColors.textOnPrimary,
    height: deviceWidth / 450,
    width: "100%",
    marginVertical: deviceWidth / 24,
  },
});
