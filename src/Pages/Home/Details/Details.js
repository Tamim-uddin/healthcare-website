import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
    const {serviceId} = useParams();
    const [detail, setdetail] = useState([]);
    useEffect( () => {
        // const url = `/servicesdata.json/${serviceId}`
        fetch('/servicesdata.json')
        .then(res => res.json())
        .then(data => setdetail(data));
    } , [])

    return (
        <div>
            <h2>from details {serviceId}</h2>
            <h3>name: {detail?.name}</h3>
        </div>
    );
};

export default Details;