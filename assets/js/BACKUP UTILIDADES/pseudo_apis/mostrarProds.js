import productos from './productos.js'
import $ from '../funciones_globales/elementos_por_id.js'

export default function listarProds(subcat) {

    const subCateg = subcat

    const losProductos = productos()

    let elProd

    function prodsFilter(losProductos) {
        const filtrados = losProductos.filter(subCategoria => subCategoria.subcateg === subCateg)
        const ordenados = filtrados.sort((a, b) => a.id - b.id)
        return ordenados
    }

    const listaDeProds = prodsFilter(losProductos)

    for (const prod of listaDeProds) {
        elProd = document.createElement('div')
        elProd.id = `${prod.subcateg}_${prod.nombre}`
        elProd.className = 'secciones__elementos--box'
        elProd.innerHTML = `<h3><a href="producto.html?prod=${prod.url}">${prod.nombre}</a></h3>
                            <div>
                                <div>
                                    <a href="producto.html?prod=${prod.url}"><img src="${prod.thumb}" alt="${prod.alt}" /></a> 
                                </div>
                            </div>`
        $('#lista-productos').appendChild(elProd)
    }


}