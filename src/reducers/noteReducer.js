const INITIAL_STATE = {
    notes: []
};

export function noteReducer(state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case 'SET_NOTES':
            console.log('action.note', action.note);
            return {
                ...state, notes: action.notes
            }
        case 'NOTE_REMOVE':
            return { ...state, notes: state.notes.filter(note => note._id !== action.noteId) }
        case 'NOTE_ADD':
            return {
                ...state, notes: [...state.notes, action.note]
            }
        case 'NOTE_UPDATE':
            return {
                ...state, notes: state.notes.map(note => {
                    // const noteId = note._id.toString();
                    // console.log(typeof noteId)
                    // if (noteId === action.note._id) return action.note
                    
                    if (note._id === action.note._id) return action.note
                    return note
                })
            }
        default: return { ...state }
    }
}
