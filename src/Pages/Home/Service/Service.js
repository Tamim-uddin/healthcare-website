import React from 'react';
import { Link } from 'react-router-dom';
import './service.css';

const Service = (props) => {
    // console.log(props);
    const {id, name, description, img} = props.user;
    return (
        <div className="service">
            <img src={img} alt="" />
            <h3> {name}</h3>
            <p>{description}</p>
            <Link to={`/details/${id}`}><button>Details</button></Link>
        </div>
    );
};

export default Service;