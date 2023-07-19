import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import { dateToFormattedString } from "../utils/functions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Expense, Navigation as NavigationType } from "../utils/types";
import { storeExpense } from "../utils/http";

type Route = {
  key: string;
  name: string;
  params: { expense?: Expense };
};

const ManageExpenseScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationType>();
  const route = useRoute<Route>();

  const expenseToUpdate = route.params?.expense;

  const isAddExpenseScreen = !expenseToUpdate;
  const isUpdateExpenseScreen = !!expenseToUpdate;

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: isAddExpenseScreen ? "New Expense" : "Edit Expense",
    });
  }, [navigation]);

  const [title, setTitle] = React.useState(expenseToUpdate?.title || "");
  const [amount, setAmount] = React.useState(expenseToUpdate?.amount || "");

  const onChangeTitle = (enteredText: string) => {
    setTitle(enteredText);
  };

  const onChangeAmount = (enteredText: string) => {
    setAmount(enteredText);
  };

  const validateHandler = async () => {
    const todayDate = new Date();
    const formattedDate = dateToFormattedString(todayDate);

    if (isAddExpenseScreen) {
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
      //TODO:add expense to firebase
      storeExpense({
        id: todayDate.toString(),
        title: title,
        amount: amount,
        date: formattedDate,
      });
    } else if (isUpdateExpenseScreen) {
      dispatch(
        expenseActions.updateExpense({
          expenseId: expenseToUpdate!.id,
          expenseAmount: amount,
          expenseTitle: title,
        })
      );
    }

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <View style={styles.emptySpaceSmall}></View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={onChangeTitle}
          placeholder="Enter the expense Title"
          placeholderTextColor={"#7c7c7c"}
        />
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={onChangeAmount}
          placeholder="Enter the expense Amount"
          inputMode="numeric"
          placeholderTextColor={"#7c7c7c"}
        />
        <CustomButton
          containerStyle={{ backgroundColor: themeColors.thirdDark }}
          textStyle={{ color: themeColors.primaryDark }}
          onPress={validateHandler}
        >
          Validate
        </CustomButton>
      </View>
      <View style={styles.emptySpaceLarge}></View>
    </KeyboardAvoidingView>
  );
};

export default ManageExpenseScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 100,
    backgroundColor: themeColors.primaryDark,
  },
  container: {
    flex: 30,
    justifyContent: "space-around",
    alignItems: "center",
  },
  emptySpaceLarge: {
    flex: 60,
    width: "100%",
  },
  emptySpaceSmall: {
    flex: 10,
    width: "100%",
  },
  input: {
    backgroundColor: themeColors.secondaryDark,
    borderRadius: 4,
    paddingHorizontal: 12,
    color: themeColors.textOnSecondary,
  },
});
