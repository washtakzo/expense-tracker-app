import { StyleSheet, Text, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../utils/colors";
import ModalCard from "./UI/ModalCard";
import CustomButton from "./CustomButton";

const deviceWidth = Dimensions.get("window").width;

const AddButton = () => {
  const [isModalVisible, setIsModalVisble] = React.useState(false);

  const showModal = () => setIsModalVisble(true);

  const closeModal = () => setIsModalVisble(false);

  return (
    <>
      <Pressable style={styles.button} onPress={showModal}>
        <Ionicons
          name="add"
          size={deviceWidth / 12}
          color={themeColors.textOnSecondary}
        />
      </Pressable>
      <ModalCard title="Add Expense" isVisible={isModalVisible}>
        <View style={styles.modalButtonsContainer}>
          <CustomButton
            onPress={closeModal}
            containerStyle={styles.cancelButton}
            textStyle={styles.cancelText}
          >
            Cancel
          </CustomButton>
          <CustomButton onPress={closeModal}>Add</CustomButton>
        </View>
      </ModalCard>
    </>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    paddingRight: deviceWidth / 42,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  cancelButton: {
    backgroundColor: "#ffffff0",
  },
  cancelText: {
    fontWeight: "normal",
  },
});
