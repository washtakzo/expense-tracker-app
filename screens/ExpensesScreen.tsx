import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import Expense from "../components/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-data";
import { themeColors } from "../utils/colors";
import Total from "../components/Total";
import EditExpenseModal from "../components/EditExpenseModal";
import { Expense as ExpenseType } from "../utils/types";

type Props = {
  totalTitle: string;
  expenses: ExpenseType[];
};

const ExpensesScreen = ({ totalTitle, expenses }: Props) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModalHandler = () => setIsModalVisible(true);

  const closeModalHandler = () => setIsModalVisible(false);

  const totalAmount = expenses.reduce((acc, currentExpense) => {
    return currentExpense.amount + acc;
  }, 0);

  return (
    <View style={styles.screen}>
      <View style={styles.totalContainer}>
        <Total title={totalTitle} amount={"$" + totalAmount} />
      </View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseContainer}>
            <Expense
              title={item.title}
              date={item.date}
              amount={item.amount}
              onPress={showModalHandler}
            />
          </View>
        )}
      />
      <EditExpenseModal
        isVisible={isModalVisible}
        closeModal={closeModalHandler}
      />
    </View>
  );
};

export default ExpensesScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: themeColors.primaryDark,
  },
  expenseContainer: {
    paddingHorizontal: deviceWidth / 24,
    paddingVertical: deviceWidth / 56,
  },
  totalContainer: {
    marginTop: deviceWidth / 24,
    marginHorizontal: deviceWidth / 24,
  },
});
