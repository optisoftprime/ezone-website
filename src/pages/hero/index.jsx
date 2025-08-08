import BusinessPlan from "../../components/sections/BusinessPlan";
import EzoneSolution from "../../components/sections/EzoneSolution";
import HeroSection from "../../components/sections/hero/HeroSection";
import ServicesSection from "../../components/sections/hero/ServicesSection";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <BusinessPlan />
      <EzoneSolution />
    </div>
  );
};

export default Home;
