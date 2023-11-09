import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './style.scss';
import { FaStar, FaWifi, FaParking } from 'react-icons/fa';
import { MdRestaurantMenu, MdPool } from 'react-icons/md';
import Button from '@mui/material/Button';

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

    console.log(facilityNames, 'see facilities map')

    const hasWiFi = facilityNames?.includes("WiFi");
    const hasSwimmingPool = facilityNames?.includes("Swimming pool");
    const hasParking = facilityNames?.includes("Parking");
    const hasRestaurant = facilityNames?.includes("Restaurant");

    console.log(hotel, 'see hotel')

    const capitalizeText = (text) =>
        text
            .toLowerCase()
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

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
                        <Card.Title style={{ textTransform: "Capitalize" }}>{capitalizeText(hotel.hotel_name)}</Card.Title>
                        <p>{hotel.address_trans}.</p>
                        <p>{hotel.district || hotel.city_trans }</p>
                        {
                            hotel.review_score && (
                                <p className='review'><FaStar className='icon' /> {hotel.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</p>
                            )
                        }
                        <p>Price: {Math.floor(hotel.min_total_price).toLocaleString('en-US', { style: 'currency', currency: hotel.currency_code }).replace(/\.00$/, '')}</p>
                        <div className='button-container'>
                            <Stack direction="horizontal" gap={3}>
                                {hasWiFi && <FaWifi/>}
                                {hasSwimmingPool && <MdPool/>}
                                {hasParking && <FaParking/>}
                                {hasRestaurant && <MdRestaurantMenu/>}
                            </Stack>
                            <a className='button' href={hotel.url} target="_blank" rel="noopener noreferrer">Book Now</a>
                        </div>
                    </div>
                </div>
            </Card.Body>
        </Card>
    );
};

export default HotelCard;
