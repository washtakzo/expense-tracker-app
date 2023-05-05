import { StyleSheet, View, Text, Modal, Dimensions } from "react-native";
import React from "react";
import { themeColors } from "../../utils/colors";

type Props = {
  children: React.ReactNode;
  title: string;
  isVisible: boolean;
};

const ModalCard = ({ children, isVisible, title }: Props) => {
  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.emptySpace}></View>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.contentContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalCard;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  modal: {
    flex: 100,
  },
  emptySpace: {
    flex: 10,
  },
  container: {
    flex: 80,
    backgroundColor: themeColors.primaryDark,
    borderTopLeftRadius: deviceWidth / 36,
    borderTopRightRadius: deviceWidth / 36,
  },
  titleContainer: {
    backgroundColor: themeColors.secondaryDark,
    borderTopLeftRadius: deviceWidth / 36,
    borderTopRightRadius: deviceWidth / 36,
    justifyContent: "center",
    alignItems: "center",
    height: deviceWidth / 12,
  },
  title: {
    color: themeColors.textOnSecondary,
    fontWeight: "bold",
  },
  contentContainer: {
    paddingVertical: deviceWidth / 24,
    paddingHorizontal: deviceWidth / 12,
  },
});
