import { Navigate, Route, Routes } from 'react-router-dom';
import SiteNav from './components/SiteNav';
import Footer from './components/Footer';
import RouteMeta from './components/RouteMeta';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Saltar al contenido</a>
      <RouteMeta />
      <SiteNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}
