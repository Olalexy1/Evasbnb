import React from 'react';
import Slider from "react-slick";

import RedRoom from '../../images/redroom.jpeg';

import { FaBed, FaStar, FaWifi, FaUser } from 'react-icons/fa';
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

const Slickcarousel = ({ hotelsList }) => {
  const settings = {
    dots: true,
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
        <h3 style={{textAlign: 'center'}} className='py-3'>More Hotels in Your City Close To You</h3>
        <Slider {...settings}>
          {hotelsList?.map((item, index) => (
            <div className='carousel-card' key={index}>
              <img src={item.max_photo_url} alt="Hotel-Img" />
              <div className="text-container py-2">
                <a href={item.url} style={{ whiteSpace: 'nowrap', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}><b>{item.hotel_name}</b></a>
                <h6 style={{ textTransform: "capitalize"}}>{item.district ? item.district : item.city_name_en}</h6>
                <ul>
                  {
                    item.review_score && (
                      <li><FaStar className='icon' /> {item.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</li>
                    )
                  }
                  <li style={{ textTransform: "capitalize"}}><MdFreeBreakfast className='icon' /> {item.ribbon_text || 'Breakfast Excluded'}</li>
                </ul>
                <span className='amt'>{Math.floor(item.composite_price_breakdown.all_inclusive_amount.value).toLocaleString('en-US', { style: 'currency', currency: item.composite_price_breakdown.all_inclusive_amount.currency }).replace(/\.00$/, '')} </span> <span className='night'> / Night</span>
              </div>
            </div>
          ))}
        </Slider>

        <button className="cssbuttons-io mt-5">
          <a href='#'> <span> View All Hotels </span> </a>
        </button>
      </Container>
    </Container>
  );
};

export default Slickcarousel;