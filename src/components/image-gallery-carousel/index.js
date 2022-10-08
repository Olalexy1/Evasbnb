import React from 'react';
import Slider from "react-slick";

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';

import Container from 'react-bootstrap/Container';
import './style.scss'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#B5B5B6", borderRadius:"100%" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#B5B5B6", borderRadius:"100%" }}
        onClick={onClick}
      />
    );
  }

const Slickcarousel = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        infinite: true,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        pauseOnFocus: true,
        swipeToSlide: true,
        focusOnSelect: true,
        // slickGoTo:,
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

// $(".zoom-it").on('mouseenter')(function(){
//     var $this = $(this);
//     var position = $this.offset();
//     $this.clone()
//         .addClass('scaled')
//         .insertAfter($(".my-slider"))
//         .css({left: position.left, top: position.top});
// });

// $(document).on('mouseleave', ".zoom-it.scaled", function(){
//     $(this).remove();
// });


  return (
    <Container fluid className='slick-carousel my-5'>
        <Slider {...settings}>
            <div className='carousel-card'>
              <img src={RedRoom} alt="" className='zoom-it'/>
            </div>

            <div>
              <img src={PurpleRoom} alt="" className='zoom-it'/>
            </div>

            <div>
              <img src={GreenRoom} alt=""/>
            </div>

            <div>
              <img src={RedRoom} alt=""/>
            </div>

            <div>
              <img src={GreenRoom} alt=""/>
            </div>

            <div>
              <img src={PurpleRoom} alt=""/>
            </div>
        </Slider>
    </Container>
  );
};

export default Slickcarousel;