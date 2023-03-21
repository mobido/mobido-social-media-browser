import * as React from 'react'
import { View, Text } from 'react-native'

export default class PersonaListScreen extends React.PureComponent {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Persona List</Text>
			</View>
		);
	}
}
