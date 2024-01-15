import trabajosRealizados from './funciones_globales/portfolio.js'
import $ from './funciones_globales/elementos_por_id.js'

export default function listaPortfolio() {

    

    const elPortfolio = trabajosRealizados()

    let elProd

    function trabajosFilter(elPortfolio) {

        const filtrados = elPortfolio.filter(seccion => seccion.seccion === 'portfolio')
        
        const ordenados = filtrados.sort((a, b) => a.id - b.id)

        const primerosCinco = ordenados.slice(0, 3);

        return primerosCinco
    }

    const listaDeTrabajos = trabajosFilter(elPortfolio)

    for (const trabajo of listaDeTrabajos) {
        elProd = document.createElement('div')
        elProd.className = 'contenido__info--portfolio_box'
        elProd.innerHTML = `<h4>${trabajo.cliente}</h4>
                            <div class="info__portfolio--box_img">
                                <a href="${trabajo.url}" target="_blank" rel="noopener noreferrer">
                                    <img src="${trabajo.img}" alt="${trabajo.alt}" />
                                </a>
                            </div>
                            <p>${trabajo.categ}</p>`
        $('#inicio-contenido-portfolio-lista').appendChild(elProd)
    }


}