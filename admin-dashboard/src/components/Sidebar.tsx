import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Admin Dashboard</h2>
            <ul>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/articles">Articles</Link>
                </li>
                <li>
                    <Link to="/queries">Queries</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;