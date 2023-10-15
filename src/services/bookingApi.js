import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiKey = process.env.REACT_APP_BOOKING_API_KEY

export const bookingApi = createApi({
    reducerPath: 'bookingApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-com.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCitiesInNg: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/cities', //url of API endpoint
                params: {
                    country: 'ng',
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsByLocation: builder.query({
            query: (params) => ({
                method: 'GET',
                url: '/v1/hotels/locations', //url of API endpoint
                params: {
                   ...params
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsInNIgeria: builder.query({
            query: (params) => ({
                method: 'GET',
                url: '/v1/static/hotels', //url of API endpoint
                params: {
                    ...params
                },
                // params: {
                //     country: 'ng',
                // },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelFacilitiesTypes: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/hotel-facility-types', //url of API endpoint
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelType: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/hotel-types', //url of API endpoint
                params: {
                    hotel_id: '8981002',
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getRoomFacilityTypes: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/room-facility-types', //url of API endpoint
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getListOfDistricts: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/districts', //url of API endpoint
                params: {
                    country: 'ng',
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getListOfHotels: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/hotels', //url of API endpoint
                params: {
                    country: 'ng',
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),


        getHotelsSearch: builder.query({
            query: (params) => ({
                method: 'GET',
                url: '/v1/hotels/search', //url of API endpoint
                params: {
                    ...params
                },
                // params: {
                //     checkin_date: '2023-09-27',
                //     dest_type: 'hotel',
                //     units: 'metric',
                //     checkout_date: '2023-09-28',
                //     adults_number: '2',
                //     order_by: 'popularity',
                //     dest_id: '-553173',
                //     filter_by_currency: 'AED',
                //     locale: 'en-gb',
                //     room_number: '1',
                //     children_number: '2',
                //     children_ages: '5,0',
                //     categories_filter_ids: 'class::2,class::4,free_cancellation::1',
                //     page_number: '0',
                //     include_adjacency: 'true'
                // },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelDetails: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v2/hotels/details', //url of API endpoint
                params: {
                    hotel_id: '8981002',
                    currency: 'NGN',
                    locale: 'en-gb',
                    checkout_date: '2023-09-28',
                    checkin_date: '2023-09-27'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelOnTheMap: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/map-markers', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelDescription: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v2/hotels/description', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelData: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/data', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelPhotos: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/photos', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelNearbyPlaces: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/nearby-places', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getLocationHighlightOfHotel: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/location-highlights', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelFacilities: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/facilities', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getRoomListOfHotel: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/room-list', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    currency: 'NGN',
                    checkout_date: '2023-09-28',
                    locale: 'en-gb',
                    checkin_date: '2023-09-27',
                    adults_number_by_rooms: '3,1',
                    units: 'metric',
                    children_ages: '5,0,9',
                    children_number_by_rooms: '2,1'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getReviewMetaDataOfHotel: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/reviews-filter-metadata', //url of API endpoint
                params: {
                    hotel_id: '1676161',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getExchangeRates: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/metadata/exchange-rates', //url of API endpoint
                params: {
                    currency: 'NGN',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsByCoordinates: builder.query({
            query: (params) => ({
                method: 'GET',
                url: '/v1/hotels/search-by-coordinates', //url of API endpoint
                params: {
                    ...params
                },
                // params: {
                //     units: 'metric',
                //     room_number: '1',
                //     longitude: '3.4308096',
                //     latitude: '6.4520192',
                //     filter_by_currency: 'AED',
                //     order_by: 'popularity', //popularity, class_ascending, class_descending, distance, upsort_bh, review_score, price
                //     locale: 'en-gb',
                //     checkout_date: '2023-09-30',
                //     adults_number: '2',
                //     checkin_date: '2023-09-29',
                //     include_adjacency: 'true',
                //     categories_filter_ids: 'class::2,class::4,free_cancellation::1'
                // },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsSearchLocations: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/locations', //url of API endpoint
                params: {
                    name: 'Lekki',
                    locale: 'en-gb'
                },
                headers: {
                    'X-RapidAPI-Key': ApiKey,
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),


    })
})

export const {
    useGetCitiesInNgQuery,
    useGetHotelsByLocationQuery,
    useGetHotelsInNIgeriaQuery,
    useGetHotelFacilitiesTypesQuery,
    useGetRoomFacilityTypesQuery,
    useGetListOfDistrictsQuery,
    useGetListOfHotelsQuery,
    useGetHotelsSearchQuery,
    useGetHotelDetailsQuery,
    useGetHotelOnTheMapQuery,
    useGetHotelDescriptionQuery,
    useGetHotelTypeQuery,
    useGetHotelDataQuery,
    useGetHotelPhotosQuery,
    useGetLocationHighlightOfHotelQuery,
    useGetRoomListOfHotelQuery,
    useGetHotelFacilitiesQuery,
    useGetReviewMetaDataOfHotelQuery,
    useGetExchangeRatesQuery,
    useGetHotelsByCoordinatesQuery,
    useGetHotelsSearchLocationsQuery,
} = bookingApi;
