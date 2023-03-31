import React, { PureComponent } from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { useColorTheme } from '../style/Colors'

// props:
// - style
// - icon: alternative icon, optional
// - onPress()
export default ({ style, onPress, children, icon }) => {
    const { colors } = useColorTheme()
    icon = icon || <Icon name={'chevron-forward-outline'} size={26} color={colors.text} />

    return (
        <TouchableOpacity style={[style,Style.container]} onPress={onPress}>
            <View style={Style.children}>
                {children}
            </View>
            {icon} 
        </TouchableOpacity>
    )
}

const Style = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4
    },
    children: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
});