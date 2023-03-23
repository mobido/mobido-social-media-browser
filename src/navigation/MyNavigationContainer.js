import * as React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import SettingsScreen from '../screens/settings/SettingsScreen'
import HomeScreen from '../screens/HomeScreen'

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};


//
// Settings Stack
//

function SettingsStack() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="So" component={SettingsScreen} />
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
    const scheme = useColorScheme();

    return (
        <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
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
                    component={SettingsStack}
                    options={tabOptions('More','settings-outline')} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
