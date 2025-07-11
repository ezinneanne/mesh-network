import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  StyleSheet,
  ScrollView,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function SignUpScreen({ navigation }) {
  const [isBiometricEnabled, setBiometricEnabled] = useState(false);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.innerContainer}>
          <Image
            source={require('../assets/offlinepaylogo_transparent.png')}
            style={styles.logo}
            accessibilityLabel="Offline Pay Logo"
          />

          <Text style={styles.title}>Sign Up</Text>

          <Text style={styles.label}>Full Name</Text>
          <TextInput style={styles.input} placeholder="e.g., Jane Doe" />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., jane@example.com"
            keyboardType="email-address"
          />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., +2348123456789"
            keyboardType="phone-pad"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry
          />

          <Text style={styles.label}>Bank Account (Optional)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 1234567890"
            keyboardType="number-pad"
          />
          <Text style={styles.helperText}>
            Adding bank accounts makes transactions faster.
          </Text>

          <View style={styles.biometricContainer}>
            <Text style={styles.label}>Enable Biometric Login</Text>
            <Switch
              value={isBiometricEnabled}
              onValueChange={setBiometricEnabled}
              thumbColor={isBiometricEnabled ? '#6a78f0' : '#ccc'}
              trackColor={{ false: '#ccc', true: '#a3acf6' }}
            />
          </View>

          <TouchableOpacity
            style={styles.customButton}
            onPress={() => navigation.navigate('Main')}
          >
            <Text style={styles.customButtonText}>Sign Up</Text>
          </TouchableOpacity>

          <Pressable onPress={() => navigation.navigate('Login')}>
            {({ pressed }) => (
              <Text style={styles.inlineText}>
                <Text style={styles.already}>Already have an account?</Text>
                <Text
                  style={[
                    styles.loginInstead,
                    pressed && styles.loginInsteadPressed,
                  ]}
                >
                  {' '}
                  Log In Instead
                </Text>
              </Text>
            )}
          </Pressable>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By processing, you agree to our{' '}
              <Text style={styles.linkText}>Terms of Service</Text> and{' '}
              <Text style={styles.linkText}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 30,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#ccc',
    width: '100%',
    marginBottom: 10,
  },
  helperText: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  biometricContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  customButton: {
    backgroundColor: '#6a78f0',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 12,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  customButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
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
  termsContainer: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  termsText: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    lineHeight: 18,
  },
  linkText: {
    color: '#6a78f0',
    textDecorationLine: 'underline',
  },
});
