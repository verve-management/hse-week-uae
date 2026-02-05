import React from 'react';
import Footer from '../Components/Footer/Footer';
import Gallery from '../Components/OtherPages/Gallery/Gallery';
import Navbar2 from '../Components/Navbar/Navbar2';


const GalleryPage = () => {
  return (
    <div>
        <Navbar2></Navbar2>
        {/* <Gallery></Gallery> */}
        <Gallery></Gallery>
        <Footer></Footer>
     
    </div>
  );
};

export default GalleryPage;