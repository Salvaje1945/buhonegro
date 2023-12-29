import productos from './productos.js'
import $ from '../funciones_globales/elementos_por_id.js'
import mostrarImg from '../galeriaImg.js'
import productosSlider from '../prods_carrousel.js'
import productosSliderDkp from '../prods_carrousel_dkp.js'

export default function detallesProducto(prod, res) {

    const proDuct = prod

    const anchoPantalla = res

    const losProductos = productos()

    // const direParaEditar = diresDelCliente.filter(direcciones => direcciones.id === laDireccion)

    //             console.log(direParaEditar)
    //             //console.log()

    //             const idDireccion = direParaEditar[0].id
    //             const calleOriginal = direParaEditar[0].calle
    //             const dptoOriginal = direParaEditar[0].dpto
    //             const comentOriginal = direParaEditar[0].comentario




    // let elProd

    const elProducto = losProductos.filter(item => item.url === proDuct)

    console.log(elProducto)

    const breadCrumbs = `<nav>
                            <ul>
                                <li>
                                    <a href="index.html">Inicio</a>
                                </li>
                                <li>
                                    <a href="${elProducto[0].categ.toLowerCase()}.html">${elProducto[0].categ}</a>
                                </li>
                                <li>
                                    <a href="${elProducto[0].subcateg.toLowerCase()}.html">${elProducto[0].subcateg}</a>
                                </li>
                                <li>
                                    <p>${elProducto[0].nombre}</p>
                                </li>
                            </ul>
                        </nav>`

    // const laGaleriaDkp = `<div id="prod-gal">
    //                         <div class="prod__gal--img_box"><img src="${elProducto[0].img1}" alt="${elProducto[0].alt}" /></div>
    //                         <div class="prod__gal--img_box"><img src="${elProducto[0].img2}" alt="${elProducto[0].alt}" /></div>
    //                         <div class="prod__gal--img_box"><img src="${elProducto[0].img3}" alt="${elProducto[0].alt}" /></div>
    //                     </div>`

    const laGaleriaDkp = `<div id="prod-gal_dkp">
                            <div class="prod__gal--dkp_img-gde-cont">
                                <div class="gal__dkp--btn">
                                    <button id="btn-dkp-retro" type="button"><i class="fa-solid fa-chevron-left"></i></button>
                                </div>
                                <div class="gal__dkp--img_gde-slider_cont">
                                    <div id="galeria-dkp">
                                        <div class="gal-dkp_slider--slide"><img src="${elProducto[0].img1}" alt="${elProducto[0].alt}" /></div>
                                        <div class="gal-dkp_slider--slide"><img src="${elProducto[0].img2}" alt="${elProducto[0].alt}" /></div>
                                        <div class="gal-dkp_slider--slide"><img src="${elProducto[0].img3}" alt="${elProducto[0].alt}" /></div>
                                    </div>
                                </div>
                                <div class="gal__dkp--btn">
                                    <button id="btn-dkp-avz" type="button"><i class="fa-solid fa-chevron-right"></i></button>
                                </div>
                            </div>
                            <div class="prod__gal--dkp_img-thumb-cont">
                                <div class="prod__gal--dkp_thumbs-cont">
                                    <div class="prod__gal--dkp_thumbs-img" id="gal-dkp-thumb1"><img src="${elProducto[0].img1}" alt="${elProducto[0].alt}" /></div>
                                    <div class="prod__gal--dkp_thumbs-img" id="gal-dkp-thumb2"><img src="${elProducto[0].img2}" alt="${elProducto[0].alt}" /></div>
                                    <div class="prod__gal--dkp_thumbs-img" id="gal-dkp-thumb3"><img src="${elProducto[0].img3}" alt="${elProducto[0].alt}" /></div>
                                </div>
                            </div>
                        </div>`

    const laGaleriaMov = `<div id="prod-gal_movil">
                            <div class="prod-gal_movil--cont" id="gal_mov-contenedor">
                                <div class="prod-gal_movil--slider" id="galeria-slider">
                                    <div class="gal-movil_slider--slide">
                                        <img src="${elProducto[0].img1}" alt="${elProducto[0].alt}" />
                                    </div>
                                    <div class="gal-movil_slider--slide">
                                        <img src="${elProducto[0].img2}" alt="${elProducto[0].alt}" />
                                    </div>
                                    <div class="gal-movil_slider--slide">
                                        <img src="${elProducto[0].img3}" alt="${elProducto[0].alt}" />
                                    </div>
                                </div>
                            </div>
                        </div>`

    $('#prod-nombre').textContent = elProducto[0].nombre

    $('#prod-desc').textContent = elProducto[0].desc

    $('#prod-tbl').innerHTML = elProducto[0].tbl

    if(anchoPantalla >= 1024){

        $('#carrousel-productos').innerHTML = laGaleriaDkp

        productosSliderDkp()

    } else {

        $('#carrousel-productos').innerHTML = laGaleriaMov

        productosSlider()

    }

    

    $('#contenido__breadcrumbs').innerHTML = breadCrumbs

    mostrarImg(anchoPantalla)

    // function prodsFilter(losProductos) {
    //     const filtrados = losProductos.filter(subCategoria => subCategoria.url === proDuct)
    //     const ordenados = filtrados.sort((a, b) => a.id - b.id)
    //     return ordenados
    // }

    // const listaDeProds = prodsFilter(losProductos)

    // for (const prod of listaDeProds) {
    //     elProd = document.createElement('div')
    //     elProd.id = `${prod.subcateg}_${prod.nombre}`
    //     elProd.className = 'secciones__elementos--box'
    //     elProd.innerHTML = `<h3><a href="producto.html?prod=${prod.url}">${prod.nombre}</a></h3>
    //                         <div>
    //                             <div>
    //                                 <a href="producto.html?prod=${prod.url}"><img src="${prod.thumb}" alt="${prod.alt}" /></a> 
    //                             </div>
    //                         </div>`
    //     $('#lista-productos').appendChild(elProd)
    // }


}