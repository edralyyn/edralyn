import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback } from 'react-native';
import screenStyles from '../components/styles/screenStyles';

const SubmitReport = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const submitReport = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <TouchableOpacity style={screenStyles.button} onPress={submitReport}>
        <Text style={screenStyles.whiteText}>Submit</Text>
      </TouchableOpacity>
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
              <Text style={screenStyles.whiteText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default SubmitReport;
