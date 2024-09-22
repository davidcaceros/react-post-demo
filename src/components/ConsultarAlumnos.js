import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ConsultarAlumnos = () => {
    const [alumnos, setAlumnos] = useState([]);

    useEffect(() => {
        axios.get('https://test-deploy-12.onrender.com/alumnos')
            .then((response) => {
                setAlumnos(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener alumnos:', error);
            });
    }, []);

    return (
        <div>
            <h2>Consulta de Alumnos</h2>
            <ul>
                {alumnos.map((alumno) => (
                    <li key={alumno.id}>{alumno.nombre}</li>
                ))}
            </ul>
        </div>
    );
};

export default ConsultarAlumnos;
