import React, { useState, useEffect } from 'react';

const ProtectedPage = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Fetch protected route, the cookie with JWT will be sent automatically
        const response = await fetch('/protected', {
          method: 'GET',
          credentials: 'include',  // Ensures cookies are included in the request
        });

        if (response.ok) {
          const data = await response.text();
          setUser(data);  // Set user data returned from the backend
        } else {
          throw new Error('Not authenticated');
        }
      } catch (error) {
        setError(error.message); // Set error if authentication fails
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return <div>Welcome, {user ? user : 'Guest'}!</div>;
};

export default ProtectedPage;
