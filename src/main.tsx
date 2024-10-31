import { createRoot } from 'react-dom/client'
import '../css/global.css'
import Index from './pages/Index.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import NotFound from './pages/NotFound.tsx'

function AOSWrap({ children }: any) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Global animation duration
      once: true, // Only once animation
    });
  }, []);

  return <>
    {children}
  </>
}

createRoot(document.getElementById('root')!).render(
  <AOSWrap>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </AOSWrap>
)
