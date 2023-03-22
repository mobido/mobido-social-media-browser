import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../screens/settings/SettingsScreen'

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

/*
function SettingsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}*/

/*
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

const Tab = createBottomTabNavigator();

function tabOptions(tabBarLabel,iconName) {
    return {
        tabBarLabel,
        tabBarIcon: ({ color, size }) => (
            <Icon name={iconName} color={color} size={size} />
        ),
    }    
}

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="News"
                    component={HomeScreen}
                    options={tabOptions('News','trending-up-outline')} />
                <Tab.Screen
                    name="Videos"
                    component={HomeScreen}
                    options={tabOptions('Videos','videocam-outline')} />
                <Tab.Screen
                    name="Chat"
                    component={HomeScreen}
                    options={tabOptions('Chat','chatbox-outline')} />
                <Tab.Screen
                    name="Settings"
                    component={SettingsScreen}
                    options={tabOptions('Settings','settings-outline')} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
