import React, { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  Ionicons,
  MaterialIcons,
  MaterialCommunityIcons,
} from '@expo/vector-icons';

const initialNotifications = [
  {
    id: '1',
    message: 'Transaction sent to John',
    status: 'synced',
    time: '2 mins ago',
  },
  {
    id: '2',
    message: 'You received ₦2,000 from Ada',
    status: 'synced',
    time: '5 mins ago',
  },
  {
    id: '3',
    message: 'Transaction to Mike failed',
    status: 'failed',
    time: '10 mins ago',
  },
  {
    id: '4',
    message: 'Transaction to Ife pending',
    status: 'pending',
    time: '15 mins ago',
  },
  {
    id: '5',
    message: 'Network connected successfully',
    status: 'synced',
    time: '20 mins ago',
  },
  {
    id: '6',
    message: 'Transaction to Chioma failed',
    status: 'failed',
    time: '24 mins ago',
  },
  {
    id: '7',
    message: '₦500 sent to Uche',
    status: 'synced',
    time: '30 mins ago',
  },
  {
    id: '8',
    message: 'Transaction to Olu pending',
    status: 'pending',
    time: '35 mins ago',
  },
  {
    id: '9',
    message: '₦10,000 received from Bank',
    status: 'synced',
    time: '40 mins ago',
  },
  {
    id: '10',
    message: 'Mesh Network Reconnected',
    status: 'synced',
    time: '45 mins ago',
  },
];

export default function NotificationsScreen() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const lastSynced = 'Today, 8:55 AM';

  const handleClearAll = () => setNotifications([]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#f1c40f';
      case 'failed':
        return '#e74c3c';
      case 'synced':
        return '#2ecc71';
      default:
        return '#bdc3c7';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending':
        return <MaterialIcons name="pending-actions" size={24} color="#f1c40f" />;
      case 'failed':
        return <MaterialIcons name="error-outline" size={24} color="#e74c3c" />;
      case 'synced':
        return <MaterialIcons name="check-circle" size={24} color="#2ecc71" />;
      default:
        return null;
    }
  };

  const renderItem = ({ item }) => (
    <View style={[styles.notificationBox, { shadowColor: getStatusColor(item.status) }]}>
      <View style={styles.row}>
        {getStatusIcon(item.status)}
        <View style={styles.messageBlock}>
          <Text style={styles.messageText}>{item.message}</Text>
          <Text style={styles.timeText}>{item.time}</Text>
          {item.status === 'failed' && (
            <TouchableOpacity>
              <Text style={styles.retryText}>Retry?</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>

      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {notifications.length > 0 && (
        <TouchableOpacity style={styles.clearAll} onPress={handleClearAll}>
          <MaterialCommunityIcons name="delete-sweep" size={20} color="#555" />
          <Text style={styles.clearText}>Clear All Notifications</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.syncedText}>Last Synced: {lastSynced}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 15 },
  notificationBox: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 3,
  },
  row: { flexDirection: 'row', alignItems: 'center' },
  messageBlock: { marginLeft: 10, flex: 1 },
  messageText: { fontSize: 16, fontWeight: '500' },
  timeText: { fontSize: 12, color: '#777', marginTop: 4 },
  retryText: { fontSize: 13, color: '#3498db', marginTop: 4, fontWeight: 'bold' },
  clearAll: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
  },
  clearText: {
    marginLeft: 6,
    color: '#555',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  syncedText: {
    marginTop: 15,
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});
