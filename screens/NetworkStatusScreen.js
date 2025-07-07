import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NetworkStatusScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mesh Network Status</Text>
      <Text>Status: Connected</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 20, marginBottom: 10 }
});
