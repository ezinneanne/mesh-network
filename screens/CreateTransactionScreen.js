import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CreateTransactionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Transaction</Text>
      <TextInput style={styles.input} placeholder="Title (e.g., groceries, rent)" />
      <TextInput style={styles.input} placeholder="Amount" keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Note (optional)" />
      <Button title="Submit Transaction" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { borderWidth: 1, marginBottom: 15, padding: 10, borderRadius: 5 }
});
