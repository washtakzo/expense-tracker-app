import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import Total from "../components/Total";

const RecentExpenses = () => {
  return (
    <View style={styles.totalContainer}>
      <Total title="Total" amount="$25.65" />
    </View>
  );
};

export default RecentExpenses;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  totalContainer: {
    marginTop: deviceWidth / 24,
    marginHorizontal: deviceWidth / 24,
  },
});
