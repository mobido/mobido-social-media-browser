import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

const wandSource = require('../assets/images/star_wand.png')

export default class LoadingScreen extends PureComponent {
    render() {
        return (
            <View style={Style.container}>
                <Image style={Style.wand} source={wandSource} />
                <Text style={Style.text}>Mobido</Text>
            </View>
        );
    }
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wand: {
        resizeMode: 'contain',
        width: '25%',
        height: '25%',
    },
    text: {
        fontSize: 100,
    }
});
