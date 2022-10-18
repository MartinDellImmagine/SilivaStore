



    function pintarCarro() {

        try {
            let arrayCarrito =[]
            if(arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))== null){
                arrayCarrito = []
            }else{
                arrayCarrito = JSON.parse(localStorage.getItem('Carrito'))
            }
            let tbody = document.querySelector('#tbody')
            tbody.innerHTML = ''
            arrayCarrito.map(el=>{
                let {id,nombre, precio, cantidad} = el
                
                tbody.innerHTML += `
                    <tr>
                        <th scope="row">${id}</th>
                        <td>${nombre}</td>
                        <td>$ARS ${precio}</td>
                        <td>${cantidad}</td>
                        <td>
                            <button data-id=${id} class="btn btn-success btn-suma"><i data-id=${id} class="bi bi-plus btn-suma"></i></button>
                            <button data-id=${id} class="btn btn-danger btn-resta"><i data-id=${id} class="bi bi-dash btn-resta"></i></button>
                           
                        </td>
                    </tr>
    
                `
            })
                  
            }
            
            
         catch (error) {
         console.error(error);   
        }
            

    }

export default pintarCarro