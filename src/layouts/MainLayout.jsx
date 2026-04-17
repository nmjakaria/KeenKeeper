import React from 'react';
import Navbar from '../components/shared/Navbar/Navbar';
import { Outlet } from 'react-router';
import HomePage from '../pages/Homepage/HomePage';
import Footer from '../components/shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet>
                <HomePage></HomePage>
            </Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;