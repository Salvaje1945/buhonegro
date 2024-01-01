import prodsSubCats from './subCats.js'
import $ from '../funciones_globales/elementos_por_id.js'

export default function listaSubCats(cat) {

    const caTeg = cat

    const subCategorias = prodsSubCats()

    let elProd

    function subcatFilter(subCategorias) {
        const filtrados = subCategorias.filter(subCategoria => subCategoria.categ === caTeg)
        const ordenados = filtrados.sort((a, b) => a.id - b.id)
        return ordenados
    }

    const listaDeSubCats = subcatFilter(subCategorias)

    for (const subCat of listaDeSubCats) {
        elProd = document.createElement('li')
        elProd.id = `lista_${subCat.categ}_${subCat.nombre}`
        elProd.innerHTML = `<a href="${subCat.url}.html">${subCat.nombre}</a>
        <a href="${subCat.url}.html"><img src="${subCat.thumb}" alt="${subCat.alt}" /></a>`
        $('#lista-subcategs').appendChild(elProd)
    }


}