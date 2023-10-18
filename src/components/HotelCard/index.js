import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './style.scss';
import { FaStar } from 'react-icons/fa';

const HotelCard = ({
    hotel,
}) => {
    return (
        <Card>
            <Card.Body>
                <div className="hotel-card">
                    <div className="image-container">

                        <img
                            className="d-block w-100"
                            src={hotel.max_1440_photo_url}
                            alt={hotel.hotel_name}
                        />
                    </div>
                    <div className="hotel-desc-container">
                        <Card.Title>{hotel.hotel_name}</Card.Title>
                        <p style={{ whiteSpace: 'nowrap', display: 'inline-block', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '100%' }}>{hotel.address_trans}</p>
                        <p>{hotel.district}</p>
                        {
                            hotel.review_score && (
                                <p><FaStar className='icon' /> {hotel.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</p>
                            )
                        }
                        <p>Price: {Math.floor(hotel.min_total_price).toLocaleString('en-US', { style: 'currency', currency: hotel.currency_code }).replace(/\.00$/, '')}</p>
                        <a href={hotel.url} target="_blank" rel="noopener noreferrer">Book Now</a>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
