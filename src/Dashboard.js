import React from 'react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login'; // or use navigate if you prefer
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a protected page only visible to logged-in users.</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
