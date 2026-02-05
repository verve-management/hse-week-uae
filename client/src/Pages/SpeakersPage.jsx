import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Speakers from '../Components/OtherPages/Speakers/Speakers';
import Navbar2 from '../Components/Navbar/Navbar2';
import Speakers2026 from '../Components/OtherPages/Speakers/Speakers2026';


const SpeakersPage = () => {
  return (
    <div>
        <Navbar2></Navbar2>
        <Speakers></Speakers>
        {/* <Speakers2026></Speakers2026> */}
        <Footer></Footer>
     
    </div>
  );
};

export default SpeakersPage;