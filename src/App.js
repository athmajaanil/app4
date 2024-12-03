import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => (
  <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet />
  </div>
);

const Profile = () => <h2>Profile Page</h2>;
const Settings = () => (
  <div>
    <h2>Settings Page</h2>
    <nav>
      <Link to="account">Account</Link> | <Link to="privacy">Privacy</Link>
    </nav>
    <Outlet />
  </div>
);
const Account = () => <h3>Account Settings</h3>;
const Privacy = () => <h3>Privacy Settings</h3>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />}>
          <Route path="account" element={<Account />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default App;
