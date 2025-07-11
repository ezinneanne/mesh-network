import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SendMoneyScreen({ navigation }) {
  const [recipient, setRecipient] = useState({
    name: 'Jane Doe',
    id: 'user123',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
  });
  const [amount, setAmount] = useState('');
  const [note, setNote] = useState('');

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const recipients = [
    {
      name: 'Jane Doe',
      id: 'user123',
      photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'John Smith',
      id: 'user456',
      photo: 'https://randomuser.me/api/portraits/men/22.jpg',
    },
    {
      name: 'Ada Love',
      id: 'user789',
      photo: 'https://randomuser.me/api/portraits/women/30.jpg',
    },
  ];



  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Money</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Select Recipient Box */}
      <View style={styles.sectionBox}>
      <Text style={styles.sectionTitle}>Select Recipient</Text>
      <TouchableOpacity
        style={styles.recipientBox}
        onPress={() => setIsDropdownVisible(!isDropdownVisible)}
      >
        <Image source={{ uri: recipient.photo }} style={styles.avatar} />
        <View>
          <Text style={styles.recipientName}>{recipient.name}</Text>
          <Text style={styles.recipientId}>{recipient.id}</Text>
        </View>
        <Ionicons
          name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#555"
          style={{ marginLeft: 'auto' }}
        />
      </TouchableOpacity>

      {/* Dropdown list */}
      {isDropdownVisible && (
        <View style={styles.dropdown}>
          {recipients.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.dropdownItem}
              onPress={() => {
                setRecipient(item);
                setIsDropdownVisible(false);
              }}
            >
              <Image source={{ uri: item.photo }} style={styles.avatarSmall} />
              <View>
                <Text style={styles.recipientName}>{item.name}</Text>
                <Text style={styles.recipientId}>{item.id}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>

      {/* Amount & Note Box */}
      <View style={styles.sectionBox}>
        <Text style={styles.sectionTitle}>Amount</Text>
        <View style={styles.amountBox}>
          <Text style={styles.currencySymbol}>₦</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="0.00"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>Optional Note</Text>
        <TextInput
          style={styles.noteInput}
          placeholder="e.g. Dinner with Friends"
          value={note}
          onChangeText={setNote}
        />
      </View>

      {/* Transaction Details */}
      <View style={styles.summaryBox}>
        <Text style={styles.sectionTitle}>Transaction Details</Text>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Recipient:</Text>
          <Text style={styles.detailValue}>{recipient.name}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Amount:</Text>
          <Text style={[styles.detailValue, styles.amountHighlight]}>₦{amount || '0.00'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Note:</Text>
          <Text style={styles.detailValueSmall}>{note || 'N/A'}</Text>
        </View>

        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Fees:</Text>
          <Text style={styles.detailValueSmall}>₦10.00</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.detailRow}>
          <Text style={styles.totalLabel}>Total (including fees):</Text>
          <Text style={styles.totalAmount}>₦{(parseFloat(amount || 0) + 10).toFixed(2)}</Text>
        </View>
      </View>

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.buttonText}>Confirm Transaction</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.buttonText}>Cancel Transaction</Text>
        </TouchableOpacity>
      </View>

      {/* Connection Info */}
      <Text style={styles.networkStatus}>Mesh Network Connected</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fdfdfd',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 2,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  dropdown: {
  backgroundColor: '#fff',
  borderRadius: 10,
  marginTop: 5,
  paddingVertical: 5,
  elevation: 2,
},
dropdownItem: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 10,
  borderBottomColor: '#eee',
  borderBottomWidth: 1,
},
  recipientBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    padding: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  avatarSmall: {
  width: 30,
  height: 30,
  borderRadius: 15,
  marginRight: 10,
},
  recipientName: {
    fontWeight: '500',
    fontSize: 16,
  },
  recipientId: {
    color: '#777',
    fontSize: 12,
  },
  amountBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    paddingHorizontal: 12,
  },
  currencySymbol: {
    fontSize: 20,
    marginRight: 6,
    color: '#333',
  },
  amountInput: {
    flex: 1,
    fontSize: 18,
  },
  noteInput: {
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  summaryBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 2,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: '#444',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  detailValueSmall: {
    fontSize: 13,
    color: '#666',
  },
  amountHighlight: {
    color: '#f97316',
    fontSize: 16,
  },
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },
  totalLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f97316',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 20,
  },
  confirmButton: {
    flex: 1,
    backgroundColor: '#6a78f0',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  networkStatus: {
    textAlign: 'center',
    fontSize: 14,
    color: 'green',
    marginTop: 10,
  },
});
