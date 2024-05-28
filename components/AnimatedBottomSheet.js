import React, { useRef, useEffect } from 'react';
import { Animated, PanResponder, View , TouchableOpacity, Image, Dimensions} from 'react-native';
import screenStyles from './styles/screenStyles';

const AnimatedBottomSheet = ({ initialHeight, expandedHeight, onClose, children }) => {
  const animatedValue = useRef(new Animated.Value(initialHeight)).current;
  const { height: windowHeight } = Dimensions.get('window');

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (evt, gestureState) => {
        let newHeight = initialHeight - gestureState.dy;
        if (newHeight < initialHeight) newHeight = initialHeight;
        animatedValue.setValue(newHeight);
      },
      onPanResponderRelease: (evt, gestureState) => {
        Animated.spring(animatedValue, {
          toValue: gestureState.dy < 0 ? expandedHeight : initialHeight,
          useNativeDriver: false,
        }).start();
      },
    })
  ).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: initialHeight,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, []);

  const closeBottomSheet = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      if (onClose) onClose();
    });
  };

  return (
    <Animated.View style={[screenStyles.bottomSheet, { height: animatedValue }]} {...panResponder.panHandlers}>
      <View style={{ alignItems: 'flex-end', paddingRight: 10, paddingTop: 10 }}>
        <TouchableOpacity onPress={closeBottomSheet}>
          <Image source={require('../assets/close.png')} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
      {children}
    </Animated.View>
  );
};

export default AnimatedBottomSheet;
