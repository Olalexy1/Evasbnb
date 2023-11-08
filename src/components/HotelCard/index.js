import React from 'react';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './style.scss';
import { FaStar } from 'react-icons/fa';
import hotelFacilities from '../../utils/HotelFacilities';

const HotelCard = ({
    hotel
}) => {

    // console.log(facilities, 'facilities list')

    const facilityData = hotelFacilities?.result || []

    // console.log(hotel.hotel_facilities, 'see hotel data')

    // Create an object to map facility IDs to their names
    const facilityMap = {};
    facilityData.forEach(facility => {
        facilityMap[facility.hotel_facility_type_id] = facility.name;
    });

    const hotelFacilitiesData = hotel.hotel_facilities.split(',');

    // Get the names of the facility IDs in arrayFacility
    const facilityNames = hotelFacilitiesData.map(id => facilityMap[id]);

    // console.log(facilityNames, 'see facilities map')

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

                        {
                            hotel.ribbon_text &&
                            <div className='ribbon-Text'>
                                <span>{hotel.ribbon_text}</span>
                            </div>
                        }

                    </div>
                    <div className="hotel-desc-container">
                        <Card.Title>{hotel.hotel_name}</Card.Title>
                        <p style={{ whiteSpace: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis', }}>{hotel.address_trans}</p>
                        <p>{hotel.district}</p>
                        {
                            hotel.review_score && (
                                <p><FaStar className='icon' /> {hotel.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</p>
                            )
                        }
                        <p>Price: {Math.floor(hotel.min_total_price).toLocaleString('en-US', { style: 'currency', currency: hotel.currency_code }).replace(/\.00$/, '')}</p>
                        <div className='button-container'>
                            <a className='book-now-button' href={hotel.url} target="_blank" rel="noopener noreferrer">Book Now</a>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
