import axios from "axios";

 const obtenerToken = async ()=>{

    const usuario = {
        "Username": process.env.REACT_APP_API_TURISCLUB_USERNAME,
        "Password": process.env.REACT_APP_API_TURISCLUB_PASSWORD
      }
    const auth = await axios.post(`https://apirest.turisclub.cl/api/auth`,usuario);

    return auth.data;

}

export const obtenerQR = async ()=>{
   //obtenemos el ttoken sin pasarle parametros.
    const datoToken = await obtenerToken();

  const config =  {
        headers: {
        'Authorization': `Bearer ${datoToken.value}`,
        'Content-Type': 'application/json'
        }
    }
    const qr = await axios.post(`https://apirest.turisclub.cl/api/QRContent/List`, {Take: 1,Sort: ["Id DESC"]}, config);
    const result = await qr.data;
    return result.entities;
    }