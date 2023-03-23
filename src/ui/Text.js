import React from 'react';
import { useColorScheme } from 'react-native';
import { Text, StyleSheet } from 'react-native';

export default function MyText(props) {
    const colorScheme = useColorScheme();

    const style = StyleSheet.create({
        color: colorScheme == 'light' ? '#000' : '#fff',
    });

    return (
        <Text style={style} {...props}>
            {props.children}   
        </Text>
    );
}