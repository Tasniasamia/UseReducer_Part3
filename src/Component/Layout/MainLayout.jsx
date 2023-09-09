import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/top">Top10</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default MainLayout;