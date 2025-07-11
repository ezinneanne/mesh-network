import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/offlinepaylogo_transparent.png')}
        style={styles.logo}
        accessibilityLabel="Offline Pay Logo"
      />

      <Text style={styles.paragraph}>
        Your secure, peer-to-peer payments, even without internet.
      </Text>

      <Image
        source={require('../assets/twopeopleholdingbitcoin.png')}
        style={styles.illustration}
        accessibilityLabel="Secure Payments Illustration"
      />

      <View style={{ height: 30 }} />

      <TouchableOpacity
        style={styles.customButton}
        onPress={() => navigation.navigate('SignUp')} 
      >
        <Text style={styles.customButtonText}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Add some padding around the content
    backgroundColor: '#f5f5f5', // Optional: light background
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20, // Space below the logo
    borderRadius: 75, // Make it circular if desired
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30, // Space below the paragraph
    color: '#333',
    lineHeight: 24,
  },
  illustration: {
    width: '100%', // Responsive width
    height: 200, // Fixed height for the illustration
    resizeMode: 'contain', // Ensures the image fits within the bounds
    marginBottom: 20, // Space below the illustration
  },
  customButton: {
    backgroundColor: '#6a78f0',
    width: '100%',
    minHeight: 30,
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
});
