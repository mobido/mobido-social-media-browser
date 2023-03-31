import React from 'react'
import { useColorScheme } from 'react-native'
import { View, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ScreenView from '../ui/ScreenView'
import Text from '../ui/Text'

import { add, remove } from '../redux/personasSlice'

function PersonaRow(persona,i) {
    return (
        <View key={i}>
            <Text>{persona.id}</Text>
        </View>
    )
}

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const personas = useSelector((store) => {
        return store.personas
    });

    return (
        <ScreenView>
            <Text>Home Screen: {personas.length}!</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('So')}
            />
            <Button
                title="Add"
                onPress={() => dispatch( add({id:1}) )}
            />
            <Button
                title="Remove"
                onPress={() => dispatch( remove(1) )}
            />
            {personas.map(PersonaRow)}
        </ScreenView>
    );
}


