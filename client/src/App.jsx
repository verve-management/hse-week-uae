import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./Pages/HomePage";
import SpeakersPage from "./Pages/SpeakersPage";
import GalleryPage from "./Pages/GalleryPage";
import ContactPage from "./Pages/ContactPage";
import AwardNomneePage from "./Pages/AwardNomneePage";
import AwardCategoryPage from "./Pages/AwardCategoryPage";
import SchedulePage from "./Pages/SchedulePage";
import Sponsor from "./Pages/Sponsor";
import ScrollToTop from "./Components/OtherPages/ScrollToTop";
import GroupRegistration from "./Components/OtherPages/GroupRegistration/GroupRegistration";
import IndividualRegistrationPage from "./Pages/IndividualRegistrationPage";
import RegistrationPage from "./Pages/RegistrationPage";
import GroupRegistrationPage from "./Pages/GroupRegistrationPage";
import PostEventForm from "./Components/OtherPages/PostEventForm"

function App() {
  const location = useLocation(); 
  return (
    <>
      <ScrollToTop />  {/* ✅ VALID POSITION */}
        <AnimatePresence mode="wait">

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/awards/categories" element={<AwardCategoryPage />} />
        <Route path="/awards/top-50-leaders" element={<AwardNomneePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/registration" element={<RegistrationPage></RegistrationPage>} />
        <Route path="/individual-registration" element={<IndividualRegistrationPage></IndividualRegistrationPage>} />
        <Route path="/group-registration" element={<GroupRegistrationPage></GroupRegistrationPage>} />


      </Routes>
      </AnimatePresence>
 <PostEventForm />

    </>
  );
}

export default App;