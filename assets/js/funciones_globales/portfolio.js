export default function portfolio() {

    const trabajosRealizados = [
        {
            id: 1,
            seccion: 'portfolio',
            categ: 'Desarrollo Web Front End',
            cliente: 'International Fasteners S.A.',
            desc: 'Sitio Web simple desarrollado en HTML con estilos en SaSS-CSS y sistema de javascript modular.',
            url: 'https://intfasteners.com.ar/',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_web.jpg'
        },
        {
            id: 2,
            seccion: 'portfolio',
            categ: 'Desarrollo Web Front End',
            cliente: 'Isabel Rivas',
            desc: 'Sitio Web simple desarrollado en HTML con estilos en SaSS-CSS.',
            url: 'https://salvaje1945.github.io/proyectofinalescriba/',
            alt: 'Isabel Rivas',
            img: 'assets/img/portfolio/isabel_rivas_web.jpg'
        },
        {
            id: 3,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Catálogo de productos diseñado tanto para impresión como para distribución digital en formato PDF.',
            url: 'https://intfasteners.com.ar/assets/files/INTERNATIONAL%20FASTENERS%20-%20CATALOGO%202022%20-%20MAQUINAS%20Y%20HERRAMIENTAS%20NEUMATICAS.pdf',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_catalogo.jpg'
        },
        {
            id: 4,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Cartelería institucional diseñada tanto para impresión como para distribución digital en formato PDF.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_carteleria.jpg'
        },
        {
            id: 5,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores. Diseños varios.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        },
        {
            id: 6,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Video institucional para canal de Youtube.',
            url: 'https://www.youtube.com/watch?v=MpNUe5sR4LU',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_video-institucional.jpg'
        },
        {
            id: 7,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores. Diseños varios.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        },
        {
            id: 8,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores. Diseños varios.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        },
        {
            id: 9,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores. Diseños varios.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        },
        {
            id: 10,
            seccion: 'portfolio',
            categ: 'Imagen Corporativa',
            cliente: 'International Fasteners S.A.',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores. Diseños varios.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        },
        {
            id: 11,
            seccion: 'proyectos',
            categ: 'Desarrollo integral de App',
            cliente: 'App de turismo',
            desc: 'Sitio Web simple desarrollado en HTML con estilos en SaSS-CSS y sistema de javascript modular.',
            url: 'https://intfasteners.com.ar/',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_web.jpg'
        },
        {
            id: 12,
            seccion: 'proyectos',
            categ: 'Desarrollo integral de App',
            cliente: 'App de florería',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores.',
            url: 'https://salvaje1945.github.io/proyectofinalescriba/',
            alt: 'Isabel Rivas',
            img: 'assets/img/portfolio/isabel_rivas_web.jpg'
        },
        {
            id: 13,
            seccion: 'proyectos',
            categ: 'Desarrollo integral de App',
            cliente: 'App de comidas',
            desc: 'Catálogo de productos diseñado tanto para impresión como para distribución digital en formato PDF.',
            url: 'https://intfasteners.com.ar/assets/files/INTERNATIONAL%20FASTENERS%20-%20CATALOGO%202022%20-%20MAQUINAS%20Y%20HERRAMIENTAS%20NEUMATICAS.pdf',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_catalogo.jpg'
        },
        {
            id: 14,
            seccion: 'proyectos',
            categ: 'Imagen Corporativa',
            cliente: 'App de prostitutas',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_catalogo.jpg'
        },
        {
            id: 15,
            seccion: 'proyectos',
            categ: 'Imagen Corporativa',
            cliente: 'App de falopa',
            desc: 'Cartelería institucional diseñada tanto para impresión como para distribución digital en formato PDF.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_carteleria.jpg'
        },
        {
            id: 16,
            seccion: 'proyectos',
            categ: 'Imagen Corporativa',
            cliente: 'App de travestis',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores.',
            url: 'https://www.youtube.com/watch?v=MpNUe5sR4LU',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_video-institucional.jpg'
        },
        {
            id: 17,
            seccion: 'proyectos',
            categ: 'Imagen Corporativa',
            cliente: 'App de queso chedar',
            desc: 'Tarjetas de felicitación y/o conmemoración por eventos destinada a clientes y proveedores.',
            url: '#',
            alt: 'International Fasteners S.A.',
            img: 'assets/img/portfolio/international_fasteners_tarjeta.jpg'
        }
    ]

    return trabajosRealizados

}