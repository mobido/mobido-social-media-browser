import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

import { useColorTheme } from '../style/Colors'
import GlobalStyle from '../style/Style'


// props:
// - title:
export default ({ title }) => {
	const { colors } = useColorTheme();
    const { sectionHeaderBackground, sectionHeaderText } = colors;

    const viewStyle = [Style.headerRow,{ backgroundColor:sectionHeaderBackground }];
    const textStyle = [GlobalStyle.mediumText,Style.text,{ color:sectionHeaderText }];

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{title}</Text>
        </View>
    );
};

const Style = StyleSheet.create({
    headerRow: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    text: {
        padding: 4,
        marginLeft: 8,
        flexGrow: 1 
    },
});
