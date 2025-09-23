import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2800);

    return () => clearTimeout(timer);
  }, [scaleAnim, opacityAnim, navigation]);

  return (
    <View style={styles.splashContainer}>
      <Animated.View style={{ transform: [{ scale: scaleAnim }], opacity: opacityAnim }}>
        <LinearGradient
          colors={['#FF6B6B', '#FFD166']}
          style={styles.gradient}
        >
          <Text style={styles.logoText}>Esahakara</Text>
        </LinearGradient>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  gradient: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 25,
  },
  logoText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;