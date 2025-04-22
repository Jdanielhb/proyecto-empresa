import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Documents from './pages/Documents';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quienes-somos" element={<About />} />
        <Route path="/afiliacion-servicios" element={<Services />} />
        <Route path="/documentacion" element={<Documents />} />
        <Route path="/noticias" element={<Blog />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
