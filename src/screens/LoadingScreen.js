import React, { PureComponent } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
} from 'react-native';

const logoSource = require('../assets/images/logo_round.png')

export default class LoadingScreen extends PureComponent {
    render() {
        return (
            <View style={Style.container}>
                <Image style={Style.logo} source={logoSource} />
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
    logo: {
        resizeMode: 'contain',
        width: '25%',
        height: '25%',
    },
    text: {
        fontSize: 60,
    }
});
