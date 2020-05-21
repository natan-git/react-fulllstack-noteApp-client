import React, { Component } from 'react';
import '../style/index.scss'
import TxtNote from './TxtNote';


class NoteList extends Component {
    onClickHandler = (noteId) => {
        this.props.openNoteDetails(noteId);
    }

    renderNotes() {
        return <section className="container flex wrap flex-start">
            {/* <div className="m-auto"> */}
                {this.props.notes.map(note => <TxtNote key={note._id} note={note} />)}
            {/* </div> */}
        </section>
    }


    render() {
        return (
            <div className="M">
                {this.renderNotes()}
            </div>
        )
    }
}

export default NoteList;