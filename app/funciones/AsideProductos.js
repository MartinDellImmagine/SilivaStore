

const AsideProductos = (datos)=>{
    let categorias = []
    let categoriasComplete = []
    
   

    const divAside = document.querySelector('.asideRoot')
   
  
    datos.map(el=> categorias.push(el.categoria),)
    categorias.sort()
    categorias.map((_, i)=>{
        if(categorias[i] !== categorias[i+1]) {    
            categoriasComplete.push(categorias[i])
        }
    })


    categoriasComplete.map((el)=>{
        
        divAside.innerHTML += `
        
            <a id="${el.toLowerCase()}" class="list-group-item list-group-item-action aside-items">${el}</a>
    
    `
    })
    
    
    
}

export default AsideProductos