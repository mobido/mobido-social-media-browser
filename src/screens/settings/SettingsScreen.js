import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { ScreenView, RadioButton, SectionHeader, Section } from '../../ui'
import { setTheme } from '../../redux/themeSlice'

export default ({}) => {
    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme);

    return (
        <ScreenView>
            <SectionHeader title="Theme" />
            <Section>
                <RadioButton
                      onPress={() => dispatch( setTheme('dark'))}
                      selected={theme == 'dark'}
                      key={1}>
                      Dark
                </RadioButton>
                <RadioButton
                      onPress={() => dispatch( setTheme('light'))}
                      selected={theme == 'light'}
                      key={2}>
                      Light
                </RadioButton>
                <RadioButton
                      onPress={() => dispatch( setTheme('default'))}
                      selected={theme == 'default'}
                      key={3}>
                      Default
                </RadioButton>
            </Section>
        </ScreenView>
    );
}