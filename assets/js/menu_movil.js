import $ from './funciones_globales/elementos_por_id.js'

export default function menuMovil() {

    const menuAbrir = $('#boton-abrir-menu')
    
    const menuCerrar = $('#boton-cerrar-menu')

    const elMenu = $('#movil-menu')

    const inicio = $('#menu-mov-inicio')

    const nosotros = $('#menu-mov-nosotros')

    const servicios = $('#menu-mov-servicios')

    

    function abrirMenu() {
        
        elMenu.classList.add('abierto')

    }

    function cerrarMenu() {
        
        elMenu.classList.remove('abierto')

    }

    menuAbrir.addEventListener('click', abrirMenu)

    menuCerrar.addEventListener('click', cerrarMenu)

    inicio.addEventListener('click', cerrarMenu)

    nosotros.addEventListener('click', cerrarMenu)

    servicios.addEventListener('click', cerrarMenu)


}