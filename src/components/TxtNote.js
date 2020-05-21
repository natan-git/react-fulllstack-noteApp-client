import '../style/components/txtNote.scss'
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class txtNote extends Component {
    state = {
        hover: false,
        showEdit: false,
    }
    toggleHover = () => {
        this.setState({ hover: !this.state.hover })
    }



    render() {
        return (
            <Link to={`/noteApp/details/${this.props.note._id}`} className="card-link" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}>
                <div className={`card  ${this.props.note.bgColor}`}>
                    <div>
                        <h3 className="card-title black-text">{this.props.note.title}</h3>
                        <span className="card-info black-text">{this.props.note.info}</span>
                    </div>
                </div>
            </Link>

        )
    }
}

export default txtNote;


