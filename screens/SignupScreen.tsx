import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SignupScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError('');
    if (username && password && email && confirmPassword) {
      if (password !== confirmPassword) {
        setError('Passwords do not match!');
        return;
      }
      Alert.alert('Success', 'Account created successfully!');
      navigation.navigate('Login');
    } else {
      setError('Please fill all fields.');
    }
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
    <View style={styles.card}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Sign up to get started</Text>
      {renderInput("Username", username, setUsername)}
      {renderInput("Email", email, setEmail)}
      {renderInput("Password", password, setPassword, secureText)}
      {renderInput("Confirm Password", confirmPassword, setConfirmPassword, secureText)}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Sign Up</Text>
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
      inputPro: {
        backgroundColor: "rgba(255,255,255,0.1)",
        borderRadius: 12, height: 50,
        paddingHorizontal: 16,
        color: "#fff",
        marginBottom: 14
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
});

export default SignupScreen;