import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback, Animated } from 'react-native';
import screenStyles from './styles/screenStyles';

const SubmitReport = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const submitReport = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={screenStyles.container}>
      <Animated.View style={screenStyles.animatedContainer}>
        <TouchableOpacity style={screenStyles.button} onPress={submitReport}>
          <Text style={screenStyles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
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
    </View>
  );
};

export default SubmitReport;
