import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ForgotPasswordScreen = ({ navigation }: { navigation: any }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async () => {
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    setError('');
    Alert.alert('OTP Sent', 'Please check your email for OTP');
    navigation.navigate('Otp');
  };

  const renderInput = (placeholder: string, value: string, setValue: any, secure = false) => (
    <TextInput
      style={styles.inputPro}
      placeholder={placeholder}
      placeholderTextColor="#aaa"
      value={value}
      onChangeText={setValue}
      secureTextEntry={secure}
    />
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.card}>
        <Text style={styles.title}>Forgot Password</Text>
        <Text style={styles.subtitle}>Enter your phone number to receive OTP</Text>
        {renderInput("number", email, setEmail)}
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
          <Text style={styles.buttonText}>Send OTP</Text>
        </TouchableOpacity>
        <View style={styles.backButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
        width: width * 0.92,
        padding: 36,
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 28,
        marginTop: 24
      },
      title: {
        fontSize: 26,
        fontWeight: "800",
        color: "#000000",
        marginBottom: 6,
        textAlign: "center"
      },
      subtitle: {
        fontSize: 16,
        color: "#333333",
        textAlign: "center",
        marginBottom: 22
      },
      inputPro: {
        backgroundColor: "rgba(0,0,0,0.05)",
        borderRadius: 12, height: 50,
        paddingHorizontal: 16,
        color: "#000000",
        marginBottom: 14
      },
      error: {
        color: "#ff6b6b",
        textAlign: "center",
        marginBottom: 12
    },
      button: {
        backgroundColor: "#FF8C00",
        borderRadius: 20,
        paddingVertical: 16, marginTop: 12, alignItems: "center"
    },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700"
    },
      link: {
        color: "#FF8C00",
        fontSize: 15,
        fontWeight: "700", textDecorationLine: "underline"
      },
      backButton: {
        marginTop: 18,
        alignItems: "center"

      },
});

export default ForgotPasswordScreen;