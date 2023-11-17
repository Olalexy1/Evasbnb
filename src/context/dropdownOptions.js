import React, { createContext, useContext, useState } from 'react';

const DropdownContext = createContext();

export function useDropdown() {
    return useContext(DropdownContext);
}

export function DropdownProvider({ children }) {
    const [dropdown, setDropdown] = useState([]);

    return (
        <DropContext.Provider value={{ dropdown, setDropdown }}>
            {children}
        </DropContext.Provider>
    );
}