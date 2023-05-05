import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";
import { Button as ModalButton } from "./Button";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const EditExpenseModal = ({ isVisible, closeModal }: Props) => {
  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.emptySpace}></View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Edit Expense</Text>
        </View>
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
      </View>
    </Modal>
  );
};

export default EditExpenseModal;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modal: {
    flex: 100,
  },
  emptySpace: {
    flex: 10,
  },
  container: {
    flex: 80,
    backgroundColor: themeColors.primaryDark,
    borderTopLeftRadius: deviceWidth / 36,
    borderTopRightRadius: deviceWidth / 36,
  },
  titleContainer: {
    backgroundColor: themeColors.secondaryDark,
    borderTopLeftRadius: deviceWidth / 36,
    borderTopRightRadius: deviceWidth / 36,
    justifyContent: "center",
    alignItems: "center",
    height: deviceWidth / 12,
  },
  title: {
    color: themeColors.textOnSecondary,
    fontWeight: "bold",
  },
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
