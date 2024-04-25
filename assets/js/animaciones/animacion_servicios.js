import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionServicios() {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido__carrousel').offsetHeight

    const alturaNosotros = $('#contenido-nosotros').offsetHeight

    const alturaNosotrosMargInf = 82

    // const sumaDeAlturasParaEncabezado = alturaCabecera + alturaCarrousel + alturaNosotros

    const alturaSeparadorTopServicios = $('#contenido-servicios-separador-top').offsetHeight

    const alturaServiciosEncabezado = $('#contenido-info-servicios-titulo').offsetHeight

    const alturaServiciosFrontEnd = $('#contenido-servicios-frontend').offsetHeight



    function ejecutarAnimacion() {

        window.addEventListener('scroll', function () {

            const sumaDeAlturasParaEncabezado = alturaCabecera + alturaCarrousel + alturaNosotros + alturaNosotrosMargInf

            // const sumaDeAlturasParaEncabezado = alturaCabecera + alturaCarrousel + (alturaNosotros / 100 * 80)

            // console.log('*** ALTURA PARA ENCABEZADO ***')

            // console.log(sumaDeAlturasParaEncabezado)

            // console.log('******************************')

            // console.log('*** ALTURA CABECERA ***')

            // console.log(alturaCabecera)

            // console.log('******************************')

            // console.log('*** ALTURA CARROUSEL ***')

            // console.log(alturaCarrousel)

            // console.log('******************************')

            // console.log('*** ALTURA NOSOTROS ***')

            // console.log(alturaNosotros)

            // console.log('******************************')

            const sumaDeAlturasParaFrontEnd = alturaCabecera + alturaCarrousel +  ((alturaNosotros / 4) * 3)

            const sumaDeAlturasParaServicioTecnico = alturaCabecera + alturaCarrousel +  ((alturaNosotros / 8) * 7)

            const sumaDeAlturasParaConsultoriaIt = alturaCabecera + alturaCarrousel + alturaNosotros + alturaSeparadorTopServicios + alturaServiciosEncabezado + alturaServiciosFrontEnd

            let scrollActual = window.scrollY || document.documentElement.scrollTop

            // console.log('*** ALTURA PARA ENCABEZADO ***')

            // console.log(sumaDeAlturasParaEncabezado)

            // console.log('*** ALTURA PARA FRONT-END ***')

            // console.log(sumaDeAlturasParaFrontEnd)

            // console.log('*** SCROLL ACTUAL ***')

            // console.log(scrollActual)

            let porcentajeScroll = (scrollActual * 100) / sumaDeAlturasParaEncabezado

            let posicionElemento = porcentajeScroll - 100

            $('#contenido-info-servicios-titulo').style.right = posicionElemento + "%"

            // $('#contenido-info-servicios-texto').style.right = posicionElemento + "%"

            if (scrollActual >= sumaDeAlturasParaEncabezado) {
                $('#contenido-info-servicios-titulo').style.right = 'auto'
                $('#contenido-servicios-imagen-corporativa').classList.add('animacion')
                // $('#contenido-info-servicios-texto').style.right = 'auto'
            }

            if (scrollActual >= sumaDeAlturasParaFrontEnd) {
                $('#contenido-servicios-frontend').classList.add('animacion')
            }

            if (scrollActual >= sumaDeAlturasParaServicioTecnico) {
                $('#contenido-servicios-servicio-tecnico').classList.add('animacion')
            }

            if (scrollActual >= sumaDeAlturasParaConsultoriaIt) {
                $('#contenido-servicios-consultoria-it').classList.add('animacion')
            }

        })

        
    }

    ejecutarAnimacion()

}