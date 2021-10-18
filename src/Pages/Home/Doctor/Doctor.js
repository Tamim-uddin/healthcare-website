import React from 'react';
import './Doctor.css';

const Doctor = (props) => {
    const {id, name, qualify, pic} = props.doctor;
    return (
        <div className="service">
             <img src={pic} alt="" />
            <h3> {name}</h3>
            <p>{qualify}</p>
        </div>
    );
};

export default Doctor;