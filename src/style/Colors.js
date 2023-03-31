import { useColorScheme } from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import { useSelector } from 'react-redux'

const defaultColors = {
    background: '#FFF',
    text: 'black',

    sectionHeaderBackground: '#ddd',
    sectionHeaderText: 'black',
};

const darkColors = {
    background: '#000',
    text: '#FFF',

    sectionHeaderBackground: '#888',
    sectionHeaderText: 'white',
};

export function useColorTheme() {

    // Can be changed in the settings: light, dark, or default
    // Maybe in the future them will be more options... so it's
    // called 'theme' and not colorScheme
    const settingTheme = useSelector((store) => store.theme);

    // from the device system settings: light, dark, or null
    const deviceColorScheme = useColorScheme();

    // figure out color scheme to use based on settingTheme and device colorScheme
    let colorScheme = settingTheme;
    if( colorScheme == 'default' )
        colorScheme = deviceColorScheme || 'light';

    // construct navigation theme
    const theme = colorScheme == 'dark' ? DarkTheme : DefaultTheme;
    const navigationTheme = {
        ...theme,
        colors: {
            ...theme.colors,
        },
    };

    return {
        navigationTheme,
        colors: colorScheme == 'dark' ? darkColors : defaultColors
    }
}