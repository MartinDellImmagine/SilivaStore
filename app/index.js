//IMPORTS
import Ofertas from "./funciones/Ofertas.js"
import requestGet from "./helpers/requestGet.js"
import carritoCompras from "./funciones/carritoCompras.js"
import detalle from "./funciones/detalleRedireccion.js"
import pintarCarro from "./funciones/PintarCarro.js"

// VARIABLES GLOBALES
const sectionOfertas = document.querySelector('#div-ofertas')


//funciones



//Programa Principal
requestGet('../productos.json').then(datos=>{
    //console.log(datos);
    sectionOfertas.appendChild(Ofertas(datos)),
    carritoCompras(datos),
    detalle(datos),
    pintarCarro()
})
