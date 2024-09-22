import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import ConsultarAlumnos from './components/ConsultarAlumnos';
import CrearCursos from './components/CrearCursos';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/consultar-alumnos" element={<ConsultarAlumnos />} />
          <Route path="/crear-cursos" element={<CrearCursos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
