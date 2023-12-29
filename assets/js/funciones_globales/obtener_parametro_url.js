export default function obtenerParametrosUrl() {
    let parametros = {};
    let url = window.location.search.substring(1).split('&');
    for (let i = 0; i < url.length; i++) {
      let parametro = url[i].split('=');
      parametros[parametro[0]] = decodeURIComponent(parametro[1]);
    }
    return parametros;
}