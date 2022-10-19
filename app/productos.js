//imports
import Productos from "./funciones/Productos.js";
import carritoCompras from "./funciones/carritoCompras.js";
import requestGet from "./helpers/requestGet.js";
import AsideProductos from "./funciones/AsideProductos.js";



//varibles globales
const divAside = document.querySelector('.asideRoot')
const searchInput = document.querySelector('.input-busqueda')

const productoImagen = document.querySelectorAll('.mcard-img')
const productoTitulo = document.querySelectorAll('.mcard-body__h5')
// funciones

const buscarAside= (datos)=>{
    divAside.addEventListener('click', (event)=>{
        let id = event.target.id
        const filtrar = el => el.categoria.toLowerCase() == id
        const productosFiltrados = datos.filter(filtrar)
        Productos(productosFiltrados)
    })
   
}

const buscarInput = (datos)=>{
    searchInput.addEventListener('input', (event)=>{
        let buscar = event.target.value.toLowerCase()
        let productosFiltrados = datos.filter(el => el.nombre.toLowerCase().includes(buscar) || el.categoria.toLowerCase().includes(buscar))
        Productos(productosFiltrados)
    })
    
}

const detalle = (datos) =>{
    document.addEventListener('click', (event)=>{
        if(event.target.className == 'mcard-img' || event.target.className == 'mcard-body__h5'){
            let id = event.target.dataset.id
            let buscar = datos.find(el => el.id == id)
            console.log(buscar);
            localStorage.setItem('detalle', JSON.stringify(buscar))
            window.location = '../pages/detalle.html'

        }
    })
}

//promesas
requestGet('../productos.json').then(arrayDatos => {
    Productos(arrayDatos), 
    AsideProductos(arrayDatos),
    buscarAside(arrayDatos), 
    buscarInput(arrayDatos),
    carritoCompras(arrayDatos),
    detalle(arrayDatos)

})
