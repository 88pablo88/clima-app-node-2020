
const axios = require('axios')

const axiosInstance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php`,
    headers: {
        'x-rapidapi-key':'6636074f12msh82241159d2495f2p1dd742jsn22c35a1f2f6a'
    }
})


const getLugar =async (dir)=>{
    
const encodeURL = encodeURI(dir)

const searchParams = `?location=${encodeURL}`


const resp = await axiosInstance.get(searchParams);


if(resp.data.Results.length === 0 ){
    throw new Error(`No hay datos para ${dir}`)
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const long = data.lon; 


return {
    direccion,
    lat,
    long
}    

}



module.exports = {
    getLugar
}