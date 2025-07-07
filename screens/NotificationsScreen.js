import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const notifications = [
  { id: '1', message: 'Transaction sent to John' },
  { id: '2', message: 'You received ₦2,000 from Ada' },
  { id: '3', message: 'Network connected successfully' },
];

export default function NotificationsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.notification}>
            <Text>{item.message}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  notification: { padding: 15, backgroundColor: '#f2f2f2', borderRadius: 8, marginBottom: 10 }
});
