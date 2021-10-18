import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setdoctors] = useState([]);
    useEffect( () => {
        fetch('./doctorsdata.json')
        .then(res => res.json())
        .then(data => setdoctors(data));
    } , [])
    return (
        <div id="doctors">
            
            <div className="services-header">
                <> <h2> Our Doctors </h2></>
                 <><small>home/doctors</small></>
            </div>
            <div className="services-container">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </div>
        </div>
    );
};

export default Doctors;