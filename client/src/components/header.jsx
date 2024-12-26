import React, { useState, useEffect, useRef } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

const Header = ({ user, onLogout, onLogin }) => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleCloseModal();
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <header className="py-4 px-6 md:px-10 lg:px-20 flex justify-between items-center fixed top-0 left-0 w-full z-30 bg-black">
      <div className="header-left">
        <a href='/'>
        <img src="logo.png" alt="Logo" className="h-12 md:h-16" />
        </a>
      </div>
      <div className="header-right hidden md:flex space-x-8">
        <a href="#about" className="hover:text-red-600">
          About
        </a>
        <a href="#speakers" className="hover:text-red-600">
          Speakers
        </a>
        <a href="#partners" className="hover:text-red-600">
          Partners
        </a>
        <a href="#team" className="hover:text-red-600">
          Team
        </a>
        <a href="#contact" className="hover:text-red-600">
          Contact
        </a>
        {/* Conditional Rendering based on User Login */}
        {user ? (
          <button onClick={onLogout} className="bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition duration-300">
            Logout
          </button>
        ) : (
          <button onClick={handleOpenModal} className="bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-700 transition duration-300">
            Login
          </button>
        )}
      </div>
      <button className="md:hidden" id="mobile-menu-button">
        <i className="fa fa-bars text-white text-2xl"></i>
      </button>

      {/* Modal for Login (only shown when showModal is true) */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div ref={modalRef} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <i className="fa fa-times text-xl"></i>
            </button>
            <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const decoded = jwtDecode(credentialResponse.credential);
                onLogin(decoded);
                handleCloseModal();
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;