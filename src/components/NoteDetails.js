import '../style/components/noteDetails.scss';
import React, { Component } from 'react';
import noteService from '../Services/noteService';
import { removeNote } from '../actions/noteActions'
import { editNote } from '../actions/noteActions'
import { connect } from 'react-redux'

// icons
import { ReactComponent as DeleteIcon } from '../assets/icons/delete.svg';
import { ReactComponent as EditIcon } from '../assets/icons/edit.svg';
import { ReactComponent as BackIcon } from '../assets/icons/back.svg';
import { ReactComponent as PaintIcon } from '../assets/icons/painting.svg';

class noteDetails extends Component {
    state = {
        note: {},
        showEdit: false,
        showColors: false
    }

    componentDidMount() {
        this.loadNotes();
        
    }

    loadNotes = async () => {
        let note = await noteService.getNoteById(this.props.match.params.id);
        this.setState({ note })
        
    }

    componentDidUpdate(prevProps) {
        console.log(this.props.match.params.id);

        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadNotes();

        }
    }

    onDeleteTodo = () => {
        this.props.removeNote(this.state.note._id);
        this.props.history.push('/noteApp')
    }

    editNote = (event) => {
        event.preventDefault();
        if (this.state.note._id) {
            this.props.editNote('NOTE_UPDATE', this.state.note);
        }
        else {
            this.props.editNote('NOTE_ADD', this.state.note);
        }
        this.props.history.push('/noteApp');
    }

    handleChange = event => {
        const val = event.target.value
        const note = { ...this.state.note }
        note.info = val
        this.setState({ note })
    }

    showEdit = () => {
        return (
            <form onSubmit={this.editNote} className="flex align-center justify-center">
                <div>
                    <input
                        onChange={this.handleChange}
                        value={this.state.info}
                        name="txt"
                        type="text"
                        onClick={this.handleFocus}
                    />
                </div>
                <button>Save</button>
            </form>
        )
    }

    showDetails = () => {
        // console.log('this.state.note', this.state.note);
        
        return (
            <div>
                <h2>{this.state.note.title}</h2>
                <p>{this.state.note.info}</p>
            </div>
        )
    }

    renderColors = () => {
        return (
            <div className="color-palette-container">
                <div className="redbtn" onClick={() => this.paintBC('red')}></div>
                <div className="bluebtn" onClick={() => this.paintBC('blue')}></div>
                <div className="greenbtn" onClick={() => this.paintBC('green')}></div>
                <div className="yellowbtn" onClick={() => this.paintBC('yellow')}></div>
            </div>
        )
    }

    paintBC = (color) => {
        let newNote = this.state.note;
        newNote.bgColor = color;
        this.setState({ note: newNote });
        this.props.editNote('NOTE_UPDATE', this.state.note);
        this.props.history.push('/noteApp');

    }

    

    render() {
        return (
            <div >
                <div className="noteDetails-container">
                    <div className="noteBody-container">
                        {this.state.showEdit ? this.showEdit() : this.showDetails()}
                    </div>
                    <div className="noteIcons-container flex align-center space-between">
                        <div className="noteIcons-container flex align-center space-between">
                            <BackIcon onClick={() => this.props.history.push('/noteApp')} />
                            <DeleteIcon onClick={this.onDeleteTodo} />
                            <EditIcon onClick={() => this.setState({ showEdit: !this.state.showEdit })} />
                            <PaintIcon onClick={() => this.setState({ showColors: !this.state.showColors })} />
                            {this.state.showColors ? this.renderColors() : null}
                        </div>
                        <p>{this.state.note.time}</p>
                    </div>
                </div>

                <div className="screen" onClick={() => this.props.history.push('/noteApp')}></div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    removeNote,
    editNote
}


export default connect(
    null,
    mapDispatchToProps
)(noteDetails)