import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';

import Spinner from 'react-bootstrap/Spinner';
import Stack from 'react-bootstrap/Stack';

import Banner from '../../components/Banner';
import { PopularHotels } from '../../components/Section';
import Slickcarousel from '../../components/Slick-carousel';
import Blogcards from '../../components/Blog-cards';
import { Subform, Inqiuryform } from '../../components/Forms';

import { useGetHotelsByCoordinatesQuery } from '../../services/bookingApi';

import { useCountry } from '../../context/countryContext'; 

const Homepage = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    const nextTomorrow = new Date(today)
    tomorrow.setDate(today.getDate() + 1);
    nextTomorrow.setDate(today.getDate() + 2);
    const todayISO = new Date().toISOString().split('T')[0];
    const tomorrowISO = tomorrow.toISOString().split('T')[0];
    const nextTomorrowISO = nextTomorrow.toISOString().split('T')[0];
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [position, setPosition] = useState('');
    const { country, setCountry } = useCountry();

    console.log(country, 'see country')

    const googleApiKey = process.env.REACT_APP_GOOGLE_API_KEY

    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition(position)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [latitude, longitude]);

    useEffect(() => {
        if (latitude !== null && longitude !== null) {
            const fetchCountryFromCoordinates = async () => {
                try {
                    const response = await fetch(
                        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleApiKey}`
                    );

                    if (!response.ok) {
                        throw new Error('Failed to fetch data');
                    }

                    const data = await response.json();

                    const result = data.results[0];
                    const countryComponent = result.address_components.find(
                        (component) => component.types.includes('country')
                    );

                    if (countryComponent) {
                        setCountry(countryComponent.long_name);
                    }
                } catch (error) {
                    console.error('Error fetching country:', error);
                }
            };

            fetchCountryFromCoordinates();
        }
    }, [latitude, longitude, setCountry]);


    const hotelsListParams = {
        units: 'metric',
        room_number: '1',
        longitude: longitude,
        latitude: latitude,
        filter_by_currency: 'USD',
        order_by: 'popularity',
        locale: 'en-gb', //make dynamic later
        checkout_date: nextTomorrowISO,
        adults_number: '1',
        checkin_date: tomorrowISO,
        include_adjacency: 'true',
        categories_filter_ids: 'class::2,class::4,free_cancellation::1'
    }

    const { data: HotelsList, error, isLoading } = useGetHotelsByCoordinatesQuery(hotelsListParams);

    if (isLoading) return (
        <Stack direction='row' style={{ alignItems: 'center' }}>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Stack>
    )

    const hotels = HotelsList?.result || [];

    const filteredHotelsByReview = hotels?.filter(hotel => hotel.review_score >= 8 && hotel.accommodation_type_name === 'Hotel')

    const filteredHotels = hotels?.filter(hotel => hotel.accommodation_type_name === 'Hotel')

    // console.log(filteredHotels, 'Filtered Hotels');

    const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const shuffledData = shuffleArray(filteredHotelsByReview);

    let randomHotels;

    if (shuffledData) {
        if (shuffledData.length >= 6) {
            randomHotels = shuffledData.slice(0, 6);
        } else {
            randomHotels = shuffledData.slice(0, 3);
        }
    } else {
        randomHotels = [];
    }


    const hotelsInCity = filteredHotels?.slice(0, 12);

    return (
        <Container fluid className='px-0 mx-0'>
            <Banner />
            <PopularHotels randomHotels={randomHotels} />
            <Slickcarousel hotelsList={hotelsInCity} />
            <Blogcards />
            <Subform />
        </Container>
    );
}

export default Homepage;