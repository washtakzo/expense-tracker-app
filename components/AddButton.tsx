import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../utils/colors";
import ModalCard from "./UI/ModalCard";
import CustomButton from "./CustomButton";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";

const deviceWidth = Dimensions.get("window").width;

const AddButton = () => {
  const [isModalVisible, setIsModalVisble] = React.useState(false);

  const dispatch = useDispatch();

  const showModal = () => setIsModalVisble(true);

  const closeModal = () => setIsModalVisble(false);

  const addExpense = () => {
    //FIXME: Dummy function
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const currentDay = currentDate.getDate();

    dispatch(
      expenseActions.addExpenses({
        newExpense: {
          id: (22 * Math.random()).toString(),
          title: "test45",
          date: `${currentYear}-${currentMonth}-${currentDay}`,
          amount: "775",
        },
      })
    );

    closeModal();
  };

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
          <CustomButton onPress={addExpense}>Add</CustomButton>
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
