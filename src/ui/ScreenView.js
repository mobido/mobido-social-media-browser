import React from 'react';
import { useColorScheme } from 'react-native';
import { View, StyleSheet } from 'react-native';

export default function ScreenView(props) {

    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        flex: 1,
        backgroundColor: colorScheme == 'light' ? '#fff' : '#000',
        alignItems: 'center',
        justifyContent: 'center',
    });

    return (
        <View style={style}>
            {props.children}
        </View>
    );
}