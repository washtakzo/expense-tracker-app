import { StyleSheet, View, Dimensions, Pressable } from "react-native";
import React, { useState } from "react";
import { themeColors } from "../utils/colors";
import CustomButton from "./CustomButton";
import { Ionicons } from "@expo/vector-icons";
import ModalCard from "./UI/ModalCard";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import { Expense, Navigation } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
import { deleteExpense } from "../utils/http";
import LoadingOverlay from "./UI/LoadingOverlay";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
  expense?: Expense;
};

const EditExpenseModal = ({ isVisible, closeModal, expense }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  const navigation = useNavigation<Navigation>();

  const deleteExpenseHandler = async () => {
    setIsLoading(true);
    try {
      await deleteExpense(expense!.id);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);

    dispatch(expenseActions.removeExpense({ expenseId: expense!.id }));

    closeModal();
  };

  const updateHandler = () => {
    closeModal();
    navigation.navigate({
      name: "ManageExpenseScreen",
      params: { expense: expense },
    });
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  return (
    <ModalCard isVisible={isVisible} title="Edit Expense">
      <View style={styles.userChoicesContainer}>
        <View style={styles.buttonsContainer}>
          <CustomButton
            containerStyle={styles.cancelButtonContainer}
            textStyle={styles.cancelButtonText}
            onPress={closeModal}
          >
            Cancel
          </CustomButton>
          <CustomButton onPress={updateHandler}>Update</CustomButton>
        </View>
        <View style={styles.divider}></View>
        <Pressable onPress={deleteExpenseHandler}>
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
