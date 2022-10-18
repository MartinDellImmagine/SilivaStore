//imports
import requestGet from "./helpers/requestGet.js";
import carritoCompras from "./funciones/carritoCompras.js";
import pintarCarro from "./funciones/PintarCarro.js";


//variables globales
const detalle = JSON.parse(localStorage.getItem('detalle'))
const detalleFotoRoot = document.querySelector('.fotoRoot')
const detalleInfoRoot = document.querySelector('.infoRoot')

console.log(detalleInfoRoot);
//funciones


const detalleFoto = ()=>{
    detalleFotoRoot.innerHTML = `
    
        <img src=${detalle.imagen} alt="${detalle.nombre}">
    `
}

const detalleInfo = ()=>{
    detalleInfoRoot.innerHTML = `
                    <h2 class="titulo-detalle">${detalle.nombre}</h2>
                    <hr>
                    <div class="text-center">
                    <button data-id="${detalle.id}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                    </div>
                    <hr>
                    <div class="row">
                    <div class="col-8">
                        <h4>Precio por unidad:</h4>
                        <p class="precio-detalle">$${detalle.precio}</p>
                    </div>
                    <div class="col-4">
                        <p class="green-detalle"><i class="bi bi-shield-check"></i> Garantia - 12 meses</p>
                        <p class="green-detalle"><i class="bi bi-check-square-fill"></i></i> Stock disponible</p>
                        <p class="green-detalle"><i class="bi bi-truck"></i></i> Envios a todo el pais</p>
                    </div>
                    </div>
                    <hr>
                    
                    `
}

//main

detalleFoto()
detalleInfo()
pintarCarro()
requestGet('../productos.json').then(datos=>carritoCompras(datos))