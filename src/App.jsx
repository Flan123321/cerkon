import React, { Suspense, lazy } from 'react'; // <-- 1. IMPORTAMOS Suspense y lazy
import { Routes, Route } from 'react-router-dom';
import { LoadingSpinner } from './components/ui/LoadingSpinner'; // <-- 2. IMPORTAMOS EL SPINNER

// --- 3. IMPORTACIÓN ESTÁTICA (LA ÚNICA QUE QUEDA) ---
// Importamos 'Home' de forma normal porque es la primera página que el usuario ve.
// No queremos que 'Home' sea perezosa (lazy).
import { Home } from './pages/Home';

// --- 4. IMPORTACIONES "LAZY" (PEREZOSAS) ---
// Estas páginas solo se descargarán cuando el usuario haga clic en sus enlaces.
const Services = lazy(() => import('./pages/Services'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    // 5. ENVOLVEMOS LAS RUTAS EN <Suspense>
    // 'fallback' es lo que se muestra mientras se descarga el archivo .js de la nueva página
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
        {/* Si tienes una página 404, también podría ser lazy */}
      </Routes>
    </Suspense>
  );
}

export default App;