import React from 'react'
import { useColorScheme } from 'react-native'
import { Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ScreenView from '../ui/ScreenView'
import Text from '../ui/Text'

export default function HomeScreen({ navigation }) {
    const dispatch = useDispatch();
    const count = useSelector((store) => store.personas);

    return (
        <ScreenView>
            <Text>Home Screen: {count}</Text>
            <Button
                title="Go to Settings"
                onPress={() => navigation.navigate('So')}
            />
        </ScreenView>
    );
}


