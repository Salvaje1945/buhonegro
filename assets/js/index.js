import $ from './funciones_globales/elementos_por_id.js'
import mostrarCabecera from './cabecera_responsive.js'
//import dameElAltoDePantalla from './funciones_globales/alto_pantalla.js'
// import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
// import clientesSlider from './clientes.js'
// import cabeceraAbrirMenu from './menu.js'
// import animacionNosotros from './animaciones/animacion_nosotros.js'
// import animacionClientes from './animaciones/animacion_clientes.js'
// import animaciones from './animaciones/animaciones.js'
// import cualquieraEh from './animaciones/animaciones_encabezados.js'
// import responsiveMedia from './objeto_responsive.js'
// import responsiveSlider from './clientes_responsive.js'
// import carrouselContenido from './carousel.js'
// import expYcontrTxt from './expandir.js'

document.addEventListener('DOMContentLoaded', ()=> {

    console.log("*** INDEX VACÍO ***")

    // const menuAbrir = $('#boton-abrir-menu')
    
    // const menuCerrar = $('#boton-cerrar-menu')

    // const elMenu = $('#movil-menu')

    // function abrirMenu() {
        
    //     elMenu.classList.add('abierto')

    // }

    // function cerrarMenu() {
        
    //     elMenu.classList.remove('abierto')

    // }

    // menuAbrir.addEventListener('click', abrirMenu)

    // menuCerrar.addEventListener('click', cerrarMenu)

//     const anchoDePantallaInicial = dameElAnchoDePantalla()
    
//     animaciones(anchoDePantallaInicial, 'encabezados')
//     animaciones(anchoDePantallaInicial, 'iconos')
//     animaciones(anchoDePantallaInicial, 'cualidades')

    mostrarCabecera('#cabecera', '(min-width: 1024px)',
`<section class="cabecera__movil">
<article class="cabecera__movil--marca">
    <div class="cabecera__movil--marca_img">
        <img src="assets/img/buho-negro-desarrollos-logo.png" alt="BÚHO NEGRO DESARROLLOS" />
    </div>
    <div class="cabecera__movil--marca_txt">
        <h1><span class="h1__01">BÚHO</span><span class="h1__02">NEGRO</span></h1>
    </div>
</article>
<article class="cabecera__movil--menu_btn">
    <button id="boton-abrir-menu">
        <svg role="img">
            <use href="assets/img/iconos/iconos.svg#menu"></use>
        </svg>
    </button>
</article>
</section>
<section class="cabecera__movil--menu" id="movil-menu">
<div class="cabecera__movil--menu_cerrar">
    <button id="boton-cerrar-menu">
        <svg role="img">
            <use href="assets/img/iconos/iconos.svg#cerrar-o-fill"></use>
        </svg>
    </button>
</div>
<nav class="cabecera__movil--menu_menu">
    <ul>
        <li><a>Inicio</a></li>
        <li><a>Nosotros</a></li>
        <li><a>Servicios</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contáctenos</a></li>
        <li><a>Blog</a></li>
        <li>
            <div>
                <a>
                    <svg role="img">
                        <use href="assets/img/iconos/iconos.svg#linkedin"></use>
                    </svg>
                </a>
            </div>
            <div>
                <a>
                    <svg role="img">
                        <use href="assets/img/iconos/iconos.svg#instagram"></use>
                    </svg>
                </a>
            </div>
            <div>
                <a>
                    <svg role="img">
                        <use href="assets/img/iconos/iconos.svg#github"></use>
                    </svg>
                </a>
            </div>
        </li>
    </ul>
</nav>
</section>`,
`<section class="cabecera__dkp">
<article class="cabecera__dkp--marca">
    <div class="cabecera__dkp--marca_img">
        <img src="assets/img/buho-negro-desarrollos-logo.png" alt="BÚHO NEGRO DESARROLLOS" />
    </div>
    <div class="cabecera__dkp--marca_txt">
        <h1><span class="h1__01--dkp">BÚHO</span><span class="h1__02--dkp">NEGRO</span></h1>
    </div>
</article>
<nav class="cabecera__dkp--menu">
    <ul>
        <li><a>Inicio</a></li>
        <li><a>Nosotros</a></li>
        <li><a>Servicios</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contáctenos</a></li>
        <li><a>Blog</a></li>
    </ul>
</nav>
</section>`)



//     responsiveSlider('#contenido-clientes-contenedor', '(min-width: 1024px)', `<div class="contenido__clientes--slider" id="clientes-slider">
// <div class="clientes__slider--slide">
//     <a href="https://www.expoyerweb.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_expoyer_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://fabrilmadererasa.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_fabril_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.kanjitech.com/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_kanji_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.moraspuertas.com/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_moras_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://novakasaviviendas.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_novakasa_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.oblak.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_oblak_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.orbis.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_orbis_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.pinceleseltucan.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_pincelestucan_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.rheem.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_rheem_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://simet.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_simet_logo_01.jpg" />
//     </a>
// </div>
// <div class="clientes__slider--slide">
//     <a href="https://www.viamo.com/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_viamo_logo_01.jpg" />
//     </a>
// </div>
// </div>`, `<div class="contenido__clientes--logos">
// <ul>
// <li>
//     <a href="https://www.expoyerweb.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_expoyer_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://fabrilmadererasa.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_fabril_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.kanjitech.com/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_kanji_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.moraspuertas.com/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_moras_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://novakasaviviendas.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_novakasa_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.oblak.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_oblak_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.orbis.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_orbis_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.pinceleseltucan.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_pincelestucan_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://www.rheem.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_rheem_logo_01.jpg" />
//     </a>
// </li>
// <li>
//     <a href="https://simet.com.ar/" target="_blank" rel="noopener noreferrer">
//         <img src="assets/img/clientes/clientes_simet_logo_01.jpg" />
//     </a>
// </li>
// </ul>
// </div>`)



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