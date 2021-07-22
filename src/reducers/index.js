import { READ_NOTES, CREATE_NOTES, EDIT_NOTES, DELETE_NOTES } from "../constants"

const initialState = []

export const indexReducer = (state = initialState, action) => {
    switch (action.type) {
        case READ_NOTES:
            return state;
        case CREATE_NOTES:
            return [
                ...state,
                action.payload
            ]
        case EDIT_NOTES:
            return [...state.map(note => {
                if (note.id === action.payload.id) {
                    return {
                        ...note,
                        ...action.payload
                    }
                } else {
                    return note
                }
            })]
        case DELETE_NOTES:
            return state.filter(note => note.id !== action.payload)
        default:
            return state;

    }
}