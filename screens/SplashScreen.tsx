import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const [logoScale] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.spring(logoScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
    }).start();

    const timer = setTimeout(() => navigation.replace('Login'), 2200);
    return () => clearTimeout(timer);
  }, [logoScale, navigation]);

  return (
    <View style={styles.splashContainer}>
      <Animated.View style={[styles.logoBox, { transform: [{ scale: logoScale }] }]}>
        <Text style={styles.logoText}>Esahakara</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e3c72',
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  logoText: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SplashScreen;