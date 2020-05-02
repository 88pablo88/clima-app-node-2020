const axios = require('axios')




const getClima = async (lat, lng)=>{

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=550f377b84a26a3a18527cc7ea496bd6&untits=metric`)


    return resp.data.main.temp
}




module.exports = {
    getClima
}