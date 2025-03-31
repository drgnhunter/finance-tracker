import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Corrected import for React Router v6
import Login from './Login';
import PrivateRoute from './PrivateRoute'; // The PrivateRoute component
import ProtectedPage from './ProtectedPage'; // Your protected page component
import Dashboard from './Dashboard';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter> {/* Wrap the app in BrowserRouter */}
    <Routes>
      {/* Route for Home Page */}
      <Route path="/" element={<App />} />
      
      {/* Route for Login Page */}
      <Route path='/login' element={<Login />} />

      <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
