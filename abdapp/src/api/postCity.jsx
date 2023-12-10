import axios from "axios";

const postCityApi = (url, name, idCity, activo) => {
    console.log('Url: ', url);
    console.log('name: ', name);
    console.log('activo: ', activo);
    console.log('idCity: ', idCity);

    const activoCity = activo === 'on';

    const data = {
        "name": name,
        "idCity": idCity,
        "activoCity": activoCity,  
        "id_country": "1",
        "district": "dummy_district_value",
        "population": 1000
    };

    console.log('Objeto: ', data);

    axios.post(url, data)
        .then(response => {
            console.log('post success');
            console.log('response', response);
        })
        .catch(error => {
            console.log('Oh No! Error!');
            console.log(error);
        });
};

export default postCityApi;
