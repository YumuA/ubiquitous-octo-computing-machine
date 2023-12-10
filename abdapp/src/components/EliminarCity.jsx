import React, { useState } from 'react';
import postEliminarCity from "../api/postEliminarCity";
import { useNavigate } from 'react-router-dom';

const EliminarCity = () => {
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/deletecity/";

    const [idCity, setIdCity] = useState('');

    const handleDeleteCity = async (e) => {
        e.preventDefault();

        try {
            if (idCity.trim() === '') {
                alert('Por favor, ingresa un ID de City válido.');
                return;
            }
            await postEliminarCity(urlBase, idCity);
            navigate('/Mostrar');
        } catch (error) {
            console.error('Error al eliminar el City:', error);
        }
    };

    return (
        <div className="Eliminar">
            <h1 className="EliminarTittle">Eliminar City</h1>
            <form className="EliminarFormulario" onSubmit={handleDeleteCity}>
                <label htmlFor="idCity" className='EliminarFormularioInput'>ID City:</label>
                <input
                    type="text"
                    name="idCity"
                    id="idCity"
                    className="idCity EliminarFormularioInput"
                    placeholder="ID City"
                    value={idCity}
                    onChange={(e) => setIdCity(e.target.value)}
                ></input>
                <button className="EliminarFormularioBtn" type="submit">Eliminar</button>
            </form>
        </div>
    );
};

export default EliminarCity;
