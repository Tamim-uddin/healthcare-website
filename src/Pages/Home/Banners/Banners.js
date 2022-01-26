import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner5 from '../../../images/banners/banner5.jpg';
import banner10 from '../../../images/banners/banner10.jpg';
import banner8 from '../../../images/banners/banner8.jpg';
import banner4 from '../../../images/banners/banner4.jpg';
import './Banner.css';

const Banners = () => {
    return (
        <>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner5}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3 style={{color:'#1a0000', fontFamily: 'papyrus', fontSize: '40px', fontWeight: '700'}}>Your Health Our First Priority</h3>
                    <p style={{color: '#1a0000', fontFamily: 'Book Antiqua'}}>We Serve Better Than Any Other</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner10}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{color:'#330000', fontFamily: 'papyrus', fontSize: '32px', fontWeight: '600'}}>A Team Of Medical Professionals To Take Care of Your Health</h3>
                    <p style={{color:'black'}}>Consectetur adipiscing elit to take of your health</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner8}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{color:'white', fontFamily: 'papyrus', fontSize: '36px', fontWeight: '600'}}>You Can't Always Be There But We Can</h3>
                    <p>Providing quality care services for over 30 years</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </>
    );
};

export default Banners;