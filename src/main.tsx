import { createRoot } from 'react-dom/client'
import '../css/global.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPage from './pages/Index'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFoundPage from './pages/NotFound'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
