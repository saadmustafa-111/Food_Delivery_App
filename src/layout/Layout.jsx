import React from 'react';
import Topbar from '../HomeComponents/Topbar';
import Header from '../HomeComponents/Header';
import Footer from '../HomeComponents/Footer'; // Add this line

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
