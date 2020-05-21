import React, { Component } from 'react';

import { loadNotes } from '../actions/noteActions';
import { connect } from 'react-redux';

import { Route } from "react-router-dom";

import AddNote from '../components/AddNote';
import NoteList from '../components/NoteList';
import NoteDetails from '../components/NoteDetails';


class noteApp extends Component {
    state = { search: '', showNoteDetails: false };

    componentDidMount() {
        this.loadNotes()
    }


    loadNotes = () => {
        this.props.loadNotes(this.state.search);
    }



    render() {
        return (
            <div>
                <AddNote onSubmit={this.onFormSubmit} />
                {this.props.notes && <NoteList notes={this.props.notes} />}

                <Route exact path="/noteApp/details/:id" component={NoteDetails} />

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes.notes
    }
}
const mapDispatchToProps = {
    loadNotes
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(noteApp)