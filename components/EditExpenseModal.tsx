import { StyleSheet, Text, View, Button, Modal } from "react-native";
import React from "react";

type Props = {
  isVisible: boolean;
  closeModal: () => void;
};

const EditExpenseModal = ({ isVisible, closeModal }: Props) => {
  return (
    <Modal visible={isVisible} animationType="slide">
      <Text>TEST</Text>
      <Button title="Close" onPress={closeModal} />
    </Modal>
  );
};

export default EditExpenseModal;

const styles = StyleSheet.create({});
