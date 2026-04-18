import React, { createContext, useState, useContext } from 'react';

const ActionContext = createContext();

export const ActionProvider = ({ children }) => {

    const [interactions, setInteractions] = useState([]); 
    const [filter, setFilter] = useState('all');

    const handleAction = (actionType, currentFriend) => {
        const newEntry = {
            id: Date.now(),
            type: actionType,
            friend: currentFriend,
            date: new Date()
        };
        setInteractions(prev => [newEntry, ...prev]);
    };

    return (
        <ActionContext.Provider value={{ interactions, handleAction, filter, setFilter }}>
            {children}
        </ActionContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAction = () => useContext(ActionContext);