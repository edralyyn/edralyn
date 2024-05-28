import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Dimensions, Image } from 'react-native';
import Background from '../components/Bred';
import AnimatedBottomSheet from '../components/AnimatedBottomSheet';
import screenStyles from '../components/styles/screenStyles';
import { ChevronLeftIcon } from 'react-native-heroicons/outline'

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
      <View className="relative flex-row items-center mt-20">
        <TouchableOpacity className="absolute left-5">
          <ChevronLeftIcon size={30} color="white" />
        </TouchableOpacity>
        <View className="flex-1 items-center">
          <Text className="text-3xl text-white font-semibold">Continue with email</Text>
        </View>
      </View>
      <AnimatedBottomSheet 
        initialHeight={height * 0.8} 
        expandedHeight={height}
        isGuest={true} // Ensure the close button is not rendered
        >
         <View className="flex-2 items-center justify-center">
          <View>
            <Image className="w-24 h-24 mt-7 mb-7" source={require('../assets/email_icon.png')} />
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
            <TouchableOpacity className="items-center justify-center bg-[#800000] rounded-xl mt-60" onPress={handleContinue}>
              <Text className="text-center border rounded-xl p-4 w-80 text-white">CONTINUE</Text>
            </TouchableOpacity>
            </View>
          )}
          {step === 2 && (
            <View className="items-center justify-center">
              <Text className="text-2xl font-bold text-center">Verify your email address to get started</Text>
              <Text className="text-sm mt-2">This help us mitigate fraud and keep your personal data safe</Text>
              <TouchableOpacity className="items-center justify-center bg-[#800000] rounded-xl mt-60" onPress={handleSendVerification}>
                <Text className="text-center border rounded-xl p-4 w-80 text-white font-bold">Send verification email</Text>
              </TouchableOpacity>
            </View>
          )}
          {step === 3 && (
            <View className="items-center justify-center">
              <Text className="text-2xl font-bold text-center">We've sent a verification link to {email}</Text>
              <Text className="text-sm mt-2">Please click the verification link in your inbox</Text>
              <TouchableOpacity className="items-center justify-center bg-[#800000] rounded-xl mt-60" onPress={() => setIsEmailSent(true)}>
                <Text className="text-center border rounded-xl p-4 w-80 text-white font-bold">Check inbox</Text>
              </TouchableOpacity>
              <TouchableOpacity className="items-center justify-center rounded-xl mt-70 mt-3" onPress={handleResendVerification}>
                <Text className="text-center border rounded-xl p-4 w-80 text-[#800000] font-bold">Resend verification link</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </AnimatedBottomSheet>
    </Background>
  );
};

export default Email;
