import React from 'react';
import Banners from '../Banners/Banners';
import ContactUs from '../ContactUs/ContactUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
           <Banners></Banners>
           <Services></Services>
           <Doctors></Doctors>
           <ContactUs></ContactUs>
           
        </div>
    );
};

export default Home;