import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React from "react";
import Expense from "../components/Expense";
import { DUMMY_EXPENSES } from "../utils/dummy-data";
import { themeColors } from "../utils/colors";
import Total from "../components/Total";
import EditExpenseModal from "../components/EditExpenseModal";

const RecentExpenses = () => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModalHandler = () => setIsModalVisible(true);

  const closeModalHandler = () => setIsModalVisible(false);

  return (
    <View style={styles.screen}>
      <View style={styles.totalContainer}>
        <Total title="Last 7 Days" amount="$25.65" />
      </View>
      <EditExpenseModal
        isVisible={isModalVisible}
        closeModal={closeModalHandler}
      />
      <FlatList
        data={DUMMY_EXPENSES}
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
    </View>
  );
};

export default RecentExpenses;

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
