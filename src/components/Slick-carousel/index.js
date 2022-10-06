import React from 'react';
import Slider from "react-slick";

import slider1 from '../../images/arthur-hickinbotham.jpg';
import slider2 from '../../images/cara-grobbelaar.jpg';
import slider3 from '../../images/harry-cunningham.jpg';
// import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';

import './style.scss'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

const Slickcarousel = () => {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipeToSlide: true,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
        ]
    };

  

  return (
    <Container fluid className='slick-container py-5'>
        <Container className='slick-carousel'>
        <h3 className='py-3'>All Our Rooms</h3>
        <Slider {...settings}>
            <div><img src={slider1} alt=""/></div>
            <div><img src={slider2} alt=""/></div>
            <div><img src={slider3} alt=""/></div>
            <div><img src={slider2} alt=""/></div>
            <div><img src={slider3} alt=""/></div>
        </Slider>
        <button className="cssbuttons-io mt-5">
            <a href=''> <span> View All Rooms </span> </a>
        </button>
        </Container>
    </Container>
  );
};

export default Slickcarousel;