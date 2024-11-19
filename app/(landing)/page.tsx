

import MainAbout from "@/components/AboutUs/main-about";
import WhyUsAbout from "@/components/AboutUs/why-us";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import MainHomePage from "@/components/HomePage/home-page";
// import PricingCards from "@/components/packages";

export default function Home() {
  

  return (
    <div className='min-h-screen bg-[#f5f5ef]'>
      <MainHomePage/>
      <MainAbout/>
      <WhyUsAbout/>
      {/* <PricingCards/> */}
    <ContactPage/>
      <Footer/>
    </div>

  );
}