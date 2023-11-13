import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const currencyApiKey = process.env.REACT_APP_CURRENCY_CONVERTER_API_KEY

export const currencyApi = createApi({
    reducerPath: 'currencyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://currencyapi-net.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCurrencyRates: builder.query({
            query: (params) => {
                if (!params) {
                    // If params are not defined, return an empty object
                    return {};
                }

                return {
                    method: 'GET',
                    url: '/rates',
                    params: {
                        ...params
                    },
                    // params: {
                    //     output: 'JSON',
                    //     base: 'USD'
                    // },
                    headers: {
                        'X-RapidAPI-Key': currencyApiKey,
                        'X-RapidAPI-Host': 'currencyapi-net.p.rapidapi.com',
                    },
                };
            },
        }),
    }),
});

export const {
    useGetCurrencyRatesQuery
} = currencyApi;