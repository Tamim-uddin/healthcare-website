import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banners/banner1.jfif';
import banner2 from '../../../images/banners/banner2.jfif';
import banner3 from '../../../images/banners/banner3.jfif';
import './Banner.css';

const Banners = () => {
    return (
        <>
           <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Your Health Our First Priority</h3>
                    <p>We Serve Better Than Any Other</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3 style={{color:'black'}}>A Team Of Medical Professionals To Take Care of Your Health</h3>
                    <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.To take of your health</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>You Can't Always Be There But We Can</h3>
                    <p>Providing quality care services for over 30 years</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel> 
        </>
    );
};

export default Banners;