import BusinessPlan from "../../components/sections/BusinessPlan";
import EzoneSolution from "../../components/sections/EzoneSolution";
import AboutProducts from "../../components/sections/hero/AboutProducts";
import HeroSection from "../../components/sections/hero/HeroSection";
import ProductsSummary from "../../components/sections/hero/ProductsSummary";
import ServicesSection from "../../components/sections/hero/ServicesSection";
import WhyEzone from "../../components/sections/hero/WhyEzone";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <AboutProducts/>
      <ProductsSummary/>
      <BusinessPlan />
      <EzoneSolution />
      <WhyEzone/>

    </div>
  );
};

export default Home;
