import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const OtpScreen = ({ navigation }: { navigation: any }) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');

  const handleOtpSubmit = async () => {
    const otpValue = otp.join('');
    if (otpValue.length !== 4) {
      setError('Please enter complete OTP');
      return;
    }
    Alert.alert('Success', 'Password reset link sent to your email!');
    navigation.navigate('Login');
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Enter OTP</Text>
      <Text style={styles.subtitle}>Check your email for the OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, idx) => (
          <TextInput
            key={idx}
            style={styles.otpInput}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleOtpChange(value, idx)}
          />
        ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Submit OTP</Text>
      </TouchableOpacity>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        width: width * 0.92,
        padding: 36,
        backgroundColor: "rgba(255,255,255,0.08)",
        borderRadius: 28,
        marginTop: 24
      },
      title: {
        fontSize: 26,
        fontWeight: "800",
        color: "#fff",
        marginBottom: 6,
        textAlign: "center"
      },
      subtitle: {
        fontSize: 16,
        color: "#ccc",
        textAlign: "center",
        marginBottom: 22
      },
      error: {
        color: "#ff6b6b",
        textAlign: "center",
        marginBottom: 12
    },
      button: {
        backgroundColor: "#00b4d8",
        borderRadius: 20,
        paddingVertical: 16, marginTop: 12, alignItems: "center"
    },
      buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "700"
    },
      link: {
        color: "#00b4d8",
        fontSize: 15,
        fontWeight: "700", textDecorationLine: "underline"
      },
      backButton: {
        marginTop: 18,
        alignItems: "center"

      },
      otpContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 26
    },
      otpInput: {
        width: width * 0.18,
        height: width * 0.18,
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 16,
        color: "#fff",
        fontSize: 26,
        textAlign: "center"
      },
});

export default OtpScreen;