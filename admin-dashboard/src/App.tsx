import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import ArticlesList from './pages/Articles/ArticlesList';
import ArticleEditor from './pages/Articles/ArticleEditor';
import QueryList from './pages/Queries/QueryList';
import QueryDetail from './pages/Queries/QueryDetail';
import Users from './pages/Users';
import Settings from './pages/Settings';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/edit/:id" element={<ArticleEditor />} />
          <Route path="/queries" element={<QueryList />} />
          <Route path="/queries/:id" element={<QueryDetail />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
