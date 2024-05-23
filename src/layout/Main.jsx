import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';

const Main = () => {
    return (
        <div>
            <p>head</p>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;