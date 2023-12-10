import React from 'react';
import postCityApi from "../api/postCity";  // Actualizado el nombre del archivo
import { useNavigate } from 'react-router-dom';

export const AgregarCity = () => {  // Actualizado el nombre del componente
    const navigate = useNavigate();
    const urlBase = "http://127.0.0.1:8000/newcity/";  // Actualizado el nombre de la URL
    const handleCity = (e) => {
        e.preventDefault();
        let name = document.getElementById('name').value;  // Actualizado el nombre del campo
        let idCity = document.getElementById('idCity').value;  // Actualizado el nombre del campo
        let active = document.getElementById('active').checked ? 'on' : 'off';  // Actualizado para verificar el estado del checkbox
        console.log('name: ' + name);
        console.log('idCity: ' + idCity);
        const cityPost = async () => {
            const response = await postCityApi(urlBase, name, idCity, active);  // Actualizado el nombre de la función
            console.log('response: ' + response);
        };
        cityPost();
    };

    return (
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar City</h1>  
            <form className="AgregarFormulario" onSubmit={handleCity}>  
                <input type="text" name="name" id="name" className="name AgregarFormularioInput" placeholder="Nombre City"></input>  
                <input type="text" name="idCity" id="idCity" className="idCity AgregarFormularioInput" placeholder="ID City"></input>  
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input type='checkbox' name="active" id="active" className="active AgregarFormularioInput" placeholder="active"></input>
                <button className="AgregarFormularioBtn" type="submit" name="city">Agregar</button>
            </form>
        </div>
    );
};

export default AgregarCity;
