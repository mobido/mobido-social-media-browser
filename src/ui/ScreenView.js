import React from 'react';
import { View, StyleSheet } from 'react-native';

import { useColorTheme } from '../style/Colors'

export default function ScreenView({ children }) {

    const { colors } = useColorTheme();

    const style = StyleSheet.create({
        flex: 1,
        backgroundColor: colors.background,
        padding: 0,
        margin: 0
    });

    return (
        <View style={style}>
            {children}
        </View>
    );
}