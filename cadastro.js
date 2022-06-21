const form = document.querySelector('#form')
const Ano = form.querySelector('#ano')
const Preco = form.querySelector('#preco')
const Marca = form.querySelector('#marca')
const Modelo = form.querySelector('#modelo')
const Cor = form.querySelector('#cor')
const Foto = form.querySelector('#foto')
const Descricao = form.querySelector('#descricao')

VMasker(Ano).maskPattern('9999')
VMasker(Preco).maskMoney()

form.addEventListener('submit', () => {
  event.preventDefault()

  if (
    validarCampos(Marca) &&
    validarCampos(Modelo) &&
    validarCampos(Cor) &&
    validarCampos(Foto) &&
    validarCampos(Descricao)
  ) {
    const Carros = JSON.parse(localStorage.getItem('listaCarrosStorage')) ?? []
    const carro = {
      marca: Marca.value,
      modelo: Modelo.value,
      ano: Ano.value,
      preco: Preco.value,
      cor: Cor.value,
      foto: Foto.value,
      descricao: Descricao.value
    }
    Carros.push(carro)
    localStorage.setItem('listaCarrosStorage', JSON.stringify(Carros))
    alert('Carro cadastrado com sucesso!')
  }
})

function validarCampos(campo) {
  let status = true
  const corrigeNumero = function (valor) {
    return Number(valor.replaceAll('.', '').replaceAll(',', '.'))
  }

  if (
    campo.value.length <= 1 &&
    campo.id == 'ano' &&
    (campo.value > 2022 || campo.value > 1900)
  ) {
    document.querySelector('#vAno').classList.add('d-block')
    status = false
  } else if (
    campo.value.length <= 1 &&
    campo.id == 'preco' &&
    campo.value < 100
  ) {
    document.querySelector('#vPreco').classList.add('d-block')
    status = false
  } else if (campo.value.length <= 1 && campo.id == 'modelo') {
    document.querySelector('#vModelo').classList.add('d-block')
    status = false
  } else if (campo.value.length <= 1 && campo.id == 'foto') {
    document.querySelector('#vFoto').classList.add('d-block')
    status = false
  } else if (campo.value.length <= 1 && campo.id == 'cor') {
    document.querySelector('#vCor').classList.add('d-block')
    status = false
  } else if (campo.value.length <= 1 && campo.id == 'marca') {
    document.querySelector('#vMarca').classList.add('d-block')
    status = false
  } else {
    document.querySelector('#vPreco').classList.remove('d-block')
    document.querySelector('#vAno').classList.remove('d-block')
    document.querySelector('#vMarca').classList.remove('d-block')
    document.querySelector('#vModelo').classList.remove('d-block')
    document.querySelector('#vFoto').classList.remove('d-block')
    document.querySelector('#vCor').classList.remove('d-block')
  }

  return status
}
