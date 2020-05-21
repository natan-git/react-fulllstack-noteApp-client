import React, { Component } from 'react';
import '../style/pages/homePage.scss'
import bg_pattern_home_1 from '../assets/images/bg-pattern-home-1.svg'
import bg_pattern_home_2 from '../assets/images/bg-pattern-home-2.svg'

class homePage extends Component {
    render() {
        return (
            <section className="greet-text flex space-between">
                <div className="box-1 flex ">
                    <img className="Build-and-manage-pic" src={bg_pattern_home_1} alt="img"/>
                    <h4>Capture ideas <br />&<br /> inspiration in <span>notes</span></h4>
                </div>
                <div className="box-2 flex col ">
                    <p>Take notes anywhere. Find information faster. Share ideas with anyone. Meeting notes, web pages, projects, to-do lists—with Evernote as your note taking app, nothing falls through the cracks.</p>
                    <img className="Build-and-manage-pic" src={bg_pattern_home_2} alt="img"/>
                </div>
            </section>
        )
    }
}

export default homePage;
