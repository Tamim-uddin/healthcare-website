import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Details.css';


const Details = () => {
    const {serviceId} = useParams();
    const [details, setdetails] = useState({});
    useEffect( () => {
        // const url = `/servicesdata.json/${serviceId}`
        fetch(`/servicesdata.json/${serviceId}`)
        .then(res => res.json())
        .then(data =>setdetails(data));
    } , [])

    return (
        <div className='detail'>
            <h3>ServiceId: {serviceId}</h3>
            <h3>name: {details?.name}</h3>
        </div>
    );
};

export default Details;