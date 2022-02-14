import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const [services, setservices] = useState([]);
    useEffect( () => {
        fetch('./servicesdata.json')
        .then(res => res.json())
        .then(data => setservices(data))
        // console.log(users);
    } , [])
    return (
        <div id="services" >
            <div className="services-header">
                <> <h2> Our Services </h2></>
                 <><small>home/services</small></>
            </div>
           <div className="services-container">
            {
                services.map(user => <Service
                     key={user.id}
                     user={user}>           
                     </Service>)
            }
           </div>
        </div>
    );
};

export default Services;