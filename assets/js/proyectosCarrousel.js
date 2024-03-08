import $ from './funciones_globales/elementos_por_id.js'

export default function proyectosSlider() {
    
    let indice = 0

    const btnDkpRetro = $('#btn-mov-retro')

    const btnDkpAvz = $('#btn-mov-avz')

    const tarjetas = document.querySelectorAll('.gal-mov_slider--slide')

    const tamanioGaleria = tarjetas.length * 100

    $('#galeria-mov').style.width = tamanioGaleria + "%"

    const posicionTarjeta = 100 / tarjetas.length

    for(const tarjeta of tarjetas){
        tarjeta.style.width = posicionTarjeta + "%"
    }

    //tarjetas.style.width = posicionTarjeta + "%"

    // console.log('TARJETAS')
    // console.log(tarjetas)
    // console.log('**********')
    // console.log('TAMAÑO GALERIA')
    // console.log(tamanioGaleria)
    // console.log('**********')
    // console.log('POSICIÓN TARJETAS')
    // console.log(posicionTarjeta)
    // console.log('**********')



    const imgAnterior = ()=> {
        if(indice === 0){
            indice = tarjetas.length -1
        } else {
            indice--
        }
        $('#galeria-mov').style.transform = "translateX(-" + indice * posicionTarjeta + "%)"
    }

    const imgProx = ()=> {
        if(indice >= tarjetas.length -1){
            indice = 0
        } else {
            indice++
        }
        $('#galeria-mov').style.transform = "translateX(-" + indice * posicionTarjeta + "%)"
    }

    btnDkpRetro.addEventListener('click', imgAnterior)

    btnDkpAvz.addEventListener('click', imgProx)

    // thumbUno.addEventListener('click', ()=> {
    //     indice = 0
    //     $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    // })

    // thumbDos.addEventListener('click', ()=> {
    //     indice = 1
    //     $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    // })

    // thumbTres.addEventListener('click', ()=> {
    //     indice = 2
    //     $('#galeria-dkp').style.transform = "translateX(-" + indice * 33.33 + "%)"
    // })

    function tarjetasMovimiento() {

        // console.log(indice)

        indice += 1

        if(indice >= tarjetas.length){
            indice = 0
        }

        // console.log(indice)



        $('#galeria-mov').style.transform = "translateX(-" + indice * posicionTarjeta + "%)"

    }

    setInterval(tarjetasMovimiento, 5000)
}