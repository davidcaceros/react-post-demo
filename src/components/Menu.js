import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/consultar-alumnos">Consultar Alumnos</Link>
                </li>
                <li>
                    <Link to="/crear-cursos">Crear Cursos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;
