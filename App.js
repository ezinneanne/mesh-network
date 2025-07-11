import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import SendMoneyScreen from './screens/SendMoneyScreen';
import CreateTransactionScreen from './screens/CreateTransactionScreen';
import NotificationsScreen from './screens/NotificationsScreen';
import NetworkStatusScreen from './screens/NetworkStatusScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Network') {
            iconName = 'wifi';
          } else if (route.name === 'Send') {
            iconName = 'send';
          } else if (route.name === 'Notifications') {
            iconName = 'notifications';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#6a78f0',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Network" component={NetworkStatusScreen} />
      <Tab.Screen name="Send" component={SendMoneyScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="SendMoney" component={SendMoneyScreen} />
        <Stack.Screen name="CreateTransaction" component={CreateTransactionScreen} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
