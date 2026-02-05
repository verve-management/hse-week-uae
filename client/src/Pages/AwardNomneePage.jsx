import React from 'react';
import AwardNominee from '../Components/OtherPages/Award/AwardNomnee';
import Footer from '../Components/Footer/Footer';
import Navbar2 from '../Components/Navbar/Navbar2';


const AwardNomneePage = () => {
  return (
    <div>
        <Navbar2></Navbar2>
        <AwardNominee></AwardNominee>
       <Footer></Footer>     
    </div>
  );
};

export default AwardNomneePage;