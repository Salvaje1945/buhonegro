import listaClientes from './clientes.js'
import $ from '../funciones_globales/elementos_por_id.js'

export default function listaDeClientes() {

    const listarClientes = listaClientes()

    let elProd

    function clientesFilter(listarClientes) {
        const ordenados = listarClientes.sort((a, b) => a.id - b.id)
        return ordenados
    }

    const lesClients = clientesFilter(listarClientes)

    for (const cliente of lesClients) {
        elProd = document.createElement('li')
        elProd.id = `lista_cliente_${cliente.nom}`
        elProd.innerHTML = `<a href="${cliente.web}.html" target="_blank" rel="noopener noreferrer"><img src="${cliente.logo}" alt="${cliente.nom}" /></a>`
        $('#lista-subcategs').appendChild(elProd)
    }


}