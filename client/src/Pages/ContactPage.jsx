import React from 'react';
import Navbar2 from '../Components/Navbar/Navbar2';
import Footer from '../Components/Footer/Footer';
import Contact from '../Components/OtherPages/Contact/Contact';
import PageTransition from '../Components/PageTransition';


const ContactPage = () => {
  return (
    <div>
      <PageTransition>
        <Navbar2></Navbar2>
        <Contact></Contact>
        <Footer></Footer>
        </PageTransition>
     
    </div>
  );
};

export default ContactPage;