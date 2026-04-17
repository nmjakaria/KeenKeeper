import React from 'react';
import Banner from '../../components/Homepage/Banner';
import InfoSection from '../../components/Homepage/InfoSection';
import AllFriends from '../../components/Homepage/AllFriends';


const HomePage = () => {
    return (
        <>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <AllFriends></AllFriends>
        </>
    );
};

export default HomePage;