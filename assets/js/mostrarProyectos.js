import trabajosRealizados from './funciones_globales/portfolio.js'
import $ from './funciones_globales/elementos_por_id.js'

export default function listaProyectos() {

    const losProyectos = trabajosRealizados()

    let elProd

    // let contadorMostrados = 3

    // const minimoContador = 3

    // function trabajosFilter(elPortfolio) {

    //     const filtrados = elPortfolio.filter(seccion => seccion.seccion === 'portfolio')
        
    //     const ordenados = filtrados.sort((a, b) => a.id - b.id)

    //     const primerosCinco = ordenados.slice(0, 3);

    //     return primerosCinco
    // }

    function trabajosFilter(losProyectos) {
        const filtrados = losProyectos.filter(seccion => seccion.seccion === 'proyectos')
        return filtrados
    }

    const listaDeProys = trabajosFilter(losProyectos)

    for (const proys of listaDeProys) {
        elProd = document.createElement('div')
        elProd.className = 'gal-mov_slider--slide'
        elProd.id = `proyecto-${proys.id}-${proys.cliente}`
        elProd.innerHTML = `<h4>${proys.cliente}</h4>
        <img src="${proys.img}" alt="${proys.alt}" />
        <p>${proys.desc}</p>`
        $('#galeria-mov').appendChild(elProd)
    }
    

    // const todosLosTrabajos = trabajosFilter(elPortfolio)

    // function mostrarMas() {
    //     contadorMostrados += 3
    //     renderizarTrabajos()
    // }

    // function mostrarMenos() {
    //     contadorMostrados -= 3
    //     renderizarTrabajos()
    // }

    // function renderizarTrabajos() {
    //     const trabajosAMostrar = todosLosTrabajos.slice(0, contadorMostrados)

    //     $('#inicio-contenido-portfolio-lista').innerHTML = '' // Limpiar lista antes de renderizar de nuevo

    //     for (const trabajo of trabajosAMostrar) {
    //         elProd = document.createElement('div')
    //         elProd.className = 'contenido__info--portfolio_box'
    //         elProd.id = `elemento-portfolio_${trabajo.id}`
    //         elProd.innerHTML = `<h4>${trabajo.cliente}</h4>
    //                             <div class="info__portfolio--box_img">
    //                                 <a href="${trabajo.url}" target="_blank" rel="noopener noreferrer">
    //                                     <img src="${trabajo.img}" alt="${trabajo.alt}" />
    //                                 </a>
    //                             </div>
    //                             <p>${trabajo.categ}</p>`
    //         $('#inicio-contenido-portfolio-lista').appendChild(elProd)
    //     }

    //     // Mostrar botón "mostrar más" o "mostrar menos" según corresponda
    //     const botonMostrarMas = $('#botonMostrarMas')

    //     const botonMostrarMenos = $('#botonMostrarMenos')

    //     if (contadorMostrados < todosLosTrabajos.length) {
    //         // botonMostrar.innerText = 'Ver Más'
    //         if (contadorMostrados > minimoContador) {
    //             if(!botonMostrarMas.classList.contains('activo')) {
    //                 botonMostrarMas.classList.add('activo')
    //             }
    //             botonMostrarMenos.classList.add('activo')
    //             if(contadorMostrados <= 6) {

    //                 botonMostrarMenos.onclick = ()=> {
    //                     mostrarMenos()

    //                     window.location = '#contenido-portfolio'
    //                 }

                    


    //             } else {

    //                 botonMostrarMenos.onclick = mostrarMenos

    //             }
    //             // botonMostrarMenos.onclick = mostrarMenos
    //             // botonMostrarMenos.addEventListener('click', ()=> {

    //             //     mostrarMenos()

    //             //     if(contadorMostrados <= 6) {
    //             //         // const enlaceAncla = $('#elemento-portfolio_1').href
    //             //         // console.log('ESTO ES EL HREF DEL ANCLA')
    //             //         // console.log(enlaceAncla)
    //             //         window.location = '#contenido-portfolio'
    //             //     }

    //             // })
    //         }
    //         botonMostrarMas.onclick = mostrarMas
    //         if(contadorMostrados === minimoContador) {
    //             if(botonMostrarMenos.classList.contains('activo')) {
    //                 botonMostrarMenos.classList.remove('activo')
    //             }
    //         }

    //         // if(contadorMostrados === (minimoContador * 2)) {
    //         //     if(botonMostrarMenos.classList.contains('activo')) {
    //         //         botonMostrarMenos.classList.remove('activo')
    //         //     }
    //         // }

    //     } else {

    //         if(botonMostrarMas.classList.contains('activo')) {
    //             botonMostrarMas.classList.remove('activo')
    //         }

    //         // if(contadorMostrados === minimoContador) {
    //         //     if(botonMostrarMenos.classList.contains('activo')) {
    //         //         botonMostrarMenos.classList.remove('activo')
    //         //     }
    //         // } else {
    //         //     if(botonMostrarMas.classList.contains('activo')) {
    //         //         botonMostrarMas.classList.remove('activo')
    //         //     }
    //         //     if(!botonMostrarMenos.classList.contains('activo')) {
    //         //         botonMostrarMenos.classList.add('activo')
    //         //     }
    //         // }

            

    //         // botonMostrar.innerText = 'Ver Menos'
    //         // botonMostrar.onclick = mostrarMenos
    //         // botonMostrar.addEventListener('click', ()=> {
    //         //     if (cont)
    //         // })
    //     }
    // }

    // renderizarTrabajos()


    // ***********************

    // const listaDeTrabajos = trabajosFilter(elPortfolio)

    // for (const trabajo of listaDeTrabajos) {
    //     elProd = document.createElement('div')
    //     elProd.className = 'contenido__info--portfolio_box'
    //     elProd.innerHTML = `<h4>${trabajo.cliente}</h4>
    //                         <div class="info__portfolio--box_img">
    //                             <a href="${trabajo.url}" target="_blank" rel="noopener noreferrer">
    //                                 <img src="${trabajo.img}" alt="${trabajo.alt}" />
    //                             </a>
    //                         </div>
    //                         <p>${trabajo.categ}</p>`
    //     $('#inicio-contenido-portfolio-lista').appendChild(elProd)
    // }


}