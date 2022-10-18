export const detalleRedireccion = (datos) =>{
    document.addEventListener('click', (event)=>{
        if(event.target.className == 'card-img-top' || event.target.className == 'card-title text-center'){
            let id = event.target.dataset.id
            let buscar = datos.find(el => el.id == id)
            console.log(buscar);
            localStorage.setItem('detalle', JSON.stringify(buscar))
            window.location = '../pages/detalle.html'

        }
    })
}

export default detalleRedireccion