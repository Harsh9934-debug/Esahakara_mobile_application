import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
        <LinearGradient
          colors={['#FF8C00', '#FFA500']}
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
    backgroundColor: '#FFFFFF',
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(0,0,0,0.05)',
  },
  gradient: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  logoText: {
    fontSize: 36,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});

export default SplashScreen;