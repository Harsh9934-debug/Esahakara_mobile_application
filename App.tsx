import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Animated,
} from "react-native";

const { width } = Dimensions.get("window");

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [logoScale] = useState(new Animated.Value(0));
  const [currentScreen, setCurrentScreen] = useState<'login' | 'signup' | 'forgotPassword' | 'otp'>('login');
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [secureText, setSecureText] = useState(true);
  const [error, setError] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);

  useEffect(() => {
    Animated.spring(logoScale, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
    }).start();

    const timer = setTimeout(() => setShowSplash(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = async () => {
    setError("");
    await new Promise<void>((resolve) => setTimeout(resolve, 500));
    if (username && password) {
      Alert.alert("Login Successful", `Welcome, ${username}!`);
    } else {
      setError("Please enter both username and password.");
    }
  };

  const handleSignup = async () => {
    setError("");
    if (username && password && email && confirmPassword) {
      if (password !== confirmPassword) {
        setError("Passwords do not match!");
        return;
      }
      Alert.alert("Success", "Account created successfully!");
      setCurrentScreen('login');
    } else {
      setError("Please fill all fields.");
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    setError("");
    Alert.alert("OTP Sent", "Please check your email for OTP");
    setCurrentScreen('otp');
  };

  const handleOtpSubmit = async () => {
    const otpValue = otp.join("");
    if (otpValue.length !== 4) {
      setError("Please enter complete OTP");
      return;
    }
    Alert.alert("Success", "Password reset link sent to your email!");
    setCurrentScreen('login');
  };

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  if (showSplash) {
    return (
      <View style={styles.splashContainer}>
        <Animated.View style={[styles.logoBox, { transform: [{ scale: logoScale }] }]}>
          <Text style={styles.logoText}>Esahakara</Text>
        </Animated.View>
      </View>
    );
  }

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

  const renderLogin = () => (
    <View style={styles.card}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to continue</Text>
      {renderInput("Username", username, setUsername)}
      {renderInput("Password", password, setPassword, secureText)}
      <TouchableOpacity style={styles.toggleSecure} onPress={() => setSecureText(!secureText)}>
        <Text style={styles.toggleText}>{secureText ? "Show Password" : "Hide Password"}</Text>
      </TouchableOpacity>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => setCurrentScreen('forgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => setCurrentScreen('signup')}>
            <Text style={styles.link}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderSignup = () => (
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
        <TouchableOpacity onPress={() => setCurrentScreen('login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderForgotPassword = () => (
    <View style={styles.card}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.subtitle}>Enter your email to receive OTP</Text>
      {renderInput("Email", email, setEmail)}
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleForgotPassword}>
        <Text style={styles.buttonText}>Send OTP</Text>
      </TouchableOpacity>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => setCurrentScreen('login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const renderOtp = () => (
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
            onChangeText={value => handleOtpChange(value, idx)}
          />
        ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={handleOtpSubmit}>
        <Text style={styles.buttonText}>Submit OTP</Text>
      </TouchableOpacity>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => setCurrentScreen('login')}>
          <Text style={styles.link}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        {currentScreen === 'login' && renderLogin()}
        {currentScreen === 'signup' && renderSignup()}
        {currentScreen === 'forgotPassword' && renderForgotPassword()}
        {currentScreen === 'otp' && renderOtp()}
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  splashContainer: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#1e3c72"
   },
  logoBox: {
    justifyContent: "center", 
    alignItems: "center", 
    width: 140, 
    height: 140, 
    borderRadius: 70, 
    backgroundColor: "rgba(255,255,255,0.12)" 
  },
  logoText: { 
    fontSize: 28, 
    color: "#fff", 
    fontWeight: "bold" 
  },
  container: { 
    flex: 1, 
    backgroundColor: "#0f1c36" 
  },
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
  toggleSecure: { 
    alignItems: "flex-end", 
    marginBottom: 12 

  },
  toggleText: { 
    color: "#00b4d8", 
    fontWeight: "600" 

  },
  error: { 
    color: "#ff6b6b", 
    textAlign: "center", 
    marginBottom: 12 },
  button: { 
    backgroundColor: "#00b4d8", 
    borderRadius: 20, 
    paddingVertical: 16, marginTop: 12, alignItems: "center" },
  buttonText: { 
    color: "#fff", 
    fontSize: 18, 
    fontWeight: "700" },
  footer: { 
    alignItems: "center", marginTop: 24 

  },
  footerText: { 
    color: "#bbb", 
    fontSize: 14 
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
    marginBottom: 26 },
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

export default App;
