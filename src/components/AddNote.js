import '../style/components/addNote.scss'
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { editNote } from '../actions/noteActions.js'

class addNote extends Component {
    state = {
        note: { type: 'TXT', isPinned: false, style: null, info: '', title: '', time: '' },
        showInput: false,
        showCancel: false,
        placeholder: 'Take a note...'
    };

    componentDidMount() {
        this.saveTime();
    }


    handleFocus = (event) => {
        this.setState({ showInput: true })
        this.setState({ showCancel: true })
        this.setState({ showSave: true })
        this.setState({ placeholder: 'Title' })
        event.target.select();
    }


    saveNote = (event) => {
        event.preventDefault();
        if (!this.state.note.info) return;
        let newNote = {...this.state.note}
        this.saveTime();
        console.log('newNote', newNote);
        
        this.props.editNote('NOTE_ADD', newNote);
        // this.setState({note: newNote})
        this.setState({ showInput: false })
        this.myFormRef.reset();
        // newNote.info = null;
    }

    handleInfoChange = event => {
        const val = event.target.value
        const note = { ...this.state.note }
        note.info = val
        this.setState({ note })
    }
    handleTitleChange = event => {
        const val = event.target.value
        const note = { ...this.state.note }
        note.title = val
        this.setState({ note })
    }

    renderInputs = () => {
        return (
            <input onChange={this.handleInfoChange} type="text" placeholder="Take a note..." defaultValue="" />
        )
    }

    closeForm = () => {
        this.setState({ showInput: false })
        this.setState({ showCancel: false })
        this.setState({ showSave: false })
        this.setState({ placeholder: 'Take a note...' })
        this.myFormRef.reset(); // reset form to default placeholder
    }

    saveTime = () => {
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var d = new Date();
        // var day = days[d.getDay()];
        var hr = d.getHours();
        var min = d.getMinutes();
        if (min < 10) {
            min = "0" + min;
        }
        var ampm = "AM";
        if (hr > 12) {
            hr -= 12;
            ampm = "PM";
        }
        var date = d.getDate();
        var month = months[d.getMonth()];
        var year = d.getFullYear();

        var timeStr = `${date.toString()} ${month.toString()} ${year.toString()}  ${hr.toString()}:${min.toString()} ${ampm.toString()}`;
        let note = { ...this.state.note };
        note.time = timeStr;
        this.setState({ note });
    }


    render() {
        return (
            <div className="flex align-center justify-center">
                <div className="input-container flex col ">

                    <form ref={(el) => this.myFormRef = el} onSubmit={this.saveNote}>
                        <div className="flex col justify-center align-center">
                            <input
                                onChange={this.handleTitleChange}
                                placeholder={this.state.placeholder}
                                name="txt"
                                type="text"
                                onClick={this.handleFocus}
                            />
                            {this.state.showInput ? this.renderInputs() : null}
                        </div>
                    </form>

                    <div className="btn-conatiner flex space-between">
                        {this.state.showSave ? <button className="btn" onClick={this.saveNote}>Save</button> : null}
                        {this.state.showCancel ? <button className="btn" onClick={this.closeForm}>Close</button> : null}
                    </div>

                </div>
            </div>
        )
    }
}

const mapDispatchToProps = {
    editNote
}

export default connect(
    null,
    mapDispatchToProps
)(addNote)