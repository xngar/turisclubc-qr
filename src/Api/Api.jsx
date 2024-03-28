import axios from "axios";



// funcion para obtener el token
////////////////////////////////
const obtenerToken = async () => {
  const usuario = {
    Username: process.env.REACT_APP_API_TURISCLUB_USERNAME,
    Password: process.env.REACT_APP_API_TURISCLUB_PASSWORD,
  };
  const auth = await axios.post(
    `https://apirest.turisclub.cl/api/auth`,
    usuario
  );

  return auth.data;
};


  // funcion  para obtener informacion para el qr
  ////////////////////////////////////////////////

const obtenerQR = async () => {
  //obtenemos el ttoken sin pasarle parametros.
  const datoToken = await obtenerToken();

  const config = {
    headers: {
      Authorization: `Bearer ${datoToken.value}`,
      "Content-Type": "application/json",
    },
  };



  const qr = await axios.post(
    `https://apirest.turisclub.cl/api/QRContent/List`,
    { Take: 1, Sort: ["Id DESC"] },
    config
  );
  const result = await qr.data;
  return result;
};


  //funcion para llamar listado
  ///////////////////////////////

export const obtenerListado = async () => {
  const nuevoObj = {
    titulo: "",
    listaProgramas: [],
  };

  const idArea = await obtenerQR();

  const datoToken = await obtenerToken();
  const config = {
    headers: {
      Authorization: `Bearer ${datoToken.value}`,
      "Content-Type": "application/json",
    },
  };


  const listaProgramas = await axios.post(
    "https://apirest.turisclub.cl/api/Programs/List",
    {
      EqualityFilter: { IDArea: idArea.entities[0].IdArea, Activo: true },
    },
    config
  );
  var result = await listaProgramas;
  nuevoObj.titulo = idArea.entities[0].Titulo;
  nuevoObj.listaProgramas = result.data.entities;
  return nuevoObj;
};
