import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions } from 'react-native';
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
      <View className="flex-2 items-center justify-center mt-20">
        <Text className="text-3xl text-white font-semibold">Continue with email</Text>
      </View>
      <AnimatedBottomSheet 
        initialHeight={height * 0.8} 
        expandedHeight={height}
        isGuest={true} // Ensure the close button is not rendered
        >
         <View className="flex-2 items-center justify-center">
          <View>
          </View>
          {step === 1 && (
            <View className="items-center justify-center">
              <Text className="text-2xl font-bold">What's your email?</Text>
              <Text className="text-sm mt-2">We'll check if you have an account</Text>
              <TextInput
                className="border rounded-xl p-3 w-80 mt-4"
                placeholder="Email"
                multiline={false}
                value={email}
                onChangeText={setEmail}
              />
            <TouchableOpacity className="items-center justify-center top-40 bg-[#800000] rounded-xl" onPress={handleContinue}>
              <Text className="text-center border rounded-xl p-4 w-80 text-white">CONTINUE</Text>
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
