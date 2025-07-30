import { Routes, Route } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Home from './pages/hero'
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
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  )
}

export default App
