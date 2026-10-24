import { useAuth } from "../context/AuthContext";

import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import CTASection from "../components/Home/CTASection";
import Footer from "../components/Home/Footer"


const Home = () => {
  
  const { user } = useAuth();

 
  const dashboardPath = user ? "/dashboard" : "/signup";

  return (
    <main className="min-h-screen overflow-hidden bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar user={user} />

      <HeroSection dashboardPath={dashboardPath} />

      <FeaturesSection />

      <CTASection dashboardPath={dashboardPath} />

      <Footer />
    </main>
  );
};

export default Home;