import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import './Layout.css'; // Assuming you have some styles for the layout

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <div className="main-content">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </div>
    );
};

export default Layout;