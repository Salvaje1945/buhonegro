import $ from './funciones_globales/elementos_por_id.js'

export default function productosSlider() {
    
    let indice = 0

    const tarjetas = document.querySelectorAll('.gal-movil_slider--slide')

    function tarjetasMovimiento() {

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        $('#galeria-slider').style.transform = "translateX(-" + indice * 100 + "svw)"

    }

    setInterval(tarjetasMovimiento, 5000)
}