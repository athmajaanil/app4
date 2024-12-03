import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Settings = () => {
  return (
    <div>
      <h2>Settings</h2>
      <nav>
        <Link to="account">Account Settings</Link> | <Link to="privacy">Privacy Settings</Link>
      </nav>
      <hr />
      {/* Nested child routes will render here */}
      <Outlet />
    </div>
  );
};

export default Settings;
