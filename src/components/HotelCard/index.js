import React from 'react';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import './style.scss';
import { FaStar, FaWifi, FaParking } from 'react-icons/fa';
import { MdRestaurantMenu, MdPool } from 'react-icons/md';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

import hotelFacilities from '../../utils/HotelFacilities';

const label = { inputProps: { 'aria-label': 'Favorite' } };

const HotelCard = ({
    hotel
}) => {

    // console.log(facilities, 'facilities list')

    const facilityData = hotelFacilities?.result || []

    // console.log(hotel.hotel_facilities, 'see hotel data')

    const facilityMap = {};
    facilityData.forEach(facility => {
        facilityMap[facility.hotel_facility_type_id] = facility.name;
    });

    const hotelFacilitiesData = hotel.hotel_facilities.split(',');

    const facilityNames = hotelFacilitiesData.map(id => facilityMap[id]);

    const hasWiFi = facilityNames?.includes("WiFi");
    const hasSwimmingPool = facilityNames?.includes("Swimming pool");
    const hasParking = facilityNames?.includes("Parking");
    const hasRestaurant = facilityNames?.includes("Restaurant");

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

                        <div className='favorite-check'>
                            <Checkbox
                                {...label}
                                icon={<FavoriteBorder />}
                                checkedIcon={<Favorite />}
                                sx={{
                                    color: '#ff0000',
                                    '&.Mui-checked': {
                                        color: '#ff0000',
                                    },
                                }}
                            />
                        </div>

                    </div>
                    <div className="hotel-desc-container">
                        <Card.Title className='hotel-name' style={{ textTransform: "Capitalize" }}>{capitalizeText(hotel.hotel_name)}</Card.Title>
                        <p style={{ textTransform: "Capitalize" }}>{hotel.address_trans || hotel.address}, {hotel.district || hotel.city_trans}, {hotel.country_trans}.</p>
                        {
                            hotel.review_score && (
                                <p className='review'><FaStar className='icon' /> {hotel.review_score.toLocaleString('en-US', { minimumFractionDigits: 1 })}</p>
                            )
                        }
                        <p>Price: {Math.floor(hotel.min_total_price).toLocaleString('en-US', { style: 'currency', currency: hotel.currency_code }).replace(/\.00$/, '')}</p>
                        <div className='button-container'>
                            <Stack direction="horizontal" gap={2} className='amenities-stack'>
                                {hasWiFi && <FaWifi />}
                                {hasSwimmingPool && <MdPool />}
                                {hasParking && <FaParking />}
                                {hasRestaurant && <MdRestaurantMenu />}
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
