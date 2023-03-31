import React from 'react'
import { ScreenView, Text, DisclosureRow } from '../ui'

export default ({ navigation }) => {
    return (
        <ScreenView>
        	<DisclosureRow onPress={() => navigation.navigate('Settings')}>
    			<Text>Settings</Text>
    		</DisclosureRow>
        </ScreenView>
    );
}