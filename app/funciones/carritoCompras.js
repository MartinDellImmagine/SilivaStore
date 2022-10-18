import pintarCarro from "./PintarCarro.js"



const carritoCompras = (arrayData)=>{
    let arrayCarrito =[]
    if(arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))== null){
        arrayCarrito = []
    }else{
        arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))
    }

    document.addEventListener('click',(event)=>{
        if (event.target.className == "btn btn-success me-md-2"){
            let id = event.target.dataset.id
            let object = arrayData.find(elemento => elemento.id == id)
            if(!object.cantidad){
                object.cantidad = 1
            }
            let encontrar = arrayCarrito.find(elemento => elemento == object)
            console.log(encontrar);
            if(encontrar){
                object.cantidad ++
                console.log('estoy');
            }else{
                arrayCarrito.push(object)
            }
            
            localStorage.setItem('Carrito', JSON.stringify(arrayCarrito))
            pintarCarro()
        }
        else  if (event.target.className == 'btn btn-success btn-suma' || event.target.className == 'bi bi-plus btn-suma'){
            let id = event.target.dataset.id
            arrayCarrito.find(elemento =>{
                if (elemento.id == id){
                    elemento.cantidad ++
                }
            })
                
            localStorage.setItem('Carrito', JSON.stringify(arrayCarrito))
            pintarCarro()
        }
        else if (event.target.className == 'btn btn-danger btn-resta' || event.target.className == 'bi bi-dash btn-resta'){
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
                pintarCarro()
            })
                
        }
    })
}


export default carritoCompras