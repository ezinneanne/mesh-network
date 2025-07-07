import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SendMoneyScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Money</Text>
      <TextInput style={styles.input} placeholder="Recipient ID" />
      <TextInput style={styles.input} placeholder="Amount" keyboardType="numeric" />
      <Button title="Send" onPress={() => navigation.navigate('CreateTransaction')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 }
});
