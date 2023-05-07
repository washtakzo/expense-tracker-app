import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import React from "react";
import Expense from "../components/Expense";
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
  const [selectedExpense, setSelectedExpense] = React.useState<ExpenseType>();

  const showModalHandler = () => setIsModalVisible(true);
  const closeModalHandler = () => setIsModalVisible(false);

  const totalAmount = expenses.reduce((acc, currentExpense) => {
    return +currentExpense.amount + acc;
  }, 0);

  return (
    <View style={styles.screen}>
      <View style={styles.totalContainer}>
        <Total title={totalTitle} amount={"$" + totalAmount.toFixed(2)} />
      </View>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.expenseContainer}>
            <Expense
              id={item.id}
              title={item.title}
              date={item.date}
              amount={item.amount}
              onPress={() => {
                showModalHandler();
                setSelectedExpense(item);
              }}
            />
          </View>
        )}
      />
      <EditExpenseModal
        isVisible={isModalVisible}
        closeModal={closeModalHandler}
        expense={selectedExpense}
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
