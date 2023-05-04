import {
  StyleSheet,
  Text,
  View,
  Button,
  Modal,
  Dimensions,
} from "react-native";
import React from "react";
import { themeColors } from "../utils/colors";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const EditExpenseModal = ({ isVisible, closeModal }: Props) => {
  return (
    <Modal
      style={styles.modal}
      visible={isVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.emptySpace}></View>
      <View style={styles.container}>
        <Text>TEST</Text>
        <Button title="Close" onPress={closeModal} />
      </View>
    </Modal>
  );
};

export default EditExpenseModal;

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
    backgroundColor: themeColors.secondaryDark,
    borderTopLeftRadius: deviceWidth / 36,
    borderTopRightRadius: deviceWidth / 36,
    padding: deviceWidth / 24,
  },
});
