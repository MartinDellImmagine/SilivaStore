//imports


//Variables Globales
const tbodyRoot = document.querySelector('#productosRoot')
const arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))

//funciones

function pintarCarro(datos) {
    let acumulador = 0
    tbodyRoot.innerHTML = ''
    if(datos.length>0){
        
        datos.map(el=>{
            let {nombre,imagen, precio, cantidad, id} = el
            let precioTotal = precio *cantidad
            acumulador = acumulador + precioTotal
            
            tbodyRoot.innerHTML += `
            <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-2">
                    <img src=${imagen} class="img-fluid rounded-start" alt=${nombre}>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${nombre}</h5>
                            <p class="card-text">Valor por unidad: $${precio}</p>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <h5 class="card-title text-center">Cantidad</h5>
                            <h5 class="card-text text-center">${cantidad}</h5>
                            <div class="col-12 text-center">
                                <button data-id=${id} class="btn btn-danger btn-resta text-center"><i data-id=${id} class="bi bi-dash btn-resta"></i></button>
                                <button data-id=${id} class="btn btn-success btn-suma text-center"><i data-id=${id} class="bi bi-plus btn-suma"></i></button>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
              
        `

        })
        
        tbodyRoot.innerHTML += `
        <div class="card mb-3">
                <div class="row g-0">
                    <div class="col-md-2">
                        <div class="card-body">
                            <h5 class="card-title">Metodos de pago:</h5>
                            <p class="card-text"></p>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                                <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
                                <label class="form-check-label" for="flexRadioDefault1">
                                Deposito o Transferencia Bancaria
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
                                <label class="form-check-label" for="flexRadioDefault2">
                                Mercadopago - Tarjetas Online, PagoFacil, RapiPago
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="card-body">
                            <h5 class="card-title text-center">Total:</h5>
                            <h5 class="card-text text-center">$ ${acumulador}</h5>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
             <button id="finalizar" class="btn btn-success text-center">Comprar</button>
            </div>
        `
    }else{
        tbodyRoot.innerHTML = `
        <h1 class="text-center">El carro esta vacio</h1>
        <div class="text-center">
            <a href="../pages/productos.html" class="text-center">Ir a comprar</a>
        </div>
        `
    }

   
    
}

function finalizar() {
    document.addEventListener("click", (event)=>{
        if(event.target.className == 'btn btn-success text-center'){
            let vacio = []
            Swal.fire({
                icon: 'success',
                title: 'Gracias por su compra!',
                text: 'El producto ya esta en camino',
                
              }).then(()=>{
                localStorage.setItem('Carrito', JSON.stringify(vacio))
                location.reload()
              })
        }
    })
}

function sumarRestar(arrayCarrito) {
    document.addEventListener('click',(event)=>{
        if (event.target.className == 'btn btn-success btn-suma text-center' || event.target.className == 'bi bi-plus btn-suma'){
            let id = event.target.dataset.id
            arrayCarrito.find(elemento =>{
                if (elemento.id == id){
                    elemento.cantidad ++
                }
            })
                
            localStorage.setItem('Carrito', JSON.stringify(arrayCarrito))
            pintarCarro(arrayCarrito)
        }
        else if (event.target.className == 'btn btn-danger btn-resta text-center' || event.target.className == 'bi bi-dash btn-resta'){
            let id = event.target.dataset.id
            arrayCarrito.find(elemento =>{
                if (elemento.id == id){
                    if (elemento.cantidad >1){
                    elemento.cantidad =  elemento.cantidad - 1}
                    else{
                        let numero = arrayCarrito.indexOf(elemento)
                        arrayCarrito.splice(numero, 1);
                        
                        
                    }
                }
                
                localStorage.setItem('Carrito', JSON.stringify(arrayCarrito))
                pintarCarro(arrayCarrito)
            })
                
        }
    })
    
}

// main

pintarCarro(arrayCarrito)
sumarRestar(arrayCarrito)
finalizar()