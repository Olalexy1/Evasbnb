import React, { createContext, useContext, useState } from 'react';

const CountryContext = createContext();

export function useCountry() {
    return useContext(CountryContext);
}

export function CountryProvider({ children }) {
    const [country, setCountry] = useState(null);

    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            {children}
        </CountryContext.Provider>
    );
}
