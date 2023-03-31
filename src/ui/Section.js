import React from 'react';
import { View } from 'react-native'

export default ({ children }) => {

	const style = {
		width: '100%',
		marginLeft: 8,
		marginRight: 8,
		marginTop: 4
	}

    return (
        <View style={style}>
            {children}
        </View>
    );
};
