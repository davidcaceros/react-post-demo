import React, { useState } from 'react';
import axios from 'axios';

const CrearCursos = () => {
    const [nombre, setNombre] = useState('');
    const [creditos, setCreditos] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const curso = { nombre, creditos: parseInt(creditos), descripcion };

        axios.post('https://test-deploy-12.onrender.com/cursos', curso)
            .then((response) => {
                console.log('Curso creado:', response.data);
                alert('Curso creado con éxito');
            })
            .catch((error) => {
                console.error('Error al crear curso:', error);
            });
    };

    return (
        <div>
            <h2>Crear Curso</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Nombre del curso:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                </div>
                <div>
                    <label>Créditos:</label>
                    <input type="number" value={creditos} onChange={(e) => setCreditos(e.target.value)} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <button type="submit">Crear Curso</button>
            </form>
        </div>
    );
};

export default CrearCursos;
