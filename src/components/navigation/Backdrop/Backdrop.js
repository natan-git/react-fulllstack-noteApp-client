import React from 'react';

// import './Backdrop.css';
import '../../../style/components/Backdrop.scss';

const backdrop = props => (
    <div className="backdrop" onClick={props.click} />
);

export default backdrop;