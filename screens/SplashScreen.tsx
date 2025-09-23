import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const opacityAnim = useRef(new Animated.Value(0)).current;
  const particleAnims = useRef([...Array(20)].map(() => new Animated.Value(0))).current;

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
      ...particleAnims.map(anim =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 2000 + Math.random() * 1000,
          easing: Easing.bezier(0.1, 0.7, 1.0, 0.1),
          useNativeDriver: true,
        })
      ),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 2800);

    return () => clearTimeout(timer);
  }, [scaleAnim, opacityAnim, particleAnims, navigation]);

  return (
    <View style={styles.splashContainer}>
      {[...Array(20)].map((_, i) => (
        <Animated.View
          key={i}
          style={[
            styles.particle,
            {
              transform: [
                {
                  translateX: particleAnims[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [Math.random() * 400 - 200, Math.random() * 400 - 200],
                  }),
                },
                {
                  translateY: particleAnims[i].interpolate({
                    inputRange: [0, 1],
                    outputRange: [Math.random() * 800 - 400, Math.random() * 800 - 400],
                  }),
                },
              ],
              opacity: particleAnims[i].interpolate({
                inputRange: [0, 0.5, 1],
                outputRange: [0, 1, 0],
              }),
            },
          ]}
        />
      ))}
      <Animated.View style={[styles.logoContainer, { transform: [{ scale: scaleAnim }], opacity: opacityAnim }]}>
        <LinearGradient
          colors={['#FF6B6B', '#FFD166']}
          style={styles.gradient}
        >
          <Text style={styles.logoText}>Esahakara</Text>
        </LinearGradient>
        <Text style={styles.tagline}>Your Digital Cooperative</Text>
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
    overflow: 'hidden',
  },
  particle: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 165, 0, 0.3)',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradient: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 0.3,
    shadowRadius: 25,
    elevation: 15,
  },
  logoText: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
  },
  tagline: {
    fontSize: 18,
    color: '#333',
    marginTop: 15,
    fontWeight: '300',
  },
});

export default SplashScreen;