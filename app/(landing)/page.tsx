

import MainAbout from "@/components/AboutUs/main-about";
import ContactPage from "@/components/contact";
import Footer from "@/components/footer";
import MainHomePage from "@/components/HomePage/home-page";

export default function Home() {
  

  return (
    <div className='min-h-screen'>
      <MainHomePage/>
      <MainAbout/>
    <ContactPage/>
      <Footer/>
    </div>

  );
}