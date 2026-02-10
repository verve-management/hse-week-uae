import React from 'react';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/OtherPages/Gallery/Gallery';
import Navbar2 from '../Components/Navbar/Navbar2';
import PageTransition from '../Components/PageTransition';


const GalleryPage = () => {
  return (
    <div>
      <PageTransition>
        <Navbar2></Navbar2>
        {/* <Gallery></Gallery> */}
        <Gallery></Gallery>
        <Footer></Footer>
        </PageTransition>
     
    </div>
  );
};

export default GalleryPage;