import {
    StyleSheet,
    Platform,
} from 'react-native'

const MediumText = {
    fontSize: 18,
    //fontFamily: 'Nunito',   
}

export default StyleSheet.create({

    // big and small items ()
    bigText: {
        fontSize: 26,
        //fontFamily: 'Nunito',
    },
    mediumText: {
        ...MediumText,
    },
    smallText: {
        fontSize: 14,
        //fontFamily: 'Nunito',
    },
    tinyText: {
        fontSize: 9,
        //fontFamily: 'Nunito',
    },

    //
    // standard layouts
    //
    
    // normal borders for screen content
    screenContent: {
        flex: 1,
        marginLeft: 8,
        marginRight: 8,
        paddingTop: 8,
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: Platform.OS === 'android' ? 8 : 0,
        marginBottom: Platform.OS === 'android' ? 8 : 0,
    },

    toggleRow: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        alignItems: 'center'
    },
    
    toggleLabel: {
        marginLeft: 8
    },

    inputField: {
        padding: 8,
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1,
        marginBottom: 8,
        backgroundColor: 'white'
    },
    
    disclosureRow: {
        height: 40,
    },
    disclosureText: {
        ...MediumText,
        marginLeft: 8,
    },
});