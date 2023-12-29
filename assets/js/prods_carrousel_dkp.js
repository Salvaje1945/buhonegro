import $ from './funciones_globales/elementos_por_id.js'

export default function productosSliderDkp() {
    
    let indice = 0

    const thumbUno = $('#gal-dkp-thumb1')

    const thumbDos = $('#gal-dkp-thumb2')

    const thumbTres = $('#gal-dkp-thumb3')

    const btnDkpRetro = $('#btn-dkp-retro')

    const btnDkpAvz = $('#btn-dkp-avz')

    const tarjetas = document.querySelectorAll('.gal-dkp_slider--slide')

    const imgAnterior = ()=> {
        if(indice === 0){
            indice = tarjetas.length -1
        } else {
            indice--
        }
        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    }

    const imgProx = ()=> {
        if(indice >= tarjetas.length -1){
            indice = 0
        } else {
            indice++
        }
        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    }

    btnDkpRetro.addEventListener('click', imgAnterior)

    btnDkpAvz.addEventListener('click', imgProx)

    thumbUno.addEventListener('click', ()=> {
        indice = 0
        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    })

    thumbDos.addEventListener('click', ()=> {
        indice = 1
        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    })

    thumbTres.addEventListener('click', ()=> {
        indice = 2
        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    })

    function tarjetasMovimiento() {

        console.log(indice)

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        console.log(indice)



        $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"

    }

    setInterval(tarjetasMovimiento, 5000)
}