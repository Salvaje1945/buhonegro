//import $ from './funciones_globales/elementos_por_id.js'
//import dameElAltoDePantalla from './funciones_globales/alto_pantalla.js'
// import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
// import clientesSlider from './clientes.js'
// import cabeceraAbrirMenu from './menu.js'
// import animacionNosotros from './animaciones/animacion_nosotros.js'
// import animacionClientes from './animaciones/animacion_clientes.js'
// import animaciones from './animaciones/animaciones.js'
// import cualquieraEh from './animaciones/animaciones_encabezados.js'
import responsiveMedia from './objeto_responsive.js'
// import responsiveSlider from './clientes_responsive.js'
// import carrouselContenido from './carousel.js'
// import expYcontrTxt from './expandir.js'
import listarProds from './pseudo_apis/mostrarProds.js'

document.addEventListener('DOMContentLoaded', ()=> {

    // const anchoDePantallaInicial = dameElAnchoDePantalla()
    
    // animaciones(anchoDePantallaInicial, 'encabezados')
    // animaciones(anchoDePantallaInicial, 'iconos')
    // animaciones(anchoDePantallaInicial, 'cualidades')

    responsiveMedia('#cabecera', '(min-width: 1024px)',
    `<div class="cabecera__contenido--moviles" id="cabecera-contenido">
        <nav class="cabecera__desplegable--menu" id="cabecera-menu-desp">
            <ul>
                <li><a href="index.html#nosotros" id="menu-mov-nosotros">Nuestra empresa</a></li>
                <li><a href="index.html#clientes" id="menu-mov-clientes">Quienes nos eligen</a></li>
                <li><a href="herramientas.html">Herramientas</a></li>
                <li><a href="insumos.html">Insumos</a></li>
                <li><a href="asesoramiento_tecnico.html">Asesoramiento técnico</a></li>
                <li><a href="#" id="menu-mov-catalogo">Catálogo</a></li>
                <li><a href="#contacto" id="menu-mov-contacto">Contáctenos</a></li>
            </ul>
        </nav>
    <div class="cabecera__moviles--logo">
        <!-- <div class="cabecera__moviles--logo_img">
            <img src="assets/img/IF_logo_corona_moviles.png" alt="International Fasteners S.A. - Herramientas neumáticas e insumos para la industria." />
        </div>
        <div class="cabecera__moviles--titulo">
            <h1>International Fasteners</h1>
        </div> -->
        <h1>International Fasteners</h1>
    </div>
    <div class="cabecera__moviles--btn activo" id="cabecera-menu-abrir"><i class="fa-solid fa-bars"></i></div>
    <div class="cabecera__moviles--btn" id="cabecera-menu-cerrar"><i class="fa-solid fa-xmark"></i></div>
    </div>`,
    `<div class="cabecera__contenido">
        <div class="cabecera__contenido--logo">
            <div class="cabecera__contenido--logo_img">
                <img src="assets/img/International_Fasteners_SA_Logo.png" alt="International Fasteners S.A. - Herramientas neumáticas e insumos para la industria." />
            </div>
            <div class="cabecera__contenido--titulo">
                <h1>International Fasteners</h1>
            </div>
        </div>
        <nav class="cabecera__contenido--menu">
            <ul>
                <li><a href="index.html#nosotros" id="menu-dkp-nosotros">Nuestra empresa</a></li>
                <li><a href="index.html#clientes" id="menu-dkp-clientes">Quienes nos eligen</a></li>
                <li><a href="herramientas.html">Herramientas</a></li>
                <li><a href="insumos.html">Insumos</a></li>
                <li><a href="asesoramiento_tecnico.html">Asesoramiento técnico</a></li>
                <li><a href="#catalogo" id="menu-dkp-catalogo">Catálogo</a></li>
                <li><a href="#contacto" id="menu-dkp-contacto">Contáctenos</a></li>
            </ul>
        </nav>
    </div>`)

    listarProds('Laminillas')

})

// window.addEventListener('resize', ()=> {
//     const anchoDePantalla = dameElAnchoDePantalla()
//     animacionNosotros(anchoDePantalla)
    
// })

// $('#cabecera-menu-abrir').onclick = cabeceraAbrirMenu

// $('#cabecera-menu-abrir').addEventListener('click', cabeceraAbrirMenu)

// carrouselContenido()

// expYcontrTxt()

// clientesSlider()