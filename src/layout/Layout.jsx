import React from 'react';
import Topbar from '../HomeComponents/Topbar';
import Header from '../HomeComponents/Header';
import Footer from '../HomeComponents/Footer'; // Add this line
import Restaurant from '../HomeComponents/Restaurant';

const Layout = ({ children }) => {
  return (
    <>
      <Topbar />
      <Header />
      {children}
      <Restaurant/>
      <Footer />
    </>
  );
};

export default Layout;
