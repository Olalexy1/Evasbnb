import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const bookingApiHeaders = {
    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
}

const baseUrl = "https://booking-com.p.rapidapi.com";

// const createRequest = (url) => ({ url, headers: bookingApiHeaders });

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
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsByLocation: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/hotels/locations', //url of API endpoint
                params: {
                    page: '0',
                    country: 'ng',
                },
                headers: {
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelsInNIgeria: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/hotels', //url of API endpoint
                params: {
                    page: '1',
                    country: 'ng',
                },
                headers: {
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getHotelFacilities: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/hotel-facility-types', //url of API endpoint
                headers: {
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

        getRoomFacilityTypes: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v1/static/room-facility-types', //url of API endpoint
                headers: {
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
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
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
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
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),


        getHotelsSearch: builder.query({
            query: () => ({
                method: 'GET',
                url: '/v2/hotels/search', //url of API endpoint
                params: {
                    order_by: 'popularity',
                    adults_number: '2',
                    checkin_date: '2023-09-27',
                    filter_by_currency: 'AED',
                    dest_id: '11380',
                    locale: 'en-gb',
                    checkout_date: '2023-09-28',
                    units: 'metric',
                    room_number: '1',
                    dest_type: 'district',
                    include_adjacency: 'true',
                    children_number: '2',
                    page_number: '0',
                    children_ages: '5,0',
                    categories_filter_ids: 'class::2,class::4,free_cancellation::1'
                },
                headers: {
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
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
                    'X-RapidAPI-Key': 'b09645cabamsha2abe28b66c7995p1d8094jsn70c68537178e',
                    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com',
                },
            })
        }),

    })
})


// { popularity, AdultsNo, checkInDate, currency, destId, checkOutDate, roomNo, destType, childrenNo }

// getCryptoDetails: builder.query({
//     query: (coinId) => createRequest(`/coin/${coinId}`),
// }),

//     // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
//     getCryptoHistory: builder.query({
//         query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
//     }),

export const {
    useGetCitiesInNgQuery,
    useGetHotelsByLocationQuery,
    useGetHotelsInNIgeriaQuery,
    useGetHotelFacilitiesQuery,
    useGetRoomFacilityTypesQuery,
    useGetListOfDistrictsQuery,
    useGetListOfHotelsQuery,
    useGetHotelsSearchQuery,
    useGetHotelDetailsQuery
} = bookingApi;
