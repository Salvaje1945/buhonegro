import $ from './funciones_globales/elementos_por_id.js'

export default function menuMovil() {

    const menuAbrir = $('#boton-abrir-menu')
    
    const menuCerrar = $('#boton-cerrar-menu')

    const elMenu = $('#movil-menu')

    const inicio = $('#menu-mov-inicio')

    const nosotros = $('#menu-mov-nosotros')

    const servicios = $('#menu-mov-servicios')

    const portfolio = $('#menu-mov-portfolio')

    const proyectos = $('#menu-mov-proyectos')

    const contactenos = $('#menu-mov-contacto')

    function mostrarBotonSubir() {
        $('#contenedor-subir').classList.add('activo')
        
        function cerrarBotonSubir() {
            $('#contenedor-subir').classList.remove('activo')
        }

        $('#accion-subir').onclick = cerrarBotonSubir
    }

    

    function abrirMenu() {
        
        elMenu.classList.add('abierto')

    }

    function cerrarMenu() {
        
        elMenu.classList.remove('abierto')

    }

    menuAbrir.addEventListener('click', abrirMenu)

    menuCerrar.addEventListener('click', cerrarMenu)

    inicio.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    nosotros.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    servicios.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    portfolio.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    proyectos.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    contactenos.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })


}