import React, { useState } from 'react';
import { Modal, Text, TouchableOpacity, View, TouchableWithoutFeedback, Image, StyleSheet} from 'react-native';
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
      <TouchableOpacity style={{ ...screenStyles.button, width: '70%', alignSelf: 'center' }} onPress={submitReport}>
        <Text style={screenStyles.whiteText}>Submit</Text>
      </TouchableOpacity>
      <Modal
        animationType="popup"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={screenStyles.modalContainer}>
          <TouchableWithoutFeedback onPress={closeModal}>
            <View style={screenStyles.modalOverlay} />
          </TouchableWithoutFeedback>
          <View style={screenStyles.modalContent}>
            <Image source={require('../assets/check.png')} style={styles.checkImage} />
            <Text style={{...screenStyles.Text, fontWeight: 'bold', fontSize: '18'}}>Report submitted!</Text>
            <TouchableOpacity style={{...screenStyles.button, margin: 0, marginTop: 40, paddingHorizontal: 120,}} onPress={closeModal}>
              <Text style={screenStyles.whiteText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  checkImage: {
    width: 73,
    height: 73,
    margin: 10,
    alignSelf: 'center',
  },
});

export default SubmitReport;
