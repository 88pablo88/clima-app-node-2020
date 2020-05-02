
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({  //con options en lugar de command omitimos ingresar el comando por consola, directamente pasamos el argumento
    direccion:{
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv



//  const coordenadas = lugar.getLugar(argv.direccion).then(resp
//  )
//  })
//  .catch(console.log)

//  console.log(coordenadas);

const getInfo = async (direccion)=>{

    try{
    const coordenadas = await lugar.getLugar(direccion)
    const temp = await clima.getClima(coordenadas.lat, coordenadas.long)

    return `El clima de ${direccion} es ${temp}`
    }
    catch (e){
        return `no se pudo obtener el clima de ${direccion}`
    }
}

getInfo(argv.direccion).then(resp=>console.log(resp))
                        .catch(err => console.log(err))


// lugar.getLugar(argv.direccion).then(resp =>{
//     clima.getClima(resp.lat, resp.long).then(resp => console.log(resp)).catch(err=>console.log(err))  
// })



//console.log(long);
//clima.getClima(40.750000, -74.000000).then(resp => console.log(resp)).catch(err=>console.log(err))

