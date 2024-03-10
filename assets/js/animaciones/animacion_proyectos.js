import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionProyectos() {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido__carrousel').offsetHeight

    const alturaNosotros = $('#contenido-nosotros').offsetHeight

    const alturaServicios = $('#contenido-servicios').offsetHeight

    const alturaPortfolio = $('#contenido-portfolio').offsetHeight

    // const sumaDeAlturas = alturaCabecera + alturaCarrousel + alturaNosotros + ((alturaServicios / 3) *2)

    // const sumaDeAlturas = alturaCabecera + alturaCarrousel + alturaNosotros + alturaServicios + (alturaPortfolio / 2)

    const sumaDeAlturas = 3710

    const sumaDeAlturasDos = alturaCabecera + alturaCarrousel + alturaNosotros + (alturaServicios / 2)



    function ejecutarAnimacion() {

        window.addEventListener('scroll', function () {

            let scrollActual = window.scrollY || document.documentElement.scrollTop

            

            // if(scrollActual >= sumaDeAlturas) {

            //     let porcentajeScroll = sumaDeAlturasDos / 100 

            //     let posicionElemento = (scrollActual - sumaDeAlturas) / 1000

            //     const posicionInicio = 2626

            //     const posicionFinal = 3306

            //     const totalRecorrido = 680



            

            //     $('#contenido-info-portfolio-titulo').style.opacity = posicionElemento

            //     if(posicionElemento >= 0.680) {

            //         $('#contenido-info-portfolio-titulo').style.opacity = 1

            //     }

            // }

            const totalRecorrido = 694

            console.log('*** SUMA DE ALTURAS ***')

            console.log(sumaDeAlturas)            

            console.log('*** SCROLL ACTUAL ***')

            console.log(scrollActual)

            

            if (scrollActual >= sumaDeAlturas) {
                
                let posicionScrollRecorrido = scrollActual - sumaDeAlturas

                let porcentajeRecorrido = posicionScrollRecorrido / 6.94

                let tamanioFuente = porcentajeRecorrido * 0.14


                // let porcentajeScroll = (scrollActual - sumaDeAlturas) / totalRecorrido;
                // let tamanio = Math.min(porcentajeScroll, 14); // Limitar la tamanio a 1.0 máximo

                if (tamanioFuente >= 14) {
                    tamanioFuente = 14
                }

                $('#contenido-info-proyectos-titulo').style.fontSize = tamanioFuente + "svw";

                if (scrollActual >= 4210) {
                    $('#contenido-info-proyectos-txt').classList.add('animacion')
                }

            } else {
                $('#contenido-info-proyectos-titulo').style.fontSize = 0 + "svw"; // Asegurarse de que la opacidad sea 0 antes de alcanzar la posición deseada
            }

            // $('#contenido-info-portfolio-titulo').style.opacity = posicionElemento

            // if (scrollActual >= sumaDeAlturas) {
            //     $('#contenido-info-portfolio-titulo').style.left = 'auto'
            // }

        })

        
    }

    ejecutarAnimacion()

}