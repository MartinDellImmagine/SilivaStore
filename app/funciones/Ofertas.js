
const Ofertas = (arrayProductos) =>{
   
    let cardsOfertas = document.createElement('section')

    cardsOfertas.setAttribute('class', 'card-group')


    try {
        
        arrayProductos.filter((el)=>{
            if (el.precioDescuento){
                let {id,nombre,imagen,precio,precioDescuento} = el
                cardsOfertas.innerHTML += `
          
                <div class="card">
                  <img src="${imagen}" class="card-img-top" data-id="${id}" alt="${nombre}">
                  <div class="card-body">
                    <h5 class="card-title text-center" data-id="${id}">${nombre}</h5>
      
                  </div>
                  <div>
                  <p class="card-text" style="text-align: center;" ><del>$${precioDescuento}</del></p>
                  
                  <p class="card-text" style="color:lightcoral; font-size:2em; text-align: center;">$${precio}</p>
                  </div>
                  <div class="d-grid gap-2 d-md-flex justify-content-md-center">
                        <button data-id="${id}" class="btn btn-success me-md-2" type="button">Sumar al carrito</button>
                    </div>
                </div>
  
            `
            }
            

            
        }) 
    

    } catch (error) {
        console.error(error);
    }






    return cardsOfertas
}

export default Ofertas