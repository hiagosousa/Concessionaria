const dadoCarro = document.querySelector('#dado-carro')
const carros = JSON.parse(localStorage.getItem('listaCarrosStorage'))

const exibeCarros = () => {
  carros.forEach(carro => {
    const listaCarros = document.createElement('div')
    console.log('entrei')
    listaCarros.classList.add('pt-3')
    listaCarros.innerHTML = `<div>
    <div class='row'>
      <div class='col-6'>
    
        <p><b>Marca:</b> ${carro.marca}</p>
      
        <p><b>Modelo</b>: ${carro.modelo}</p>
        
        <p><b>Ano:</b> ${carro.ano}</p>
        
        <p><b>Preço:</b> ${carro.preco}</p>
        
        <p><b>Cor:</b> ${carro.cor}</p>
        
        <p><b>Descricao:</b> ${carro.descricao}</p>

      </div>
      <div class='col-6'>
      <img style='width:25rem' src="${carro.foto}" onerror='javascript:this.src= "./images/placeholder.jpg"'/>
      </div>
    </div>
  
    </div>`

    dadoCarro.append(listaCarros)
  })
}

const main = () => {
  exibeCarros()
}

main()
