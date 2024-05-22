import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';
import SubmittedModal from './SubmittedModal';
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
      <SubmittedModal visible={modalVisible} closeModal={closeModal} />
    </View>
  );
};

export default SubmitReport;
