import axios from 'axios';

export default {
    query,
    getNoteById,
    remove,
    save
}


async function query(search) {
    const notesToRender = await axios.get('http://localhost:5000/api/note').then(res => res.data);
    return notesToRender;
}

async function getNoteById(noteId) {
    const notes = await axios.get('http://localhost:5000/api/note').then(res => res.data);   
    const note = notes.find((note) => note._id === noteId)
    return { ...note }
}

 function remove(noteId) {
    return axios.delete(`http://localhost:5000/api/note/${noteId}`);   
}


async function save(noteEdit) {
    console.log('save -> noteEdit', noteEdit)
    
    if (noteEdit._id) {
        await axios.put(`http://localhost:5000/api/note/${noteEdit._id}`, {...noteEdit}).then(res => res.data);   
    } else {
        console.log('noteEdit', noteEdit);
        const res = await axios.post('http://localhost:5000/api/note', noteEdit).then(res => res.data);  
        return res; 
    }
    // return Promise.resolve({ ...noteEdit });
    return {...noteEdit}
}

// function _makeId(length = 10) {
//     var text = "";
//     var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//     for (var i = 0; i < length; i++) {
//         text += possible.charAt(Math.floor(Math.random() * possible.length));
//     }
//     return text;
// }















