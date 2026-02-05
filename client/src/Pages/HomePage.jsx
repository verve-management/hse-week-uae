import Event from "../Components/EventOverview/Event"
import Footer from "../Components/Footer/Footer"
import Gallery from "../Components/Gallery/Gallery"
import Hero from "../Components/Hero/Hero"
import Hero2 from "../Components/Hero/Hero2"
import Hero3 from "../Components/Hero/Hero3"
import Industries from "../Components/Industries/Industries"
import InnovationOverview from "../Components/InnovationOverview/InnovationOverview"
import MarketInsights from "../Components/InnovationOverview/MarketInsights"
import Navbar from "../Components/Navbar/Navbar"
import Numbers from "../Components/Numbers/Numbers"
import Partners from "../Components/Partners/Partners"
import TopicHighlight from "../Components/TopicHighlight/TopicHighlight"
import WhoMeet from "../Components/Whomeet/Whomeet"
import WhyAttend from "../Components/WhyAttend/WhyAttend"
import WhySponsor from "../Components/WhySponcor/WhySponsor"


function HomePage() {
 

  return (
    <>
    <Navbar></Navbar>
     {/* <Hero></Hero> */}
     <Hero3></Hero3>
     {/* <Hero2></Hero2> */}
     <Event></Event>
     <InnovationOverview></InnovationOverview>
     {/* <MarketInsights></MarketInsights> */}
     <Numbers></Numbers>
     <Industries></Industries>
     <WhyAttend></WhyAttend>
     
     <WhoMeet></WhoMeet>  
     <TopicHighlight></TopicHighlight>
     <WhySponsor></WhySponsor>
     <Partners></Partners>
     <Gallery></Gallery>
     <Footer></Footer>
     {/* <Hero2></Hero2> */}
    </>
  )
}

export default HomePage
