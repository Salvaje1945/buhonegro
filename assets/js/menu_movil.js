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

    const presupuestar = $('#menu-mov-presup')

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

    presupuestar.addEventListener('click', ()=> {
        cerrarMenu()
        // mostrarBotonSubir()
        abrirMenuAnun()

    })

    contactenos.addEventListener('click', ()=> {
        cerrarMenu()
        mostrarBotonSubir()
    })

    function abrirMenuAnun () {
        $('#cabeza__anun').classList.add('activo')
        anunNove()
    }
    
    function cerrarMenuAnun () {
        $('#cabeza__anun').classList.remove('activo')  
    }
    
    function anunNove () {
        if($('#cabeza__anun--prom_info').classList.contains('activo') && $('#cabeza__anun--btn_anim').classList.contains('promociones')){
            $('#cabeza__anun--prom_info').classList.remove('activo')
            $('#cabeza__anun--nove_info').classList.add('activo')
            $('#cabeza__anun--btn_anim').classList.remove('promociones')
            $('#cabeza__anun--btn_anim').classList.add('novedades')
        }
    }
    
    function anunProm () {
        if($('#cabeza__anun--nove_info').classList.contains('activo') && $('#cabeza__anun--btn_anim').classList.contains('novedades')){
            $('#cabeza__anun--nove_info').classList.remove('activo')
            $('#cabeza__anun--prom_info').classList.add('activo')
            $('#cabeza__anun--btn_anim').classList.remove('novedades')
            $('#cabeza__anun--btn_anim').classList.add('promociones')
        }
    }

    $('#cabeza__anun--cer').onclick = cerrarMenuAnun
    $('#cabeza__anun--prom').onclick = anunProm
    //$('#cabeza__anun--btn').onclick = abrirMenuAnun
    $('#cabeza__anun--nove').onclick = anunNove


}