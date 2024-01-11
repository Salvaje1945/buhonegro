import $ from '../funciones_globales/elementos_por_id.js'

export default function animacionNosotros() {
    
    const alturaCabecera = $('#cabecera').offsetHeight

    const alturaCarrousel = $('#contenido__carrousel').offsetHeight

    const sumaAlturaCabezaMasCarrusel = alturaCabecera + alturaCarrousel



    function ejecutarAnimacion() {

        window.addEventListener('scroll', function () {

            let scrollActual = window.scrollY || document.documentElement.scrollTop

            let porcentajeScroll = (scrollActual * 100) / sumaAlturaCabezaMasCarrusel

            let posicionElemento = porcentajeScroll - 100

            $('#contenido-info-nosotros-titulo').style.left = posicionElemento + "%"

            $('#contenido-info-nosotros-texto').style.right = posicionElemento + "%"

            if (scrollActual >= sumaAlturaCabezaMasCarrusel) {
                $('#contenido-info-nosotros-titulo').style.left = 'auto'
                $('#contenido-info-nosotros-texto').style.right = 'auto'
            }

        })

        
    }

    ejecutarAnimacion()

}