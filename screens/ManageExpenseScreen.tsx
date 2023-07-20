import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { themeColors } from "../utils/colors";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import { expenseActions } from "../store/expenses-slice";
import { dateToFormattedString } from "../utils/functions";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Expense, Navigation as NavigationType } from "../utils/types";
import { storeExpense, updateExpense } from "../utils/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import ErrorOverlay from "../components/UI/ErrorOverlay";

type Route = {
  key: string;
  name: string;
  params: { expense?: Expense };
};

const ManageExpenseScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>();

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
      //add expense to firebase
      setIsLoading(true);
      try {
        const response = await storeExpense({
          title: title,
          amount: amount,
          date: formattedDate,
        });

        const data = await response.json();

        const expenseId = data.name;

        dispatch(
          expenseActions.addExpense({
            newExpense: {
              id: expenseId,
              title: title,
              amount: amount,
              date: formattedDate,
            },
          })
        );

        navigation.goBack();
      } catch (error) {
        setError("Could not store the expense");
      }
      setIsLoading(false);
    } else if (isUpdateExpenseScreen) {
      //update on firebase
      setIsLoading(true);
      try {
        const response = await updateExpense(expenseToUpdate!.id, {
          amount: amount,
          title: title,
          date: expenseToUpdate!.date,
        });

        if (!response.ok) {
          throw new Error("An error occured");
        }

        dispatch(
          expenseActions.updateExpense({
            expenseId: expenseToUpdate!.id,
            expenseAmount: amount,
            expenseTitle: title,
          })
        );

        navigation.goBack();
      } catch (error) {
        setError("Could not update the expense");
      }
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />;
  }

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
