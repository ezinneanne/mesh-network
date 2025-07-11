import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/offlinepaylogo_transparent.png')}
        style={styles.logo}
        accessibilityLabel="Offline Pay Logo"
      />

      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., user@example.com"
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        secureTextEntry
      />

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('Main')}
      >
        <Text style={styles.customButtonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.biometricButton}
        onPress={() => alert('Biometric login coming soon')}
      >
        <Ionicons name="finger-print" size={28} color="#6a78f0" />
        <Text style={styles.biometricText}>Use Biometrics</Text>
      </TouchableOpacity>

      <Pressable onPress={() => navigation.navigate('SignUp')}>
        {({ pressed }) => (
          <Text style={styles.inlineText}>
            <Text style={styles.already}>Don't Have an account?</Text>
              <Text
                style={[styles.loginInstead, pressed && styles.loginInsteadPressed,]}>
                  {' '}Sign Up Instead
                    </Text>
              </Text>)}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 6,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    fontSize: 16,
  },
  customButton: {
    backgroundColor: '#6a78f0',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    elevation: 5,
  },
  customButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  biometricButton: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  biometricText: {
    fontSize: 16,
    color: '#6a78f0',
    marginLeft: 8,
    fontWeight: '500',
  },
  inlineText: {
  textAlign: 'center',
  marginTop: 15,
  },
  already: {
   color: '#333',
   fontWeight: '600',
   fontSize: 14,
  },
  loginInstead: {
   color: '#f56c94',
   fontWeight: '600',
   fontSize: 14,
  },
  loginInsteadPressed: {
   textDecorationLine: 'underline',
  },
});
