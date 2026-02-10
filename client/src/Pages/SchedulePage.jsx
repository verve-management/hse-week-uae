import React from 'react';
import Navbar2 from '../Components/Navbar/Navbar2';
import Schedule from '../Components/OtherPages/ScedulePage/Schedule';
import Footer from '../Components/Footer/Footer';

// Adjust path based on your folder structure
import PageTransition from '../Components/PageTransition';

const SchedulePage = () => {
  return (
    <PageTransition>
      <Navbar2 />
      <Schedule />
      <Footer />
    </PageTransition>
  );
};

export default SchedulePage;
