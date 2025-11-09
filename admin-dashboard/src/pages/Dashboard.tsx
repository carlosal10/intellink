import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <div>
                <h2>Overview</h2>
                <p>Welcome to the admin dashboard. Here you can manage articles, queries, users, and settings.</p>
            </div>
            <div>
                <h2>Quick Links</h2>
                <ul>
                    <li><Link to="/articles">Manage Articles</Link></li>
                    <li><Link to="/queries">View Queries</Link></li>
                    <li><Link to="/users">Manage Users</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;