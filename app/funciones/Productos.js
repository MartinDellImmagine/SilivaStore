import pintarCarro from "./pintarCarro.js"


const Productos = (arrayProductos)=>{
    const divProductos = document.querySelector('.productosRoot')
    divProductos.innerHTML = ''
    if (arrayProductos.length > 0) {
        arrayProductos.filter((el)=>{
       
            if(!el.precioDescuento){

                let {nombre, precio,id ,imagen} = el
                divProductos.innerHTML += `
                    <div class="mcard-container">
                        <a href="#"><img data-id="${id}" class="mcard-img" src="${imagen}" alt="${nombre}"></a>
                        <div class="mcard-body">
                            <h5 class="mcard-body__h5" data-id="${id}">${nombre}</h5>
                            <p class="mcard-body__p">$${precio}</p>
                            <button data-id="${id}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                        </div>
        `
            }
            
            if(el.precioDescuento){

                let {nombre, precio, precioDescuento,id ,imagen} = el
                divProductos.innerHTML += `
                        <div class="mcard-container">
                            <a href="#"><img data-id="${id}" class="mcard-img" src="${imagen}" alt="${nombre}"></a>
                            <div class="mcard-body">
                                <h5 class="mcard-body__h5" data-id="${id}">${nombre}</h5>
                                <p class="red" ><del>$${precioDescuento}</del></p>
                                <p class="mcard-body__p">$${precio}</p>
                                <button data-id="${id}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                            </div>
            `
            }
        
        })
    pintarCarro()
    }else{
        divProductos.innerHTML = '<h2>No se contraron resultados para su busqueda</h2>'
    }


   
}


export default Productos