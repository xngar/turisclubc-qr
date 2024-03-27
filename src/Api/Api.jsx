import axios from "axios"




export const obtenerToken = async (usuario)=>{
    const auth =await axios.post('https://apirest.turisclub.cl/api/auth',usuario);

    return auth;

}

export const obtenerQR = async ()=>{
    const datoken = {
        "Username": "Test1",
        "Password": "testing.2022"
      }
    const datoToken = await obtenerToken(datoken)

    console.log("token",datoToken.data.value);

    const qr = await axios.post('https://apirest.turisclub.cl/api/QRContent/List',{
        headers:{
            'Authorization': `Bearer ${datoToken.data.value}`,
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            Take: 1,
            Sort: ["Id DESC"],
        })
    })

    console.log("qr",qr)
    return qr;
    
}