import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import { dateToFormattedString } from "../utils/functions";
import { useNavigation } from "@react-navigation/native";
import { Navigation as NavigationType } from "../utils/types";

const AddExpenseScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationType>();

  const [title, setTitle] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const onChangeTitle = (enteredText: string) => {
    setTitle(enteredText);
  };

  const onChangeAmount = (enteredText: string) => {
    setAmount(enteredText);
  };

  const validateHandler = () => {
    const todayDate = new Date();
    const formattedDate = dateToFormattedString(todayDate);

    dispatch(
      expenseActions.addExpenses({
        newExpense: {
          id: todayDate.toString(), //date a la seconde près
          title: title,
          amount: amount,
          date: formattedDate,
        },
      })
    );

    navigation.goBack();
  };

  return (
    <View style={styles.screen}>
      <Text>AddExpenseScreenddd</Text>
      <TextInput
        style={styles.titleInput}
        value={title}
        onChangeText={onChangeTitle}
        placeholder="Enter the expense Title"
      />
      <TextInput
        style={styles.titleInput}
        value={amount}
        onChangeText={onChangeAmount}
        placeholder="Enter the expense Amount"
      />
      <CustomButton
        containerStyle={{ backgroundColor: themeColors.thirdDark }}
        textStyle={{ color: themeColors.primaryDark }}
        onPress={validateHandler}
      >
        Validate
      </CustomButton>
    </View>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: themeColors.primaryDark,
  },
  titleInput: {
    backgroundColor: themeColors.secondaryDark,
    borderRadius: 4,
    width: "60%",
    paddingHorizontal: 12,
  },
});
