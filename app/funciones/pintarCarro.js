



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
            if(arrayCarrito.length > 0 ){
            let total = 0
            let acumulador
            //console.log(arrayCarrito);
            arrayCarrito.map(el=>{
                let {id,nombre, precio, cantidad} = el
                acumulador = precio*cantidad
                total = total + acumulador
                tbody.innerHTML += `
                    <tr>
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
            tbody.innerHTML +=`
            <tr>
                    <th scope="row">Total: </th>
                    
                    <td></td>
                    <td>$ARS</td>
                    <td>
                         ${total}
                       
                    </td>
                </tr>
            `    
            }else{
                tbody.innerHTML= `<tr>
                <th scope="row">-</th>
                <td scope="row">El carrito esta vacio</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                </tr>`
            }
        }
            
            
         catch (error) {
         console.error(error);   
        }
            

    }

export default pintarCarro