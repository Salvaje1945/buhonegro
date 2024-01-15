import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionPortfolio() {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido__carrousel').offsetHeight

    const alturaNosotros = $('#contenido-nosotros').offsetHeight

    const alturaServicios = $('#contenido-servicios').offsetHeight

    // const sumaDeAlturas = alturaCabecera + alturaCarrousel + alturaNosotros + ((alturaServicios / 3) *2)

    const sumaDeAlturas = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaServicios / 2)

    const sumaDeAlturasDos = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaServicios / 2)



    function ejecutarAnimacion() {

        window.addEventListener('scroll', function () {

            let scrollActual = window.scrollY || document.documentElement.scrollTop

            console.log('*** SUMA DE ALTURAS ***')

            console.log(sumaDeAlturas)

            if(scrollActual >= sumaDeAlturas) {

                let porcentajeScroll = sumaDeAlturasDos / 100 

                let posicionElemento = (scrollActual - sumaDeAlturas) / 1000

                console.log('*** PORCENTAJE SCROLL ***')

                console.log(porcentajeScroll)

                console.log('*** POSICIÓN ELEMENTO ***')

                console.log(posicionElemento)

                $('#contenido-info-portfolio-titulo').style.opacity = posicionElemento

                if(posicionElemento >= 0.680) {

                    $('#contenido-info-portfolio-titulo').style.opacity = 1

                }

            }

            

            // $('#contenido-info-portfolio-titulo').style.opacity = posicionElemento

            // if (scrollActual >= sumaDeAlturas) {
            //     $('#contenido-info-portfolio-titulo').style.left = 'auto'
            // }

        })

        
    }

    ejecutarAnimacion()

}