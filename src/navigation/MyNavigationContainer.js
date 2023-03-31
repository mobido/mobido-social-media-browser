import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../screens/settings/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'
import MoreScreen from '../screens/MoreScreen'

import { useColorTheme } from '../style/Colors'

//
// More Stack
//

function MoreStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="More2">
            <Stack.Screen name="More" component={MoreScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}

//
// Bottom/main tab navigator
//

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
    const { navigationTheme } = useColorTheme();

    return (
        <NavigationContainer theme={navigationTheme}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
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
                    name="More"
                    component={MoreStack}
                    options={tabOptions('More','ellipsis-vertical-outline')} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
