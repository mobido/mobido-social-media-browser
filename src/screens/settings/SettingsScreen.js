import * as React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'

class SettingsScreen extends React.PureComponent {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Settings Screen</Text>
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
    login: state.login,
    theme: state.theme,
    user: state.user,
    expert: state.expert,
});
export default connect(mapStateToProps)(SettingsScreen);