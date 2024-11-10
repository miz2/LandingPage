import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './pages/HeroSection';
import Stats from './components/Stats';
import Footer from './components/Footer';
import FeaturesSection from './pages/FeaturesSection';
import ProgramsSection from './pages/ProgramSection';
import Ending from './pages/Ending';
import EnquiryForm from './pages/EnquiryForm';
import PromoSection from './pages/PromoSection';
import NewsSection from './pages/NewsSection';
import MentorsSection from './components/MentorsSection';
import MainContainer from './components/MainContainer';
import Banner from './components/Banner';
import StudentTestimonialsSection from './components/StudentTestimonialsSection';
const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Banner/>
      <Navbar />
      <HeroSection />
      <Stats />
      <Footer />
      <FeaturesSection/>
      <ProgramsSection/>
      <MainContainer/>
      <StudentTestimonialsSection/>
      <MentorsSection/>
      <NewsSection/>
      <PromoSection/>
      <EnquiryForm/>
      <Ending/>
    </div>
  );
};

export default App;
 