import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Entypo } from '@expo/vector-icons';

export default function NetworkStatusScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.appName}>Offline Pay</Text>

      <View style={styles.statusBox}>
        <Ionicons name="wifi" size={40} color="#6a78f0" />
        <Text style={styles.statusText}>Network Connected</Text>

        <FontAwesome name="user" size={30} color="#333" style={{ marginTop: 15 }} />
        <Text style={styles.deviceText}>Devices Nearby: 3</Text>
      </View>

      <View style={styles.deviceListBox}>
        <Text style={styles.sectionTitle}>Connected Devices</Text>
        <View style={styles.divider} />

        {[
          { letter: 'A', name: 'Alice Phone', id: 'ID123', online: true },
          { letter: 'B', name: 'Bob Tablet', id: 'ID456', online: false },
          { letter: 'C', name: 'Carol Device', id: 'ID789', online: true },
        ].map((device, index) => (
          <View key={index} style={styles.deviceRow}>
            <View style={[styles.deviceCircle, { backgroundColor: device.letter === 'A' ? '#f56c94' : '#6a78f0' }]}> 
              <Text style={styles.deviceLetter}>{device.letter}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.deviceName}>{device.name}</Text>
              <Text style={styles.deviceId}>{device.id}</Text>
            </View>
            <View style={styles.statusDotContainer}>
              <View
                style={[styles.dot, { backgroundColor: device.online ? 'green' : 'gray' }]}
              />
              <Text style={styles.dotText}>{device.online ? 'Online' : 'Offline'}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.networkControlBox}>
        <Text style={styles.sectionTitle}>Mesh Network</Text>
        <View style={styles.divider} />

        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Enable Network</Text>
          <MaterialIcons name="toggle-on" size={36} color="#6a78f0" />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="refresh" size={20} color="#6a78f0" />
            <Text style={styles.actionText}>Refresh Network</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionButton}>
            <MaterialIcons name="send" size={20} color="#6a78f0" />
            <Text style={styles.actionText}>Send Money</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
  appName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  statusBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  statusText: { color: '#6a78f0', fontSize: 16, marginTop: 10, fontWeight: 'bold' },
  deviceText: { fontSize: 14, marginTop: 8 },

  deviceListBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  deviceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  deviceCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  deviceLetter: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '600',
  },
  deviceId: {
    fontSize: 12,
    color: '#666',
  },
  statusDotContainer: {
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 4,
  },
  dotText: {
    fontSize: 10,
    color: '#444',
  },
  networkControlBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 30,
  },
  toggleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(106, 120, 240, 0.05)',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  actionText: {
    marginLeft: 6,
    fontSize: 14,
    color: '#6a78f0',
    fontWeight: '500',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 12,
    color: '#6a78f0',
    marginTop: 4,
  },
});
