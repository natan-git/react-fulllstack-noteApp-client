import noteService from '../Services/noteService';

function setNotes(notes) {
  return {
    type: 'SET_NOTES',
    notes,
  };
}

/// GET NOTES
export function loadNotes(search) {
  return function (dispatch) {
    // return noteService.query(search)
    //     .then(notes => {
    //         dispatch(setNotes(notes))
    //     })
    return noteService.query(search).then((notes) => {
      dispatch(setNotes(notes));
    });
  };
}

// REMOVE NOTES

export function removeNote(noteId) {
  return function (dispatch) {
    return noteService.remove(noteId).then(() => {
      dispatch({ type: 'NOTE_REMOVE', noteId });
    });
  };
}

// UPDATE NOTE

export function editNote(type, note) {
  console.log('editNote -> note', note)
  return function (dispatch) {
    const title = note.title
    const info = note.info
    return noteService.save(note, {title, info }).then((note) => {
      dispatch({ type, note });
    });
  };
}
