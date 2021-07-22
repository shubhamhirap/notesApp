import { READ_NOTES, CREATE_NOTES, EDIT_NOTES, DELETE_NOTES } from "../constants"

export const readNotes = () => {
    return {
        type: READ_NOTES
    }
}

export const createNote = (note) => {
    return {
        type: CREATE_NOTES,
        payload: note
    }
}

export const editNote = (id) => {
    return {
        type: EDIT_NOTES,
        payload: id
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTES,
        payload: id
    }
}

