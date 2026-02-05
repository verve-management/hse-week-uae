import React from 'react';
import IndividualRegistration from '../Components/OtherPages/IndividualRegistration/IndividualRegistration';
import Footer from '../Components/Footer/Footer';
import Navbar2 from '../Components/Navbar/Navbar2';


const IndividualRegistrationPage = () => {
  return (
    <div>
      <Navbar2></Navbar2>
      <IndividualRegistration></IndividualRegistration>
      <Footer></Footer>
    </div>
  );
};

export default IndividualRegistrationPage;