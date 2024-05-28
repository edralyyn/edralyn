import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import Background from '../components/Bred';
import AnimatedBottomSheet from '../components/AnimatedBottomSheet';
import screenStyles from '../components/styles/screenStyles';

const { height } = Dimensions.get('window');

const Email = () => {
  const [step, setStep] = useState(1); // 1: Enter Email, 2: Verify Email, 3: Email Sent
  const [email, setEmail] = useState('');
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleContinue = () => {
    setStep(2);
  };

  const handleSendVerification = () => {
    setIsEmailSent(true);
    setStep(3);
  };

  const handleResendVerification = () => {
    setIsEmailSent(false);
    setStep(2);
  };

  return (
    <Background>
      <View style={screenStyles.conEmail}>
        <Text style={screenStyles.title}>Continue with email</Text>
      </View>
      <AnimatedBottomSheet 
        initialHeight={height * 0.8} 
        expandedHeight={height}
      >
        <View style={screenStyles.container}>
          {step === 1 && (
            <View>
              <Text style={screenStyles.promptText}>What's your email?</Text>
              <TextInput
                style={screenStyles.textInput}
                placeholder="Email"
                multiline={false}
                value={email}
                onChangeText={setEmail}
              />
              <TouchableOpacity style={screenStyles.button} onPress={handleContinue}>
                <Text style={screenStyles.buttonText}>Continue</Text>
              </TouchableOpacity>
            </View>
          )}
          {step === 2 && (
            <View>
              <Text style={screenStyles.promptText}>Verify your email address to get started</Text>
              <TouchableOpacity style={screenStyles.button} onPress={handleSendVerification}>
                <Text style={screenStyles.buttonText}>Send verification email</Text>
              </TouchableOpacity>
            </View>
          )}
          {step === 3 && (
            <View>
              <Text style={screenStyles.promptText}>We've sent a verification link to {email}</Text>
              <TouchableOpacity style={screenStyles.button} onPress={() => setIsEmailSent(true)}>
                <Text style={screenStyles.buttonText}>Check inbox</Text>
              </TouchableOpacity>
              <TouchableOpacity style={screenStyles.button} onPress={handleResendVerification}>
                <Text style={screenStyles.buttonText}>Resend verification link</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        </AnimatedBottomSheet>
    </Background>
  );
};

export default Email;
