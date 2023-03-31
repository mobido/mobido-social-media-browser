import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { useColorTheme } from '../style/Colors'
import GlobalStyle from '../style/Style'

export default (props) => {
    const { colors } = useColorTheme();

    const style = StyleSheet.create({
        color: colors.text,
        ...GlobalStyle.mediumText,
        ...props.style,
    });

    // remove style, otherwise expansion in Text will override our style property
    const filteredProps = { ...props };
    delete filteredProps.style;

    return (
        <Text style={style} {...filteredProps}>
            {props.children}   
        </Text>
    );
}