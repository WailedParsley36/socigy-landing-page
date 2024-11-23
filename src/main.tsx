import { createRoot } from 'react-dom/client'
import '../css/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/Index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFound'
import Aos from 'aos'
import PrivacyPolicy from './pages/PrivacyPolicy'
import { FirebaseContextProvider } from './contexts/FirebaseContext'
import Waitlist from './pages/Waitlist'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'

Aos.init();

createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <FirebaseContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </FirebaseContextProvider>
  </BrowserRouter>
)
