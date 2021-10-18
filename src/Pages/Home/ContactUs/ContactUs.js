import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
    return (
        <div id="contactus">
           <div className="services-header">
                <> <h2> Contact Us </h2></>
                 <><small>home/contactus</small></>
            </div>
            <div className="contact">
                <div className="contact-description">
                    <input type="text" placeholder="Full Name"/>
                    <input type="text" placeholder="Subject"/>
                    <input type="text" placeholder="Email"/>
                    <input type="number" placeholder="Phone"/>
                </div>
                <div className="contact-message">
                    <textarea className="contact-text" name="" id="" cols="125" rows="10" placeholder="Your Message"></textarea><br />
                    <button className="contact-btn">SEND MESSAGE</button>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;