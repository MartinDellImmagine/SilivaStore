//IMPORTS
import Ofertas from "./funciones/Ofertas.js"
import requestGet from "./helpers/requestGet.js"
import carritoCompras from "./funciones/carritoCompras.js"
import detalle from "./funciones/detalle.js"

// VARIABLES GLOBALES
const sectionOfertas = document.querySelector('#div-ofertas')


//funciones



//Programa Principal
requestGet('../productos.json').then(datos=>{
    sectionOfertas.appendChild(Ofertas(datos)),
    carritoCompras(datos),
    detalle(datos)
})
