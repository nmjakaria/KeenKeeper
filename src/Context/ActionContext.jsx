import React, { createContext, useState, useContext } from 'react';
import { toast } from 'react-toastify';

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
        toast.success(`${actionType.toUpperCase()} to ${currentFriend.name}`, {
            style: {
                borderRadius: '15px',
                background: '#244D3F',
                color: '#fff',
                fontWeight: 'bold',

            },
            iconTheme: {
                primary: '#fff',
                secondary: '#244D3F',
            },
        autoClose: 1000,});
    };

    return (
        <ActionContext.Provider value={{ interactions, handleAction, filter, setFilter }}>
            {children}
        </ActionContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAction = () => useContext(ActionContext);