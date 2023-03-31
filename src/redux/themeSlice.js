import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'theme',
    initialState: 'default',
    reducerPath: 'theme',
    reducers: {
        setTheme: (state, action) => {
            return action.payload;
        }
    },
})

export const { setTheme } = slice.actions

export default slice