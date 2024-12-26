import React, { useState, useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Details from './components/details';
import Footer from './components/footer';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  const [user, setUser] = useState(null); // State to hold user data

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <GoogleOAuthProvider clientId="987198571753-313ud6htphc7crsfusl5klvd9tknbp6e.apps.googleusercontent.com">
      <div className="font-roboto bg-black text-white">
        <Header user={user} onLogout={handleLogout} onLogin={handleLogin} />
        <Hero />
        <Details />
        <Footer />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;