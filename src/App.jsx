import { Routes, Route } from "react-router-dom";

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
// const Home = lazy(() => import("../src/pages/hero"));

// import About from './pages/About'
// import Services from './pages/Services'
// import Contact from './pages/Contact'
// import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
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
        {/* <Route path="/support-and-services" element={<Services />} />
        <Route path="/about-us" element={<Contact />} />
        <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
