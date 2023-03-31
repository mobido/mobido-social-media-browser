import { createSlice } from '@reduxjs/toolkit'

/**
 *  Persona:
 *  {
 *      nickname: "Bob",
 *      key: {
 *          type: 'ed25519',
 *          id: "2342hj234hg234kh234",
 *          secret: "4erfgwergfvsdegrqwrte",
 *      }
 *  }
 */

const slice = createSlice({
    name: 'personas',
    initialState: [],
    reducerPath: 'personas',
    reducers: {
        add: (state, action) => {
            state.push( action.payload )
        },
        remove: (state, action) => {
            const id = action.payload;
            return state.filter(persona => persona.id != id)
        },
    },
})

export const { add, remove } = slice.actions

export default slice