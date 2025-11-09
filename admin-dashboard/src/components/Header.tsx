import React from 'react';
import './Header.css';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-left">
                <h1>Admin Dashboard</h1>
            </div>
            <div className="header-right">
                <div className="quick-stats">
                    <div className="stat-item">
                        <span className="stat-label">Active Users</span>
                        <span className="stat-value">245</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">New Queries</span>
                        <span className="stat-value">12</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Pending Articles</span>
                        <span className="stat-value">5</span>
                    </div>
                </div>
                <div className="user-info">
                    <span className="user-name">Admin</span>
                    <button className="logout-btn">Logout</button>
                </div>
            </div>
        </header>
    );
};

export default Header;