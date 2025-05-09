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
      <div className='flex flex-col min-h-screen'>
        <Navbar />
        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<About />} />
            <Route path="/afiliacion-servicios" element={<Services />} />
            <Route path="/documentacion" element={<Documents />} />
            <Route path="/noticias" element={<Blog />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </div>
        <div className='mt-auto'>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
