import BusinessPlan from "../../components/sections/BusinessPlan";
import HeroSection from "../../components/sections/hero/HeroSection";
import ServicesSection from "../../components/sections/hero/ServicesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <BusinessPlan />
    </div>
  );
};

export default Home;
