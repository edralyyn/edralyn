import React from 'react';
import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import screenStyles from './styles/screenStyles';

const SubmittedModal = ({ visible, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
    >
      <View style={screenStyles.modalContainer}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={screenStyles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={screenStyles.modalContent}>
          <Text style={screenStyles.modalText}>Report submitted!</Text>
          <TouchableOpacity style={screenStyles.button} onPress={closeModal}>
            <Text style={screenStyles.buttonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default SubmittedModal;
