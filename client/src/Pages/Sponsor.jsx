import React from 'react';
import UpdateSoon from '../Components/OtherPages/Elements/UpdateSoon';
import Navbar2 from '../Components/Navbar/Navbar2';
import Footer from '../Components/Footer/Footer';
import Sponsors from '../Components/OtherPages/SponsorsComponent/Sponsors';
import PageTransition from '../Components/PageTransition';


const Sponsor = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <PageTransition>
        <Sponsors></Sponsors>
        {/* <UpdateSoon></UpdateSoon> */}
        <Footer></Footer>
        </PageTransition>
     
    </div>
  );
};

export default Sponsor;