import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const LoginScreen = ({ navigation }: { navigation: any }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError('');
    await new Promise<void>((resolve) => setTimeout(resolve, 500));
    if (username && password) {
      Alert.alert('Login Successful', `Welcome, ${username}!`);
    } else {
      setError('Please enter both username and password.');
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Sign in to continue</Text>
        {renderInput("Username", username, setUsername)}
        {renderInput("Password", password, setPassword, secureText)}
        <TouchableOpacity style={styles.toggleSecure} onPress={() => setSecureText(!secureText)}>
          <Text style={styles.toggleText}>{secureText ? 'Show Password' : 'Hide Password'}</Text>
        </TouchableOpacity>
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.link}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
              <Text style={styles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </KeyboardAvoidingView>
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
      toggleSecure: {
        alignItems: "flex-end",
        marginBottom: 12

      },
      toggleText: {
        color: "#FF8C00",
        fontWeight: "600"

      },
      error: {
        color: "#ff6b6b",
        textAlign: "center",
        marginBottom: 12
    },
      button: {
        backgroundColor: "#FF8C09",
        borderRadius: 20,
        paddingVertical: 16, marginTop: 12, alignItems: "center"
    },
      buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "700"
    },
      footer: {
        alignItems: "center", marginTop: 24

      },
      footerText: {
        color: "#333333",
        fontSize: 14
      },
      link: {
        color: "#FF8C00",
        fontSize: 15,
        fontWeight: "700",
      },
});

export default LoginScreen;