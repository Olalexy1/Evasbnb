import React from 'react';
import Slider from "react-slick";

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import { FaBed, FaBath, FaWifi, FaUser } from 'react-icons/fa';
import { IoBed } from 'react-icons/io5';
import { MdFreeBreakfast } from 'react-icons/md';
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
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
          breakpoint: 786,
          settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          }
      },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 1,
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
        <Container className='slick-carousel my-5'>
        <h3 className='py-3'>All Our Rooms</h3>
        <Slider {...settings}>
            <div className='carousel-card'>
              <img src={RedRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Red Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>

            <div>
              <img src={PurpleRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Purple Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>

            <div>
              <img src={GreenRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Green Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>

            <div>
              <img src={RedRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Red Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>

            <div>
              <img src={GreenRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Green Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>

            <div>
              <img src={PurpleRoom} alt=""/>
              <div className="text-container py-2">
                <a href=''><b>Purple Room</b></a>
                <ul>
                    <li><IoBed className='icon'/> 1 Double Bed</li>
                    <li><FaBath className='icon'/> 1 Bathroom</li>
                    <li><FaWifi className='icon'/> Wifi </li>
                </ul>
                <ul>
                    <li><FaUser className='icon'/> 2 Adults</li>
                    <li><MdFreeBreakfast className='icon'/> Breakfast </li>
                </ul>
                <span className='amt'>ZAR 250</span> <span className='night'> / Night</span>
              </div>
            </div>
        </Slider>

        <button className="cssbuttons-io mt-5">
            <a href=''> <span> View All Rooms </span> </a>
        </button>
        </Container>
    </Container>
  );
};

export default Slickcarousel;