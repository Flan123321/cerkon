import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Services } from './pages/Services'; 
import { Contact } from './pages/Contact'; // Nueva página
import { Projects } from './pages/Projects'; // Nueva página

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/servicios" element={<Services />} />
      <Route path="/proyectos" element={<Projects />} />
      <Route path="/contacto" element={<Contact />} />
      {/* Agrega más rutas según sea necesario */}
    </Routes>
  );
}

export default App;