import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Home from "./pages/hero";
import Footer from "./components/layout/Footer";
import CBAPage from "./pages/sub-pages/CBAPage";
import HumanResources from "./pages/sub-pages/HumanResources";
import Accounting from "./pages/sub-pages/Accounting";
import Sales from "./pages/sub-pages/sales";
import CRMPage from "./pages/sub-pages/CRMPage";
import LSMPage from "./pages/sub-pages/LSMPage";
import Payroll from "./pages/sub-pages/Payroll";
import MutuaryManagement from "./pages/sub-pages/MutuaryManagement";
import ProcessWorkFlow from "./pages/sub-pages/ProcessWorkFlow";
import AboutUs from "./pages/about-us/AboutUs";
import ContactUs from "./pages/contact/ContactUs";
import SupportAndServices from "./pages/support-and-services/SupportAndServices";
import NormalContact from "./pages/support-and-services/NormalContact";
import Chat from "./pages/support-and-services/Chat";
// const Home = lazy(() => import("../src/pages/hero"));

// import About from './pages/About'
// import Services from './pages/Services'
// import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'

function App() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isProductLocation = location.pathname.includes("/products");

  const shouldShowNavbar = isHomePage || isProductLocation;

  return (
    <div className="min-h-screen">
      {shouldShowNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/cba" element={<CBAPage />} />
        <Route path="/products/human-resources" element={<HumanResources />} />
        <Route path="/products/accounting" element={<Accounting />} />
        <Route path="/products/sales" element={<Sales />} />
        <Route
          path="/products/mutuary-management"
          element={<MutuaryManagement />}
        />
        <Route path="/products/crm" element={<CRMPage />} />
        <Route path="/products/lsm" element={<LSMPage />} />
        <Route path="/products/payroll" element={<Payroll />} />
        <Route
          path="/products/process-workflow"
          element={<ProcessWorkFlow />}
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/support-and-services" element={<SupportAndServices />}>
          <Route index element={<NormalContact />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
