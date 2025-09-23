import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = ({ navigation }: { navigation: any }) => {
  // Animation values
  const logoScaleAnim = useRef(new Animated.Value(0.8)).current;
  const logoOpacityAnim = useRef(new Animated.Value(0)).current;
  const slideInAnim = useRef(new Animated.Value(30)).current;
  const dotAnims = useRef([new Animated.Value(0), new Animated.Value(0), new Animated.Value(0)])
    .current;

  useEffect(() => {
    // Start animations on component mount
    Animated.parallel([
      Animated.spring(logoScaleAnim, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacityAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(slideInAnim, {
        toValue: 0,
        duration: 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    // Loading dots animation
    const dotAnimation = Animated.stagger(
      200,
      dotAnims.map(anim =>
        Animated.loop(
          Animated.sequence([
            Animated.timing(anim, {
              toValue: 1,
              duration: 600,
              useNativeDriver: true,
            }),
            Animated.timing(anim, {
              toValue: 0,
              duration: 600,
              useNativeDriver: true,
            }),
          ]),
        ),
      ),
    );
    dotAnimation.start();

    // Navigate to the Login screen after the splash duration
    const timer = setTimeout(() => {
      navigation.replace('Login');
    }, 3200);

    // Cleanup on unmount
    return () => {
      clearTimeout(timer);
      dotAnimation.stop();
    };
  }, [logoScaleAnim, logoOpacityAnim, slideInAnim, dotAnims, navigation]);

  return (
    <LinearGradient colors={['#FFFAF0', '#FFF5E1']} style={styles.splashContainer}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: logoOpacityAnim,
            transform: [{ scale: logoScaleAnim }, { translateY: slideInAnim }],
          },
        ]}
      >
        <LinearGradient
          colors={['#FF8C00', '#FFA500']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={styles.logoText}>Esahakara</Text>
        </LinearGradient>
        <Text style={styles.subtitle}>Welcome</Text>
      </Animated.View>

      <View style={styles.loadingContainer}>
        {dotAnims.map((anim, index) => (
          <Animated.View
            key={index}
            style={[
              styles.dot,
              {
                opacity: anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0.3, 1],
                }),
                transform: [
                  {
                    translateY: anim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, -10],
                    }),
                  },
                ],
              },
            ]}
          />
        ))}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  gradient: {
    paddingVertical: 25,
    paddingHorizontal: 50,
    borderRadius: 50,
    shadowColor: '#FF8C00',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  logoText: {
    fontSize: 52,
    color: '#fff',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    fontWeight: '300',
    marginTop: 20,
    letterSpacing: 4,
  },
  loadingContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 80,
  },
  dot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FF8C00',
    marginHorizontal: 8,
  },
});

export default SplashScreen;