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



    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition(position)
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
        })
    }, [latitude, longitude]);


    const hotelsListParams = {
        units: 'metric',
        room_number: '1',
        longitude: longitude,
        latitude: latitude,
        filter_by_currency: 'AED',
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