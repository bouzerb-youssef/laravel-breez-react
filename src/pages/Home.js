import React from 'react'
import useAuthContext from '../context/AuthContext'
import { useEffect } from 'react';

function Home() {
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    if (!user) {
      getUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // The dependency array is empty since we only want this effect to run once on mount.

  return (
    <div>
      
      {user ? (
        <div>Welcome, {user.name}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default Home
