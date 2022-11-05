import React, {useState, useEffect} from 'react';
import Slider from "react-slick";

import RedRoom from '../../images/redroom.jpeg';
import PurpleRoom from '../../images/purpleroom.jpeg';
import GreenRoom from '../../images/greenroom.jpeg';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import './style.scss';

import { FaWindowClose } from 'react-icons/fa';



// import {Helmet} from "react-helmet";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#B5B5B6", borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#B5B5B6", borderRadius: "100%" }}
      onClick={onClick}
    />
  );
}

const Slickcarousel = () => {
  const [show, setShow] = useState(false);

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

  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "./modal.js";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);


  return (
    <Container fluid className='my-5' id='room-gallery'>
      <Slider {...settings}>
        <div className='carousel-card'>
          <img src={RedRoom} alt="" className='img' id='myImg' onClick={() => setShow(true)}/>
        </div>

        <div>
          <img src={PurpleRoom} alt="" className='img' />
        </div>

        <div>
          <img src={GreenRoom} alt="" />
        </div>

        <div>
          <img src={RedRoom} alt="" />
        </div>

        <div>
          <img src={GreenRoom} alt="" />
        </div>

        <div>
          <img src={PurpleRoom} alt="" />
        </div>
      </Slider>

      <div id="myModal" class="modal">

         <FaWindowClose className='close'/>

        <img class="modal-content" id="img01" />

      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>

    </Container>
  );
};

export default Slickcarousel;