import mostrarCabecera from './cabecera_responsive.js'
import carrouselContenido from './carrousel_contenido.js'
// import dameElAnchoDePantalla from './funciones_globales/ancho_pantalla.js'
import animacionNosotros from './animaciones/animacion_nosotros.js'
import animacionServicios from './animaciones/animacion_servicios.js'
import animacionPortfolio from './animaciones/animacion_portfolio.js'
import listaPortfolio from './mostrarPortfolio.js'
import mostrarLosProyectos from './proyectos_responsive.js'
import animacionProyectos from './animaciones/animacion_proyectos.js'

document.addEventListener('DOMContentLoaded', ()=> {

    

    mostrarCabecera('#cabecera', '(min-width: 1024px)',
        `<section class="cabecera__movil">
            <article class="cabecera__movil--marca">
                <div class="cabecera__movil--marca_img">
                    <img src="assets/img/buho-negro-desarrollos-logo.png" alt="BÚHO WAPPS DESARROLLOS" />
                </div>
                <div class="cabecera__movil--marca_txt">
                    <h1><span class="h1__01">BÚHO</span><span class="h1__02">WAPPS</span></h1>
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
                    <li><a href="index.html" id="menu-mov-inicio">Inicio</a></li>
                    <li><a href="#contenido-info" id="menu-mov-nosotros">Nosotros</a></li>
                    <li><a href="#contenido-servicios" id="menu-mov-servicios">Servicios</a></li>
                    <li><a href="#contenido-portfolio" id="menu-mov-portfolio">Portfolio</a></li>
                    <li><a href="#carrousel-proyectos" id="menu-mov-proyectos">Proyectos</a></li>
                    <li><a href="#pie" id="menu-mov-presup">Presupueste</a></li>
                    <li><a href="#contactos-ancla" id="menu-mov-contacto">Contáctenos</a></li>
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
                                    <use href="assets/img/iconos/iconos.svg#xtwitter"></use>
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
                    <img src="assets/img/buho-negro-desarrollos-logo.png" alt="BÚHO WAPPS DESARROLLOS" />
                </div>
                <div class="cabecera__dkp--marca_txt">
                    <h1><span class="h1__01--dkp">BÚHO</span><span class="h1__02--dkp">WAPPS</span></h1>
                </div>
            </article>
            <nav class="cabecera__dkp--menu">
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Nosotros</a></li>
                    <li><a>Servicios</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Proyectos</a></li>
                    <li><a>Contáctenos</a></li>
                </ul>
            </nav>
    </section>`)

    animacionNosotros()

    animacionServicios()

    animacionPortfolio()

    listaPortfolio()

    mostrarLosProyectos('#contenido-proyectos', '(min-width: 1024px)',
        `<h3 id="contenido-info-proyectos-titulo">Proyectos</h3>
        <div id="carrousel-proyectos">
            <div id="proy-gal_mov">
                <div class="proy__gal--mov_img-gde-cont">
                    <div class="gal__mov--btn">
                        <button id="btn-mov-retro" type="button">
                            <svg role="img">
                                <use href="assets/img/iconos/iconos.svg#chevron-izq"></use>
                            </svg>
                        </button>
                    </div>
                    <div class="gal__mov--img_gde-slider_cont">
                        <div id="galeria-mov">
                        </div>
                    </div>
                    <div class="gal__mov--btn">
                        <button id="btn-mov-avz" type="button">
                            <svg role="img">
                                <use href="assets/img/iconos/iconos.svg#chevron-drch"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="contenido__info--proyectos_txt" id="contenido-info-proyectos-txt">
            <h5>¡Atención!</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper dictum velit, id commodo elit tristique a. Quisque velit leo, lobortis a bibendum ac, placerat sed leo. Sed quis auctor mauris.</p>
            <button class="btn_02" type="button">SABER MAS</button>
        </div>`,
    `<h3 id="contenido-info-proyectos-titulo">Proyectos</h3>`)

    animacionProyectos()

    // carrouselContenido()

    // const anchoDePantallaInicial = dameElAnchoDePantalla()
    // animacionNosotros(anchoDePantallaInicial)

    // window.addEventListener('resize', ()=> {
    //     const anchoDePantalla = dameElAnchoDePantalla()
    //     animacionNosotros(anchoDePantalla)
        
    // })


})

// window.addEventListener('resize', ()=> {
//     const anchoDePantalla = dameElAnchoDePantalla()
//     animacionNosotros(anchoDePantalla)
    
// })

carrouselContenido()