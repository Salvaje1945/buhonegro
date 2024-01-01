export default function productos() {

    // 14-12-2023: ARREGLAR LOS ENLACES DE LAS TABLAS 

    const listaProductos = [
        {
            id: 1,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas V (71)',
            desc: 'Las grampas V (Insumo para herramienta neumática, código internacional: 71), por el diámetro de su alambre y su ancho tan específico, son utilizadas en trabajos de fijación donde se busca resaltar el resultado estético. Así, se las puede encontrar en la fabricación de monturas, tapicería de finos amoblamientos, y trabajos de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>V</td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            </table>`,
            url: 'grampas-v',
            alt: 'Grampas tipo V.',
            thumb: 'assets/img/insumos/grampas-v.jpg',
            img1: 'assets/img/insumos/grampas-v_img1.jpg',
            img2: 'assets/img/insumos/grampas-v_img2.jpg',
            img3: 'assets/img/insumos/grampas-v_img3.jpg'
        },
        {
            id: 2,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas A (80)',
            desc: 'Nuestras grampas A (Insumo para herramientas neumáticas. Código internacional: 80) son empleadas en el tapizado de sillas, sillones, butacas de automotores y vehículos náuticos, colocación de punteras plásticas y forros de sommiers, respaldos de camas, fabricación de aberturas y carpintería. También son empleadas para la colocación denylon protector en pallets, a modo de aislante.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A</td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            </table>`,
            url: 'grampas-a',
            alt: 'Grampas tipo A.',
            thumb: 'assets/img/insumos/grampas-a.jpg',
            img1: 'assets/img/insumos/grampas-a_img1.jpg',
            img2: 'assets/img/insumos/grampas-a_img2.jpg',
            img3: 'assets/img/insumos/grampas-a_img3.jpg'
        },
        {
            id: 3,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas AD (84)',
            desc: 'Las grampas AD (Insumo para herramientas neumáticas. Código internacional: 84) pueden ser encontradas en un vasto universo de aplicaciones. En tapicería, pueden ser empleadas en la fabricación de mobiliario, en la industria automotriz, y en el sector náutico. También son elegidas para el armado de muebles de melamina, y para la colocación de Tyvek y Ruberoid durante la construcción en viviendas en madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AD</td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-o">O</a></td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            </table>`,
            url: 'grampas-ad',
            alt: 'Grampas tipo AD.',
            thumb: 'assets/img/insumos/grampas-ad.jpg',
            img1: 'assets/img/insumos/grampas-ad_img1.jpg',
            img2: 'assets/img/insumos/grampas-ad_img2.jpg',
            img3: 'assets/img/insumos/grampas-ad_img3.jpg'
        },
        {
            id: 4,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas O (97)',
            desc: 'Las grampas O (insumo para herramienta neumática, código internacional 93 o 97) son utilizadas en rubros tan diferentes como la industria del calzado (para la sujeción temporaria de la plantilla durante el proceso de armado), la fabricación de pinceles, monturas para caballos, el ensamblado de muebles de madera maciza y melamina, escaleras y caballetes.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>O</td>
                <td>4,5</td>
                <td>06, 10, 14, 18, 22, 25</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-ad">AD</a></td>
                <td>12,1</td>
                <td>04, 06, 08, 10, 12, 14, 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-a">A</a></td>
                <td>12,8</td>
                <td>04, 06, 08, 10, 12, 14, 16, 22, 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-v">V</a></td>
                <td>9,0</td>
                <td>08, 14</td>
                <td>0,60 X 0,75</td>
            </tr>
            </table>`,
            url: 'grampas-o',
            alt: 'Grampas tipo O.',
            thumb: 'assets/img/insumos/grampas-o.jpg',
            img1: 'assets/img/insumos/grampas-o_img1.jpg',
            img2: 'assets/img/insumos/grampas-o_img2.jpg',
            img3: 'assets/img/insumos/grampas-o_img3.jpg'
        },
        {
            id: 5,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas E (90)',
            desc: 'La carpintería es sin dudas el principal ramo de actividad donde las Grampas E (insumo para herramienta neumática, Código internacional: 90) se destacan. Se las puede encontrar en el proceso de manufactura de sillas, mesas, roperos, bajomesadas, bases de sommiers, heladeras comerciales, cartelería comercial, embalajes livianos de madera, y el armado del interior de puertas placa.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>E</td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-e',
            alt: 'Grampas tipo E.',
            thumb: 'assets/img/insumos/grampas-e.jpg',
            img1: 'assets/img/insumos/grampas-e_img1.jpg',
            img2: 'assets/img/insumos/grampas-e_img2.jpg',
            img3: 'assets/img/insumos/grampas-e_img3.jpg'
        },
        {
            id: 6,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas H (92)',
            desc: 'La Grampa tipo H (insumo para herramienta neumática, Código internacional: 92) es una grampa sumamente específica, pero a la vez con una importante demanda en el mercado. La grampa H es de suma utilidad cuando nos referimos al proceso de fabricación en serie de aberturas de madera de alta calidad, sillas, roperos, camas, mesas y sillones, por contar con una ancha corona que eleva el nivel de la fijación.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>H</td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-h',
            alt: 'Grampas tipo H.',
            thumb: 'assets/img/insumos/grampas-h.jpg',
            img1: 'assets/img/insumos/grampas-h_img1.jpg',
            img2: 'assets/img/insumos/grampas-h_img2.jpg',
            img3: 'assets/img/insumos/grampas-h_img3.jpg'
        },
        {
            id: 7,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas L (14)',
            desc: 'Las Grampas tipo L (insumo para herramienta neumática, Código internacional: 14 o 100) son las más versátiles de nuestro catálogo. El hecho de ofrecer un rango tan amplio de longitudes -que van desde los 19 a los 65 mm de largo- las convierte en una solución sumamente durable para la fabricación de todo tipo de muebles, estructuras de sillones, heladeras comerciales, carpintería en madera plástica, escaleras de pintor, y embalajes de madera. También son elegidas para efectuar el emplacado con OSB en la construcción en madera, y la fijación de fibrocemento a modo de siding.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L</td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-b">B</a></td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'grampas-l',
            alt: 'Grampas tipo L.',
            thumb: 'assets/img/insumos/grampas-l.jpg',
            img1: 'assets/img/insumos/grampas-l_img1.jpg',
            img2: 'assets/img/insumos/grampas-l_img2.jpg',
            img3: 'assets/img/insumos/grampas-l_img3.jpg'
        },
        {
            id: 8,
            categ: 'Insumos',
            subcateg: 'Grampas',
            nombre: 'Grampas B (35)',
            desc: '¿Cuál es la grampa destinada al proceso de embalaje por excelencia? Nuestro modelo de Grampa tipo B (insumo para herramienta neumática, Código internacional: 35), cobreado y en distintas longitudes que le permiten cerrar todo tipo de cajas de cartón corrugado: sea para embalaje de televisores, electrodomésticos, sillas, vanitories, pequeños muebles en madera y melamina, válvulas esféricas, así como repuestos para automotores.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>B</td>
                <td>35</td>
                <td>16, 19, 22</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-e">E</a></td>
                <td>5,7</td>
                <td>16, 20, 25, 30, 35, 40, 45, 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-h">H</a></td>
                <td>8,6</td>
                <td>21, 25, 30, 35, 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=grampas-l">L</a></td>
                <td>10,7</td>
                <td>16, 19, 25, 30, 35, 40, 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'grampas-b',
            alt: 'Grampas tipo B.',
            thumb: 'assets/img/insumos/grampas-b.jpg',
            img1: 'assets/img/insumos/grampas-b_img1.jpg',
            img2: 'assets/img/insumos/grampas-b_img2.jpg',
            img3: 'assets/img/insumos/grampas-b_img3.jpg'
        },

        // CLAVOS 

        {
            id: 9,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos J',
            desc: 'Los Clavos tipo J (insumo para herramienta neumática, Código internacional: Tipin) o “clavillos J cabeza perdida” son un insumo que tiene múltiples utilidades: se utilizan para la fabricación de estructuras en melamina (estanterías, alacenas, bajomesadas, vanitories), la colocación de molduras en contravidrios, artesanías y muebles en MDF, colocación de machimbre en bajotechos, puertas placa, exhibidores, cartelería comercial y labores de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>J</td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            </table>`,
            url: 'clavos-j',
            alt: 'Clavos tipo J.',
            thumb: 'assets/img/insumos/clavos-j.jpg',
            img1: 'assets/img/insumos/clavos-j_img1.jpg',
            img2: 'assets/img/insumos/clavos-j_img2.jpg',
            img3: 'assets/img/insumos/clavos-j_img3.jpg'
        },
        {
            id: 10,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos N',
            desc: 'La robustez del Clavo tipo N (insumo para herramienta neumática, Código internacional: Tip) lo hace más que apto para trabajos que involucren la instalación de pisos de maderas nobles (algarrobo, roble), la fabricación de ataúdes, aberturas de madera, muebles macizos y de estilo. Cuenta con un diámetro mayor que el clavo cabeza perdida, por lo que su resistencia al desgaste y tránsito es mucho más elevada.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>N</td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            </table>`,
            url: 'clavos-n',
            alt: 'Clavos tipo N.',
            thumb: 'assets/img/insumos/clavos-n.jpg',
            img1: 'assets/img/insumos/clavos-n_img1.jpg',
            img2: 'assets/img/insumos/clavos-n_img2.jpg',
            img3: 'assets/img/insumos/clavos-n_img3.jpg'
        },
        {
            id: 11,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos T',
            desc: 'Los Clavos tipo T (insumo para herramienta neumática) son un insumo sumamente específico, elegidos por expertos en el sector de la construcción tanto tradicional, como en madera. Son empleados para la colocación de zócalos de madera sobre concreto y ladrillos (tanto huecos como macizos), la construcción de cabañas, carpintería de maderas de elevada dureza, y para el anclaje de chapa sobre concreto y madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>T</td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-rk">RK</a></td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'clavos-t',
            alt: 'Clavos tipo T.',
            thumb: 'assets/img/insumos/clavos-t.jpg',
            img1: 'assets/img/insumos/clavos-t_img1.jpg',
            img2: 'assets/img/insumos/clavos-t_img2.jpg',
            img3: 'assets/img/insumos/clavos-t_img3.jpg'
        },
        {
            id: 12,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos en rollo CNR',
            desc: 'Los Clavos en rollo CNR o “roofing” (insumo para herramienta neumática) cuentan con distintas aplicaciones, todas ellas vinculadas al mundo de la construcción de viviendas: pueden emplearse para la colocación de zinguería, así como para la instalación de pizarra asfáltica en techos. Son utilizados también para la fijación de ángulos de chapa en embalajes de madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CNR</td>
                <td>10</td>
                <td>25, 32, 38, 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-cn">CN</a></td>
                <td>5</td>
                <td>29, 40, 45, 50, 65, 80</td>
                <td>2,1 A 2,9</td>
            </tr>
            </table>`,
            url: 'clavos-cnr',
            alt: 'Clavos en rollo tipo CNR.',
            thumb: 'assets/img/insumos/clavos-cnr.jpg',
            img1: 'assets/img/insumos/clavos-cnr_img1.jpg',
            img2: 'assets/img/insumos/clavos-cnr_img2.jpg',
            img3: 'assets/img/insumos/clavos-cnr_img3.jpg'
        },
        {
            id: 13,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos en rollo CN',
            desc: 'Los Clavos CN en rollo (insumo para herramienta neumática), popularmente conocidos como “coil nailers” por su presentación en rollos electrosoldados, son el insumo que acompaña toda clavadora que se desempeñe en la fabricación de pallets y embalajes. En estos últimos años, también han sido incorporados al sistema de construcción en madera, o woodframing.e fibrocemento a modo de siding.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CN</td>
                <td>5</td>
                <td>29, 40, 45, 50, 65, 80</td>
                <td>2,1 A 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-cnr">CNR</a></td>
                <td>10</td>
                <td>25, 32, 38, 45</td>
                <td>3,1</td>
            </tr>
            </table>`,
            url: 'clavos-cn',
            alt: 'Clavos en rollo tipo CN.',
            thumb: 'assets/img/insumos/clavos-cn.jpg',
            img1: 'assets/img/insumos/clavos-cn_img1.jpg',
            img2: 'assets/img/insumos/clavos-cn_img2.jpg',
            img3: 'assets/img/insumos/clavos-cn_img3.jpg'
        },
        {
            id: 14,
            categ: 'Insumos',
            subcateg: 'Clavos',
            nombre: 'Clavos RK 21°',
            desc: 'Con el avance de la construcción en seco como alternativa eficiente y amigable con el medio ambiente, los Clavos RK 21° (insumo para herramienta neumática) se han convertido en el principal protagonista. Cuentan con un diámetro de 3,1 a 3,4, que los convierten en la opción indicada para tareas de emplacado, la fijación de bastidores y entramado, e instalación de tejados. También son usados para la confección de grandes embalajes en madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>RK</td>
                <td>7</td>
                <td>65, 70, 90, 100</td>
                <td>3,1 A 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-j">J</a></td>
                <td>S/ cabeza</td>
                <td>16, 19, 25, 30, 35, 40, 45, 50</td>
                <td>1 x 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-n">N</a></td>
                <td>1,57</td>
                <td>19, 25, 30, 35, 40, 45, 50, 56, 63</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavos-t">T</a></td>
                <td>7X2</td>
                <td>32, 38, 50, 60, 64</td>
                <td>2,2</td>
            </tr>
            </table>`,
            url: 'clavos-rk',
            alt: 'Clavos tipo RK 100.',
            thumb: 'assets/img/insumos/clavos-rk.jpg',
            img1: 'assets/img/insumos/clavos-rk_img1.jpg',
            img2: 'assets/img/insumos/clavos-rk_img2.jpg',
            img3: 'assets/img/insumos/clavos-rk_img3.jpg'
        },

        // LAMINILLAS

        {
            id: 15,
            categ: 'Insumos',
            subcateg: 'Laminillas',
            nombre: 'Laminillas Corrugadas WN (*CF)',
            desc: 'Las laminillas corrugadas WN (insumo para herramienta neumática, Código internacional: CF) son empleadas en la fabricación de muebles de algarrobo y otras maderas duras, ya que al penetrar la superficie, el su patrón genera un mayor agarre entre dos tablones puestos en paralelo. También son utilizadas en apicultura, para el clavado del ángulo del hombro en ataúdes, así como para la unión de placas para tableros en carrocerías de camiones y autobuses.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Longitud insumo</th>
                    <th>Características insumo</th>
                </tr>
            </thead>
            <tr>
                <td>10</td>
                <td>Ancho de 25mm</td>
            </tr>
            </table>`,
            url: 'laminillas-wn',
            alt: 'Laminillas Corrugadas WN.',
            thumb: 'assets/img/insumos/laminillas-wn.jpg',
            img1: 'assets/img/insumos/laminillas-wn_img1.jpg',
            img2: 'assets/img/insumos/laminillas-wn_img2.jpg',
            img3: 'assets/img/insumos/laminillas-wn_img3.jpg'
        },

        // ESPINAS

        {
            id: 16,
            categ: 'Insumos',
            subcateg: 'Espinas',
            nombre: 'Espinas AL',
            desc: 'Las espinas AL (insumo para herramienta neumática, Código internacional: Mini Pin) son la solución perfecta para todos aquellos clientes que buscan darle una estética delicada a sus creaciones. Se trata de un insumo sin cabeza, con un diámetro de apenas 0,6 mm, apto para ser empleado tanto en muebles de maderas finas, como en melamina. También se utiliza para la confección de cartelería comercial y exhibidores.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Herramientas</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AL</td>
                <td>Clavadora AL 20</td>
                <td>12, 15, 17, 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=espinas-ga">GA</a></td>
                <td>Clavadora GA 30</td>
                <td>16, 19, 25, 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'espinas-al',
            alt: 'Espinas tipo AL.',
            thumb: 'assets/img/insumos/espinas-al.jpg',
            img1: 'assets/img/insumos/espinas-al_img1.jpg',
            img2: 'assets/img/insumos/espinas-al_img2.jpg',
            img3: 'assets/img/insumos/espinas-al_img3.jpg'
        },
        {
            id: 17,
            categ: 'Insumos',
            subcateg: 'Espinas',
            nombre: 'Espinas GA',
            desc: 'Las Espinas GA (insumo para herramienta neumática, Código internacional: I Pin) son un insumo elegido en la carpintería para dar finas terminaciones a distintos tipos de productos: muebles de estilo, sillas, aberturas de madera (para la fijación de molduras y contravidrios), vanitories y todo tipo de equipamiento fabricado en melamina.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Tipo</th>
                    <th>Herramientas</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>GA</td>
                <td>Clavadora GA 30</td>
                <td>16, 19, 25, 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=espinas-al">AL</a></td>
                <td>Clavadora AL 20</td>
                <td>12, 15, 17, 20</td>
                <td>0,60</td>
            </tr>
            </table>`,
            url: 'espinas-ga',
            alt: 'Espinas tipo GA.',
            thumb: 'assets/img/insumos/espinas-ga.jpg',
            img1: 'assets/img/insumos/espinas-ga_img1.jpg',
            img2: 'assets/img/insumos/espinas-ga_img2.jpg',
            img3: 'assets/img/insumos/espinas-ga_img3.jpg'
        },

        // ENGRAMPADORAS

        {
            id: 18,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora V-16 (*71/16)',
            desc: 'La engrampadora neumática industrial modelo V 16 (Código internacional: 71/16) trabaja con grampas de 9,1 mm de ancho, razón por la cual es ideal para su uso en diferentes tareas relacionadas con la carpintería en madera, como la construcción de decorados o el ensamblado de muebles en maderas macizas, así como en la fabricación de monturas.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>V 16</td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a16ln50">A 16 LN 50</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a16">A 16</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-v16',
            alt: 'Engrampadora V-16.',
            thumb: 'assets/img/herramientas/engrampadora-v16.jpg',
            img1: 'assets/img/herramientas/engrampadora-v16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-v16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-v16_img3.jpg'
        },
        {
            id: 19,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-16 (*80/16)',
            desc: 'La engrampadora neumática industrial modelo A 16 (Código internacional: 80/16) es sin dudas la más demandada para tareas de tapicería de muebles, pero también automotriz y náutica. Se la utiliza para la fabricación de sillas, sillones, cualquier tipo de respaldo y fundas para asientos, e incluso para algunas labores de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 16</td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a16ln50">A 16 LN 50</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-v16">V 16</a></td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            </table>`,
            url: 'engrampadora-a16',
            alt: 'Engrampadora A-16.',
            thumb: 'assets/img/herramientas/engrampadora-a16.jpg',
            img1: 'assets/img/herramientas/engrampadora-a16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a16_img3.jpg'
        },
        {
            id: 20,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-16 LN 50 (*80/16 LN 50)',
            desc: 'La engrampadora neumática industrial modelo A16 LN50 (Código internacional: 80/16 LN 50) es la única engrampadora que permite tapizar cómodamente en superficies profundas. Gracias a su boquilla extendida, logra realizar fijaciones con grampas en lugares que no quedan expuestos a la vista, mejorando el aspecto final del tapizado. Puede utilizar grampas tanto de la línea A (80) como AD (84).',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 16 LN 50</td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-v16">V 16</a></td>
                <td>9,1</td>
                <td>04 a 14</td>
                <td>0,50 X 0,70</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a16">A 16</a></td>
                <td>12,8</td>
                <td>04 a 16</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-a16ln50',
            alt: 'Engrampadora A-16 LN 50.',
            thumb: 'assets/img/herramientas/engrampadora-a-16-ln-50.jpg',
            img1: 'assets/img/herramientas/engrampadora-a-16-ln-50_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a-16-ln-50_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a-16-ln-50_img3.jpg'
        },
        {
            id: 21,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora A-25 (*80/25)',
            desc: 'La engrampadora neumática industrial modelo A 25 (Código internacional: 80/25) pertenece a una familia que le es familiar a quienes se han formado en el oficio de la carpintería: utiliza grampas de 12,8 mm de ancho, pero con la ventaja de que ofrece fijaciones de 04 a 25 mm de largo. Por eso es utilizada para la colocación de fondos de muebles, sobre todo en chapadur. También es utilizada para la fabricación de cajones de frutas y verduras.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>A 25</td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-o25">O 25</a></td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-ad16">AD 16</a></td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            </table>`,
            url: 'engrampadora-a25',
            alt: 'Engrampadora A-25.',
            thumb: 'assets/img/herramientas/engrampadora-a25.jpg',
            img1: 'assets/img/herramientas/engrampadora-a25_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-a25_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-a25_img3.jpg'
        },
        {
            id: 22,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora AD-16 (*84/16)',
            desc: 'La engrampadora neumática industrial modelo AD 16 (Código internacional: 84/16) es sin dudas la más demandada para tareas de tapicería de muebles, pero también automotriz y náutica. Se la utiliza para la fabricación de sillas, sillones, cualquier tipo de respaldo y fundas para asientos, e incluso para algunas labores de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AD 16</td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-o25">O 25</a></td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a25">A 25</a></td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            </table>`,
            url: 'engrampadora-ad16',
            alt: 'Engrampadora AD-16.',
            thumb: 'assets/img/herramientas/engrampadora-ad16.jpg',
            img1: 'assets/img/herramientas/engrampadora-ad16_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-ad16_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-ad16_img3.jpg'
        },
        {
            id: 23,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora O-25 (*93/25 - 97/25)',
            desc: 'La engrampadora neumática industrial modelo O 25 (Código internacional: 93/25 - 97/25), de tamaño pequeño y peso reducido, es utilizada para labores industriales que requieren un alto nivel de formación de oficios. La fabricación de calzado de cuero, monturas para caballos, pinceles y brochas, son algunos de las aplicaciones en la que la O 25 está presente. También brinda soluciones para carpintería en distintas maderas.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>O 25</td>
                <td>4,5</td>
                <td>06 a 16</td>
                <td>0,65 X 0,95</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-a25">A 25</a></td>
                <td>12,8</td>
                <td>04 a 25</td>
                <td>0,65 X 1,00</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-ad16">AD 16</a></td>
                <td>12,1</td>
                <td>04 a 16</td>
                <td>0,55 X 0,90</td>
            </tr>
            </table>`,
            url: 'engrampadora-o25',
            alt: 'Engrampadora O-25.',
            thumb: 'assets/img/herramientas/engrampadora-o25.jpg',
            img1: 'assets/img/herramientas/engrampadora-o25_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-o25_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-o25_img3.jpg'
        },
        {
            id: 24,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora J ES-32 COMBI (*Tipin/90 32)',
            desc: 'Este modelo de clavadora neumática industrial Combi J ES32 se denomina combinada, puesto que es capaz de efectuar fijaciones con grampas de 5,7 mm de ancho de corona (línea 90), y clavillos cabeza perdida (línea Tipin/SK 300). Se la puede encontrar como protagonista en distintos trabajos de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>COMBI / J ES 32</td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-al20">AL 20</a></td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-ga30">GA 30</a></td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="clavadoras.html#clavadora-j50">J 50</a></td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'engrampadora-jes32combi',
            alt: 'Engrampadora / Clavadora J ES-32 COMBI.',
            thumb: 'assets/img/herramientas/engrampadora-jes32combi.jpg',
            img1: 'assets/img/herramientas/engrampadora-jes32combi_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-jes32combi_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-jes32combi_img3.jpg'
        },
        {
            id: 25,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora E-40 (*90/40)',
            desc: 'La engrampadora neumática industrial modelo E 40 (Código internacional: 90/40) es el modelo elegido por varios de los rubros que involucran objetos construidos en madera y otros materiales, como la melamina y el MDF. La fabricación de decorados, exhibidores y stands, cartelería comercial, amoblamientos para el hogar (sillas, sillones, mesas, placards), y tantas otras labores de carpintería industrial la tienen como protagonista.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>E 40</td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-e40',
            alt: 'Engrampadora E-40.',
            thumb: 'assets/img/herramientas/engrampadora-e40.jpg',
            img1: 'assets/img/herramientas/engrampadora-e40_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-e40_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-e40_img3.jpg'
        },
        {
            id: 26,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora H-40 (*92/40)',
            desc: 'La engrampadora neumática industrial modelo H 40 (Código internacional: 92/40) es una engrampadora neumática a la que se la puede relacionar con varios rubros distintos. Desde la fabricación de aberturas en madera, el ensamblado de estructuras para sillones y sillas, hasta labores de carpintería general, esa herramienta le da el usuario la posibilidad de trabajar con grampas en un rango de 21 a 40 mm.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>H 40</td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-h40',
            alt: 'Engrampadora H-40.',
            thumb: 'assets/img/herramientas/engrampadora-h40.jpg',
            img1: 'assets/img/herramientas/engrampadora-h40_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-h40_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-h40_img3.jpg'
        },
        {
            id: 27,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora L-50 (*100/50 - 14/50)',
            desc: 'La engrampadora neumática industrial modelo L 50 (Código internacional: 100/50 - 14/50) uno de los modelos con usos más diversos en el universo de engrampadoras neumáticas industriales. Se la suele utilizar en la fabricación de estructuras de sillones, tarimas de madera, ataúdes, embalajes de madera, y emplacado en construcción en madera, ya que fija las grampas de mayor espesor y resistencia del mercado.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L 50</td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l65">L 65</a></td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'engrampadora-l50',
            alt: 'Engrampadora L-50.',
            thumb: 'assets/img/herramientas/engrampadora-l50.jpg',
            img1: 'assets/img/herramientas/engrampadora-l50_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-l50_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-l50_img3.jpg'
        },
        {
            id: 28,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora L-65 (*100/65 - 14/65)',
            desc: 'La Engrampadora neumática industrial modelo L 65 (Código internacional: 100/65 - 14/65) trabaja con grampas de 10,7 mm de ancho, en longitudes que van desde los 16 a los 65 mm. Es la elegida al momento de fabricar embalajes y jaulas de madera, sillones, mobiliario de gran porte y otras aplicaciones.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>L 65</td>
                <td>10,7</td>
                <td>16 A 65</td>
                <td>1,40 X 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-e40">E 40</a></td>
                <td>5,7</td>
                <td>16 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-h40">H 40</a></td>
                <td>8,6</td>
                <td>20 a 40</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=engrampadora-l50">L 50</a></td>
                <td>10,7</td>
                <td>16 a 50</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-l65',
            alt: 'Engrampadora L-65.',
            thumb: 'assets/img/herramientas/engrampadora-l65.jpg',
            img1: 'assets/img/herramientas/engrampadora-l65_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-l65_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-l65_img3.jpg'
        },
        {
            id: 29,
            categ: 'Herramientas',
            subcateg: 'Engrampadoras',
            nombre: 'Engrampadora B-19 (*35/19)',
            desc: 'La engrampadora neumática industrial modelo B 19 (Código internacional: 35/19) es usado para el cierre de cajas de cartón corrugado en embalajes, y le da la posibilidad al usuario de trabajar con dos medidas: 5/8” (16 mm) y ¾” (19 mm). Su fabricación, en materiales de primera calidad, la convierten en la opción adecuada para su uso en la industria.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Ancho grampa</th>
                    <th>Longitud grampa</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>B-19</td>
                <td>35</td>
                <td>16 A 19</td>
                <td>1,40 X 1,60</td>
            </tr>
            </table>`,
            url: 'engrampadora-b19',
            alt: 'Engrampadora B-19.',
            thumb: 'assets/img/herramientas/engrampadora-b19.jpg',
            img1: 'assets/img/herramientas/engrampadora-b19_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-b19_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-b19_img3.jpg'
        },


        // CLAVADORAS

        {
            id: 30,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora GA-30 (*I Pin)',
            desc: 'La clavadora neumática industrial modelo GA 30 (Código Internacional: I Pin) sirve para la colocación de espinas, que son similares a los clavillos cabeza perdida con la única diferencia que no tienen cabeza. Por ello, son específicas para efectuar fijaciones de terminación en muebles, hasta 30 mm de profundidad, sin dejar marcas a la vista.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>GA 30</td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-jes32combi">COMBI / J ES 32</a></td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-al20">AL 20</a></td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-j50">J 50</a></td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'clavadora-ga30',
            alt: 'clavadora GA-30.',
            thumb: 'assets/img/herramientas/clavadora-ga30.jpg',
            img1: 'assets/img/herramientas/clavadora-ga30_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-ga30_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-ga30_img3.jpg'
        },
        {
            id: 31,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora AL-20 (*Mini-Pin 6)',
            desc: 'La clavadora neumática industrial modelo AL 20 (Código Internacional: Mini-Pin 6), fabricado en Alemania, trabaja con micro-espinas invisibles en un rango de 12 a 20 mm de longitud. Le permite al usuario dar terminaciones perfectas y que estéticamente no interfieran con el resultado final. Estas espinas son usadas en muebles de melamina, exhibidores, así como en la fabricación de aberturas en madera (ventanas, puertas, ventanales), entre otras aplicaciones.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>AL 20</td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-jes32combi">COMBI / J ES 32</a></td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-ga30">GA 30</a></td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-j50">J 50</a></td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'clavadora-al20',
            alt: 'clavadora AL-20.',
            thumb: 'assets/img/herramientas/clavadora-al20.jpg',
            img1: 'assets/img/herramientas/clavadora-al20_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-al20_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-al20_img3.jpg'
        },
        {
            id: 32,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora J ES-32 COMBI (*Tipin/90 32)',
            desc: 'Este modelo de clavadora neumática industrial Combi J ES32 se denomina combinada, puesto que es capaz de efectuar fijaciones con grampas de 5,7 mm de ancho de corona (línea 90), y clavillos cabeza perdida (línea Tipin/SK 300). Se la puede encontrar como protagonista en distintos trabajos de carpintería en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>COMBI / J ES 32</td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-al20">AL 20</a></td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-ga30">GA 30</a></td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-j50">J 50</a></td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'clavadora-jes32combi',
            alt: 'Clavadora / Engrampadora J ES-32 COMBI.',
            thumb: 'assets/img/herramientas/engrampadora-jes32combi.jpg',
            img1: 'assets/img/herramientas/engrampadora-jes32combi_img1.jpg',
            img2: 'assets/img/herramientas/engrampadora-jes32combi_img2.jpg',
            img3: 'assets/img/herramientas/engrampadora-jes32combi_img3.jpg'
        },
        {
            id: 33,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora J-50 (*TiPin-SK300)',
            desc: 'La clavadora neumática industrial modelo J 50 (Código Internacional: TiPin-SK300) es el modelo más popular en carpintería, y se emplea para darle finas terminaciones en muebles. Al efectuar fijaciones con clavos cabeza perdida, la clavadora J 50 es utilizada para la colocación de molduras, así como para el montaje de muebles en melanina, ya que su insumo no interfiere con la estética general del producto final.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>J 50</td>
                <td><a href="clavos.html">Clavillos</a></td>
                <td>16 a 50</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-jes32combi">COMBI / J ES 32</a></td>
                <td><a href="grampas.html">Clavillos / Grampas</a></td>
                <td>16 a 32</td>
                <td>1,00 X 1,25</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-al20">AL 20</a></td>
                <td><a href="espinas.html">Micro - espinas</a></td>
                <td>12 a 20</td>
                <td>0,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-ga30">GA 30</a></td>
                <td><a href="espinas.html">Espinas</a></td>
                <td>15 a 30</td>
                <td>1,00 X 1,25</td>
            </tr>
            </table>`,
            url: 'clavadora-j50',
            alt: 'Clavadora J-50.',
            thumb: 'assets/img/herramientas/clavadora-j50.jpg',
            img1: 'assets/img/herramientas/clavadora-j50_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-j50_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-j50_img3.jpg'
        },
        {
            id: 34,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora N-50 (*Tip 50 - SK400)',
            desc: 'El modelo de clavadora neumática industrial N 50 (Código Internacional: Tip 50/SK 400) es uno sumamente versátil en nuestro universo de clavadoras neumáticas. Al trabajar con clavos que van de los 19 a los 50 mm, se la emplea para la colocación de pisos en maderas de alta dureza como el roble o algarrobo, para la fabricación de ataúdes, aberturas en madera, y mobiliario en general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>N 50</td>
                <td>1,75 x 2,80</td>
                <td>19 a 50</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-rk100">RK 100</a></td>
                <td>7,4</td>
                <td>65 a 100</td>
                <td>3,1 - 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n65">N 65</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 63</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-t65">T 65</a></td>
                <td>2,2 x 7</td>
                <td>32 a 64</td>
                <td>2,20</td>
            </tr>
            </table>`,
            url: 'clavadora-n50',
            alt: 'clavadora N-50.',
            thumb: 'assets/img/herramientas/clavadora-n50.jpg',
            img1: 'assets/img/herramientas/clavadora-n50_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-n50_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-n50_img3.jpg'
        },
        {
            id: 35,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora N-65 (*Tip 65 - SK400)',
            desc: 'A los beneficios que le brinda al usuario su homóloga, la N 50, la clavadora neumática industrial modelo N 65 (Tip 65/SK 400) le suma un rango aún más amplio de trabajo. La N 65 es capaz de efectuar fijaciones con clavos de 56 y 63 mm de longitud, lo que la convierte en una solución perfecta para la instalación de pisos, decks, pérgolas y distintas superficies de madera y materiales alternativos como el WPC.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>N 65</td>
                <td>1,75 x 2,80</td>
                <td>19 a 63</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-t65">T 65</a></td>
                <td>2,2 x 7</td>
                <td>32 a 64</td>
                <td>2,20</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-rk100">RK 100</a></td>
                <td>7,4</td>
                <td>65 a 100</td>
                <td>3,1 - 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n50">N 50</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 50</td>
                <td>1,40 x 1,60</td>
            </tr>
            </table>`,
            url: 'clavadora-n65',
            alt: 'clavadora N-65.',
            thumb: 'assets/img/herramientas/clavadora-n65.jpg',
            img1: 'assets/img/herramientas/clavadora-n65_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-n65_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-n65_img3.jpg'
        },
        {
            id: 36,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora T-65 (*ST 65 - SK500)',
            desc: 'La clavadora neumática industrial modelo T 65 (Código Internacional: ST 65 - SK500) es una clavadora íntimamente relacionada con la industria de la construcción. Tanto en métodos edilicios tradicionales como en los más innovadores, esta herramienta neumática es capaz de penetrar madera y concreto. Por eso, es elegida para la fijación de zócalos, así como en la construcción de cabañas e instalación de decks.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>T 65</td>
                <td>2,2 x 7</td>
                <td>32 a 64</td>
                <td>2,20</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-rk100">RK 100</a></td>
                <td>7,4</td>
                <td>65 a 100</td>
                <td>3,1 - 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n50">N 50</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 50</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n65">N 65</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 63</td>
                <td>1,40 x 1,60</td>
            </tr>
            </table>`,
            url: 'clavadora-t65',
            alt: 'clavadora T-65.',
            thumb: 'assets/img/herramientas/clavadora-t65.jpg',
            img1: 'assets/img/herramientas/clavadora-t65_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-t65_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-t65_img3.jpg'
        },
        {
            id: 37,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora WN-15 (*CF 15)',
            desc: 'La clavadora neumática industrial modelo WN 15 (Código Internacional: CF 15) efectúa fijaciones con laminillas corrugadas (chapitas) hasta 15 mm de longitud. Es específica para trabajar sobre maderas de gran dureza como el algarrobo o el quebracho, ya que cuenta con un cilindro de gran diámetro para imprimir un golpe capaz de penetrar dos tablas puestas en paralelo.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Caract. insumo</th>
                </tr>
            </thead>
            <tr>
                <td>WN 15</td>
                <td><a href="laminillas.html">Laminilla corrugada</a></td>
                <td>10 a 12</td>
                <td>Ancho de 25mm</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=sacaclavos-sc57">Saca clavos SC 57</a></td>
                <td><a href="clavos.html">Clavo en rollo</a></td>
                <td>29 a 80</td>
                <td>Diámetro de 2,1 a 2,9</td>
            </tr>
            </table>`,
            url: 'clavadora-wn15',
            alt: 'clavadora WN-15.',
            thumb: 'assets/img/herramientas/clavadora-wn15.jpg',
            img1: 'assets/img/herramientas/clavadora-wn15_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-wn15_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-wn15_img3.jpg'
        },
        {
            id: 38,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Saca clavos SC-57 (*Nail Puncher 57)',
            desc: 'El modelo sacaclavos SC 57 es ideal para trabajos de reciclado de pallets, dado que viene equipada con una boquilla que permite la extracción de clavos de hasta 2,9 mm sin lastimar la madera. Su accionamiento es muy sencillo y le permite al operario aumentar su productividad, liberando tablones a una mayor velocidad que manualmente.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Insumo</th>
                    <th>Longitud insumo</th>
                    <th>Caract. insumo</th>
                </tr>
            </thead>
            <tr>
                <td>Saca clavos SC 57</td>
                <td><a href="clavos.html">Clavo en rollo</a></td>
                <td>29 a 80</td>
                <td>Diámetro de 2,1 a 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-wn15">WN 15</a></td>
                <td><a href="laminillas.html">Laminilla corrugada</a></td>
                <td>10 a 12</td>
                <td>Ancho de 25mm</td>
            </tr>
            </table>`,
            url: 'clavadora-sacaclavos-sc57',
            alt: 'Saca clavos SC-57.',
            thumb: 'assets/img/herramientas/clavadora-sacaclavos-sc57.jpg',
            img1: 'assets/img/herramientas/clavadora-sacaclavos-sc57_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-sacaclavos-sc57_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-sacaclavos-sc57_img3.jpg'
        },
        {
            id: 39,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora CNR-45 (*Roofing Coil Nailer 45)',
            desc: 'La clavadora neumática industrial CNR 45 es una clavadora roofing: ello implica que está pensada para la colocación de pizarra asfáltica, colocación de zinguería y otras labores relacionadas con la instalación de techos. Sin embargo, sus bondades no acaban allí, dado que por trabajar con clavos de 1 pulgada también es elegida para fijaciones de poco espesor en embalajes y otras superficies de madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CNR 45</td>
                <td>10</td>
                <td>22 a 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn90">CN 90</a></td>
                <td>7</td>
                <td>50 a 90</td>
                <td>2,5 a 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn55">CN 55</a></td>
                <td>5</td>
                <td>29 a 55</td>
                <td>2,1 a 2,3</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn70">CN 70</a></td>
                <td>6</td>
                <td>40 a 70</td>
                <td>2,3 a 2,5</td>
            </tr>
            </table>`,
            url: 'clavadora-cnr45',
            alt: 'Clavadora CNR-45.',
            thumb: 'assets/img/herramientas/clavadora-cnr45.jpg',
            img1: 'assets/img/herramientas/clavadora-cnr45_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-cnr45_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-cnr45_img3.jpg'
        },
        {
            id: 40,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora CN-55 (*Coil Nailer 55)',
            desc: 'La clavadora neumática industrial modelo CN 55 es el modelo más pequeño del segmento de clavadoras en rollo. Generalmente, se utiliza para la fijación con clavos en rollo electrosoldados de hasta 2 pulgadas en labores de embalaje que involucran madera y cartón. Cuenta con un peso reducido y un diseño que la hace muy fácil de maniobrar.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CN 55</td>
                <td>5</td>
                <td>29 a 55</td>
                <td>2,1 a 2,3</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn90">CN 90</a></td>
                <td>7</td>
                <td>50 a 90</td>
                <td>2,5 a 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cnr45">CNR 45</a></td>
                <td>10</td>
                <td>22 a 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn70">CN 70</a></td>
                <td>6</td>
                <td>40 a 70</td>
                <td>2,3 a 2,5</td>
            </tr>
            </table>`,
            url: 'clavadora-cn55',
            alt: 'Clavadora CN-55.',
            thumb: 'assets/img/herramientas/clavadora-cn55.jpg',
            img1: 'assets/img/herramientas/clavadora-cn55_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-cn55_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-cn55_img3.jpg'
        },
        {
            id: 41,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora CN-70 (*Coil Nailer 70)',
            desc: 'La clavadora neumática industrial modelo CN 70 es la opción segura para la fabricación de pallets, pero también para labores de emplacado, en construcción de viviendas en madera y prefabricadas, ya que trabaja con clavos electrosoldados hasta 65 mm (2 ½ pulgadas). Ha sido desarrollada para uso industrial, lo cual le otorga una mayor resistencia y durabilidad en jornadas prolongadas de trabajo.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CN 70</td>
                <td>6</td>
                <td>40 a 70</td>
                <td>2,3 a 2,5</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn90">CN 90</a></td>
                <td>7</td>
                <td>50 a 90</td>
                <td>2,5 a 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cnr45">CNR 45</a></td>
                <td>10</td>
                <td>22 a 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn55">CN 55</a></td>
                <td>5</td>
                <td>29 a 55</td>
                <td>2,1 a 2,3</td>
            </tr>
            </table>`,
            url: 'clavadora-cn70',
            alt: 'Clavadora CN-70.',
            thumb: 'assets/img/herramientas/clavadora-cn70.jpg',
            img1: 'assets/img/herramientas/clavadora-cn70_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-cn70_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-cn70_img3.jpg'
        },
        {
            id: 42,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora CN-90 (*Coil Nailer 90)',
            desc: 'La clavadora neumática industrial modelo CN 90 es la opción más potente en el segmento de clavadoras neumáticas en rollo. Es capaz de trabajar con clavos electrosoldados espiralados de hasta 90 mm de largo (3 ½ pulgadas). Es empleada tanto en la fabricación de pallets como en la industria de la construcción en madera.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro clavo</th>
                </tr>
            </thead>
            <tr>
                <td>CN 90</td>
                <td>7</td>
                <td>50 a 90</td>
                <td>2,5 a 2,9</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cnr45">CNR 45</a></td>
                <td>10</td>
                <td>22 a 45</td>
                <td>3,1</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn55">CN 55</a></td>
                <td>5</td>
                <td>29 a 55</td>
                <td>2,1 a 2,3</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-cn70">CN 70</a></td>
                <td>6</td>
                <td>40 a 70</td>
                <td>2,3 a 2,5</td>
            </tr>
            </table>`,
            url: 'clavadora-cn90',
            alt: 'Clavadora CN-90.',
            thumb: 'assets/img/herramientas/clavadora-cn90.jpg',
            img1: 'assets/img/herramientas/clavadora-cn90_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-cn90_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-cn90_img3.jpg'
        },
        {
            id: 43,
            categ: 'Herramientas',
            subcateg: 'Clavadoras',
            nombre: 'Clavadora RK-100 (*FN 100)',
            desc: 'La clavadora neumática industrial modelo RK 100 (Código internacional: FN 100) está especialmente pensada para la construcción en madera. Trabaja con clavos en peine unidos por plástico, con una inclinación de 21°, conforme las normativas establecidas por el reglamento INTI-CIRSOC. Su amplio rango de clavado -de dos pulgadas y media a cuatro- la convierte en la opción perfecta para trabajos de emplacado y fijación de bastidores en obra.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Modelo</th>
                    <th>Cabeza clavo</th>
                    <th>Longitud clavo</th>
                    <th>Diámetro alambre</th>
                </tr>
            </thead>
            <tr>
                <td>RK 100</td>
                <td>7,4</td>
                <td>65 a 100</td>
                <td>3,1 - 3,4</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n50">N 50</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 50</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-n65">N 65</a></td>
                <td>1,75 x 2,80</td>
                <td>19 a 63</td>
                <td>1,40 x 1,60</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=clavadora-t65">T 65</a></td>
                <td>2,2 x 7</td>
                <td>32 a 64</td>
                <td>2,20</td>
            </tr>
            </table>`,
            url: 'clavadora-rk100',
            alt: 'Clavadora RK-100.',
            thumb: 'assets/img/herramientas/clavadora-rk100.jpg',
            img1: 'assets/img/herramientas/clavadora-rk100_img1.jpg',
            img2: 'assets/img/herramientas/clavadora-rk100_img2.jpg',
            img3: 'assets/img/herramientas/clavadora-rk100_img3.jpg'
        },

        // AGUJEREADORAS

        {
            id: 44,
            categ: 'Herramientas',
            subcateg: 'Agujereadoras',
            nombre: 'Agujereadora 4444',
            desc: 'La agujereadora neumática industrial modelo 4444 se encuentra equipada con un mandrill de 13 mm, lo que le permite efectuar orificios con mechas de un mayor tamaño. Por lo general suele ser empleada para el trabajo sobre metales ferrosos así como metales no ferrosos, debido a sus bajas revoluciones y a su alto torque. Ello le otorga un alto nivel de precisión y de potencia.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4444</th>
                    <th><a href="producto.html?prod=agujereadora-4434">4434</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>13</td>
                <td>10</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>800</td>
                <td>1800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>1/2"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>170</td>
                <td>170</td>
            </tr>
            </table>`,
            url: 'agujereadora-4444',
            alt: 'Agujereadora 4444.',
            thumb: 'assets/img/herramientas/agujereadora-4444.jpg',
            img1: 'assets/img/herramientas/agujereadora-4444_img1.jpg',
            img2: 'assets/img/herramientas/agujereadora-4444_img2.jpg',
            img3: 'assets/img/herramientas/agujereadora-4444_img3.jpg'
        },
        {
            id: 45,
            categ: 'Herramientas',
            subcateg: 'Agujereadoras',
            nombre: 'Agujereadora 4434',
            desc: 'La agujereadora neumática industrial modelo 4434 se encuentra equipada con un mandrill de 10 mm, que resulta ideal para llevar a cabo tareas sobre superficies blandas tales como la madera, el PVC, el aluminio, la melamina, el MDF y los metales no ferrosos. Esta agujereadora es la más indicada para efectuar aquellos trabajos que requieren la realización de múltiples perforaciones debido a su alta velocidad.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4434</th>
                    <th><a href="producto.html?prod=agujereadora-4444">4444</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>10</td>
                <td>13</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1800</td>
                <td>800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>1/2"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>170</td>
                <td>170</td>
            </tr>
            </table>`,
            url: 'agujereadora-4434',
            alt: 'Agujereadora 4434.',
            thumb: 'assets/img/herramientas/agujereadora-4434.jpg',
            img1: 'assets/img/herramientas/agujereadora-4434_img1.jpg',
            img2: 'assets/img/herramientas/agujereadora-4434_img2.jpg',
            img3: 'assets/img/herramientas/agujereadora-4434_img3.jpg'
        },
        {
            id: 46,
            categ: 'Herramientas',
            subcateg: 'Agujereadoras',
            nombre: 'Atornilladora C-58 (3 en 1)',
            desc: 'La atornilladora neumática industrial C-58 tres en uno es una línea de herramientas sumamente versátil, diseñada especialmente para la industria. Cumple tres funciones: es capaz de agujerear, atornillar y hacer roscas. Está equipada con un mandrill automático que no requiere llave para efectuar el cambio de accesorios. Tiene regulación de torque externa. Su cuerpo ergonómico está recubierto de elastómero. El C-58 es el más potente del segmento.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>C 58</th>
                    <th><a href="producto.html?prod=agujereadora-c48">C 48</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>10</td>
                <td>10</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>750</td>
                <td>1700</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>550</td>
                <td>550</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>13nm</td>
                <td>7nm</td>
            </tr>
            </table>`,
            url: 'agujereadora-c58',
            alt: 'Atornilladora C-58.',
            thumb: 'assets/img/herramientas/atornilladora-c58.jpg',
            img1: 'assets/img/herramientas/atornilladora-c58_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-c58_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-c58_img3.jpg'
        },
        {
            id: 47,
            categ: 'Herramientas',
            subcateg: 'Agujereadoras',
            nombre: 'Atornilladora C-48 (3 en 1)',
            desc: 'La atornilladora neumática industrial C-48 tres en uno es una línea de herramientas sumamente versátil, diseñada especialmente para la industria. Cumple tres funciones: es capaz de agujerear, atornillar y hacer roscas. Está equipada con un mandrill automático que no requiere llave para efectuar el cambio de accesorios. Tiene regulación de torque externa. Su cuerpo ergonómico está recubierto de elastómero. El C-48 es el más veloz en este segmento.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>C 48</th>
                    <th><a href="producto.html?prod=agujereadora-c58">C 58</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>10</td>
                <td>10</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1700</td>
                <td>750</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>550</td>
                <td>550</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>7nm</td>
                <td>13nm</td>
            </tr>
            </table>`,
            url: 'agujereadora-c48',
            alt: 'Atornilladora C-48.',
            thumb: 'assets/img/herramientas/atornilladora-c48.jpg',
            img1: 'assets/img/herramientas/atornilladora-c48_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-c48_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-c48_img3.jpg'
        },

        // ATORNILLADORAS

        {
            id: 48,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora CD-48',
            desc: 'La atornilladora neumática industrial CD 48 ha sido diseñada con el formato de pistola, y con un tamaño pequeño, para poder realizar fijaciones en lugares de tamaño reducido como los interiores de los muebles, placards, y otros tantos espacios. Es muy cómoda, liviana y silenciosa, por lo que resulta sumamente requerida para las tareas de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>CD 48</th>
                    <th><a href="producto.html?prod=atornilladora-cd58">CD 58</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>6,35</td>
                <td>6,35</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1700</td>
                <td>750</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>550</td>
                <td>500</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>S/ regul.</td>
                <td>S/ regul.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>6nm</td>
                <td>13nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-cd48',
            alt: 'Atornilladora CD-48.',
            thumb: 'assets/img/herramientas/atornilladora-cd48.jpg',
            img1: 'assets/img/herramientas/atornilladora-cd48_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-cd48_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-cd48_img3.jpg'
        },
        {
            id: 49,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora CD-58',
            desc: 'La atornilladora neumática industrial CD 58 ha sido diseñada con el formato de pistola, y con un tamaño pequeño, para poder realizar fijaciones en lugares de tamaño reducido como los interiores de los muebles, placards, y otros tantos espacios. Es muy cómoda, liviana y silenciosa, por lo que resulta sumamente requerida para las tareas de carpintería.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>CD 58</th>
                    <th><a href="producto.html?prod=atornilladora-cd48">CD 48</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>6,35</td>
                <td>6,35</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>750</td>
                <td>1700</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>500</td>
                <td>550</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>S/ regul.</td>
                <td>S/ regul.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>13nm</td>
                <td>6nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-cd58',
            alt: 'Atornilladora CD-58.',
            thumb: 'assets/img/herramientas/atornilladora-cd58.jpg',
            img1: 'assets/img/herramientas/atornilladora-cd58_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-cd58_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-cd58_img3.jpg'
        },
        {
            id: 50,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora C-48 (3 en 1)',
            desc: 'La atornilladora neumática industrial C-48 tres en uno es una línea de herramientas sumamente versátil, diseñada especialmente para la industria. Cumple tres funciones: es capaz de agujerear, atornillar y hacer roscas. Está equipada con un mandrill automático que no requiere llave para efectuar el cambio de accesorios. Tiene regulación de torque externa. Su cuerpo ergonómico está recubierto de elastómero. El C-48 es el más veloz en este segmento.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>C 48</th>
                    <th><a href="producto.html?prod=agujereadora-c58">C 58</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>10</td>
                <td>10</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1700</td>
                <td>750</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>550</td>
                <td>550</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>7nm</td>
                <td>13nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-c48',
            alt: 'Atornilladora C-48.',
            thumb: 'assets/img/herramientas/atornilladora-c48.jpg',
            img1: 'assets/img/herramientas/atornilladora-c48_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-c48_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-c48_img3.jpg'
        },
        {
            id: 51,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora C-58 (3 en 1)',
            desc: 'La atornilladora neumática industrial C-58 tres en uno es una línea de herramientas sumamente versátil, diseñada especialmente para la industria. Cumple tres funciones: es capaz de agujerear, atornillar y hacer roscas. Está equipada con un mandrill automático que no requiere llave para efectuar el cambio de accesorios. Tiene regulación de torque externa. Su cuerpo ergonómico está recubierto de elastómero. El C-58 es el más potente del segmento.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>C 58</th>
                    <th><a href="producto.html?prod=agujereadora-c48">C 48</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>10</td>
                <td>10</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>750</td>
                <td>1700</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>550</td>
                <td>550</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>13nm</td>
                <td>7nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-c58',
            alt: 'Atornilladora C-58.',
            thumb: 'assets/img/herramientas/atornilladora-c58.jpg',
            img1: 'assets/img/herramientas/atornilladora-c58_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-c58_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-c58_img3.jpg'
        },
        {
            id: 52,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4460',
            desc: 'La atornilladora neumática industrial 4460 es la que inaugura el segmento de atornilladoras neumáticas tubulares. Su cuerpo fabricado en aluminio de alta dureza le brinda una mayor resistencia que otras alternativas del mercado, ya que es de uso industrial. Puede ser utilizada incluso en la fabricación de tonners, y para cerrar envases de tapas plásticas, además de carpintería general.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4460</th>
                    <th><a href="producto.html?prod=atornilladora-4487">4487</a></th>
                    <th><a href="producto.html?prod=atornilladora-4480">4480</a></th>
                </tr>
            </thead>
            <tr>
                <td>Encastre</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>8000</td>
                <td>800</td>
                <td>1800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>170</td>
                <td>113</td>
                <td>142</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>S/ regul.</td>
                <td>Interna x embrag.</td>
                <td>Interna x embrag.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>13nm</td>
                <td>6 a 16nm</td>
                <td>6 a 13nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4460',
            alt: 'Atornilladora 4460.',
            thumb: 'assets/img/herramientas/atornilladora-4460.jpg',
            img1: 'assets/img/herramientas/atornilladora-4460_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4460_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4460_img3.jpg'
        },
        {
            id: 53,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4480',
            desc: 'La atornilladora neumática industrial 4480 es la opción base de nuestra línea industrial. Se trata de un modelo bastante sencillo, con posibilidad de regular el torque de manera interna. Trabaja en un rango de torque amplio, lo que lo convierte en una opción válida para trabajos tanto en carpintería de madera como metálica, para la fabricación de aberturas en distintos materiales.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4480</th>
                    <th><a href="producto.html?prod=atornilladora-4460">4460</a></th>
                    <th><a href="producto.html?prod=atornilladora-4487">4487</a></th>
                </tr>
            </thead>
            <tr>
                <td>Encastre</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1800</td>
                <td>8000</td>
                <td>800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>142</td>
                <td>170</td>
                <td>113</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Interna x embrag.</td>
                <td>S/ regul.</td>
                <td>Interna x embrag.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>6 a 13nm</td>
                <td>13nm</td>
                <td>6 a 16nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4480',
            alt: 'Atornilladora 4480.',
            thumb: 'assets/img/herramientas/atornilladora-4480.jpg',
            img1: 'assets/img/herramientas/atornilladora-4480_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4480_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4480_img3.jpg'
        },
        {
            id: 54,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4487',
            desc: 'La atornilladora neumática industrial 4487 cuenta con doble reducción de engranajes, lo que le otorga al usuario la posibilidad de lograr mayor potencia en la colocación con tornillos sobre superficies diversas (madera, aluminio, PVC). Su torque puede ser regulado internamente de manera muy sencilla, de acuerdo a los requerimientos del trabajo a realizar.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4487</th>
                    <th><a href="producto.html?prod=atornilladora-4460">4460</a></th>
                    <th><a href="producto.html?prod=atornilladora-4480">4480</a></th>
                </tr>
            </thead>
            <tr>
                <td>Encastre</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>800</td>
                <td>8000</td>
                <td>1800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>113</td>
                <td>170</td>
                <td>142</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Interna x embrag.</td>
                <td>S/ regul.</td>
                <td>Interna x embrag.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>6 a 16nm</td>
                <td>13nm</td>
                <td>6 a 13nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4487',
            alt: 'Atornilladora 4487.',
            thumb: 'assets/img/herramientas/atornilladora-4487.jpg',
            img1: 'assets/img/herramientas/atornilladora-4487_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4487_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4487_img3.jpg'
        },
        {
            id: 55,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4488',
            desc: 'La atornilladora neumática industrial 4488 es la más específica de nuestra línea industrial. Es de una extrema sensibilidad, y cuenta con un dispositivo de regulación de torque externo que cómodamente puede ser ajustado en el lugar de trabajo. Es la más potente de la línea, llegando a 16 Nm.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4488</th>
                    <th><a href="producto.html?prod=atornilladora-4491">4491</a></th>
                    <th><a href="producto.html?prod=atornilladora-4494">4494</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>6nm</td>
                <td>6nm</td>
                <td>6nm</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1800</td>
                <td>1800</td>
                <td>800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>113</td>
                <td>130</td>
                <td>113</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>S/ regul.</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>6 a 16nm</td>
                <td>5 a 13nm</td>
                <td>6 a 16nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4488',
            alt: 'Atornilladora 4488.',
            thumb: 'assets/img/herramientas/atornilladora-4488.jpg',
            img1: 'assets/img/herramientas/atornilladora-4488_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4488_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4488_img3.jpg'
        },
        {
            id: 56,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4491',
            desc: 'La atornilladora neumática industrial 4491 ha sido diseñada con una boquilla reducida, lo cual le permite al usuario emplearla en espacios de poca maniobra. Tiene un rango de torque amplio, lo cual le permite imprimir la fuerza suficiente como para agilizar la labor de fijación.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4491</th>
                    <th><a href="producto.html?prod=atornilladora-4488">4488</a></th>
                    <th><a href="producto.html?prod=atornilladora-4494">4494</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>6nm</td>
                <td>6nm</td>
                <td>6nm</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>1800</td>
                <td>1800</td>
                <td>800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>130</td>
                <td>113</td>
                <td>113</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>S/ regul.</td>
                <td>Externa</td>
                <td>Externa</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>5 a 13nm</td>
                <td>6 a 16nm</td>
                <td>6 a 16nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4491',
            alt: 'Atornilladora 4491.',
            thumb: 'assets/img/herramientas/atornilladora-4491.jpg',
            img1: 'assets/img/herramientas/atornilladora-4491_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4491_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4491_img3.jpg'
        },
        {
            id: 57,
            categ: 'Herramientas',
            subcateg: 'Atornilladoras',
            nombre: 'Atornilladora 4494',
            desc: 'La atornilladora neumática industrial 4494 pertenece al segmento con torque de regulación externa. Ello le permite al usuario controlar la fuerza que ejerce sobre el material en el que desea hacer la fijación con tornillos, de manera muy cómoda y sencilla mediante un dispositivo cercano a la boquilla de la herramienta.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>4494</th>
                    <th><a href="producto.html?prod=atornilladora-4488">4488</a></th>
                    <th><a href="producto.html?prod=atornilladora-4491">4491</a></th>
                </tr>
            </thead>
            <tr>
                <td>Mandrill</td>
                <td>6nm</td>
                <td>6nm</td>
                <td>6nm</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>800</td>
                <td>1800</td>
                <td>1800</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>113</td>
                <td>113</td>
                <td>130</td>
            </tr>
            <tr>
                <td>Regulación torque</td>
                <td>Externa</td>
                <td>Externa</td>
                <td>S/ regul.</td>
            </tr>
            <tr>
                <td>Torque máximo</td>
                <td>6 a 16nm</td>
                <td>6 a 16nm</td>
                <td>5 a 13nm</td>
            </tr>
            </table>`,
            url: 'atornilladora-4494',
            alt: 'Atornilladora 4494.',
            thumb: 'assets/img/herramientas/atornilladora-4494.jpg',
            img1: 'assets/img/herramientas/atornilladora-4494_img1.jpg',
            img2: 'assets/img/herramientas/atornilladora-4494_img2.jpg',
            img3: 'assets/img/herramientas/atornilladora-4494_img3.jpg'
        },

        // LIJADORAS

        {
            id: 58,
            categ: 'Herramientas',
            subcateg: 'Lijadoras',
            nombre: 'Lijadora 7114',
            desc: 'La lijadora neumática industrial modelo 7114 ha sido diseñada con una base de forma triangular, para poder acceder a esquinas dentro de muebles u otros lugares donde lijadoras de mayor tamaño no entran. Es una lijadora de palma ideal para acabados finos, que cuenta con una base de velcro para un cómodo recambio de lijas. Todas nuestras lijadoras de palma son para uso industrial.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>7114</th>
                    <th><a href="producto.html?prod=lijadora-77171">77171</a></th>
                    <th><a href="producto.html?prod=lijadora-7717">7717</a></th>
                </tr>
            </thead>
            <tr>
                <td>Superficie de lijado</td>
                <td>75 x 100</td>
                <td>57 x 140</td>
                <td>127</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>10000</td>
                <td>20000</td>
                <td>13000</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>255</td>
                <td>110</td>
                <td>142</td>
            </tr>
            <tr>
                <td>Tipo de lijas</td>
                <td>Abrojo velcro</td>
                <td>Abrojo velcro</td>
                <td>Común</td>
            </tr>
            </table>`,
            url: 'lijadora-7114',
            alt: 'Lijadora 7114.',
            thumb: 'assets/img/herramientas/lijadora-7114.jpg',
            img1: 'assets/img/herramientas/lijadora-7114_img1.jpg',
            img2: 'assets/img/herramientas/lijadora-7114_img2.jpg',
            img3: 'assets/img/herramientas/lijadora-7114_img3.jpg'
        },
        {
            id: 59,
            categ: 'Herramientas',
            subcateg: 'Lijadoras',
            nombre: 'Lijadora 7717',
            desc: 'La lijadora neumática industrial modelo 7717 tiene una base de forma cuadrada, lo que hace que la colocación de lijas sea muy sencilla, dado que este modelo tiene un sistema de sujeción especial. Consta de trabas a ambos costados que aseguran una sujeción perfecta a lijas sin velcro. Todas nuestras lijadoras de palma son para uso industrial.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>7717</th>
                    <th><a href="producto.html?prod=lijadora-77171">77171</a></th>
                    <th><a href="producto.html?prod=lijadora-7114">7114</a></th>
                </tr>
            </thead>
            <tr>
                <td>Superficie de lijado</td>
                <td>127</td>
                <td>57 x 140</td>
                <td>75 x 100</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>13000</td>
                <td>20000</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>142</td>
                <td>110</td>
                <td>255</td>
            </tr>
            <tr>
                <td>Tipo de lijas</td>
                <td>Común</td>
                <td>Abrojo velcro</td>
                <td>Abrojo velcro</td>
            </tr>
            </table>`,
            url: 'lijadora-7717',
            alt: 'Lijadora 7717.',
            thumb: 'assets/img/herramientas/lijadora-7717.jpg',
            img1: 'assets/img/herramientas/lijadora-7717_img1.jpg',
            img2: 'assets/img/herramientas/lijadora-7717_img2.jpg',
            img3: 'assets/img/herramientas/lijadora-7717_img3.jpg'
        },
        {
            id: 60,
            categ: 'Herramientas',
            subcateg: 'Lijadoras',
            nombre: 'Lijadora 77171',
            desc: 'La lijadora neumática industrial modelo 77171 es una de las lijadoras más específicas de nuestro catálogo. Viene equipada con un kit de seis bases lijadoras, con distintas formas, lo cual le posibilita al usuario lijar dándole distintas formas a la superficie. Es utilizada para trabajos de terminación en patas torneadas de sillas y mesas, para molduras y otros detalles en muebles de estilo.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>77171</th>
                    <th><a href="producto.html?prod=lijadora-7114">7114</a></th>
                    <th><a href="producto.html?prod=lijadora-7717">7717</a></th>
                </tr>
            </thead>
            <tr>
                <td>Superficie de lijado</td>
                <td>57 x 140</td>
                <td>75 x 100</td>
                <td>127</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>20000</td>
                <td>10000</td>
                <td>13000</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>110</td>
                <td>255</td>
                <td>142</td>
            </tr>
            <tr>
                <td>Tipo de lijas</td>
                <td>Abrojo velcro</td>
                <td>Abrojo velcro</td>
                <td>Común</td>
            </tr>
            </table>`,
            url: 'lijadora-77171',
            alt: 'Lijadora 77171.',
            thumb: 'assets/img/herramientas/lijadora-77171.jpg',
            img1: 'assets/img/herramientas/lijadora-77171_img1.jpg',
            img2: 'assets/img/herramientas/lijadora-77171_img2.jpg',
            img3: 'assets/img/herramientas/lijadora-77171_img3.jpg'
        },
        {
            id: 61,
            categ: 'Herramientas',
            subcateg: 'Lijadoras',
            nombre: 'Lijadora 7108 VC-6"',
            desc: 'La lijadora neumática industrial 7108 VC 6” es un modelo roto-orbital que está equipado con manguera de succión, bolsa recolectora, empuñadura recubierta en goma anti-deslizamiento, y base de velcro para un veloz cambio de lijas. También cuenta con regulador de potencia, y sus componentes internos son de fabricación japonesa. Su base de lijado es de 6”.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>7108 VC 6"</th>
                    <th><a href="producto.html?prod=lijadora-7117vc5">7117 VC 5"</a></th>
                </tr>
            </thead>
            <tr>
                <td>Diámetro lijado</td>
                <td>152</td>
                <td>100</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>10000</td>
                <td>15000</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>255</td>
                <td>255</td>
            </tr>
            <tr>
                <td>Tipo de lijas</td>
                <td>Abrojo velcro</td>
                <td>Abrojo velcro</td>
            </tr>
            </table>`,
            url: 'lijadora-7108vc6',
            alt: 'Lijadora 7108 VC-6".',
            thumb: 'assets/img/herramientas/lijadora-7108vc6.jpg',
            img1: 'assets/img/herramientas/lijadora-7108vc6_img1.jpg',
            img2: 'assets/img/herramientas/lijadora-7108vc6_img2.jpg',
            img3: 'assets/img/herramientas/lijadora-7108vc6_img3.jpg'
        },
        {
            id: 62,
            categ: 'Herramientas',
            subcateg: 'Lijadoras',
            nombre: 'Lijadora 7117 VC-5"',
            desc: 'La lijadora neumática industrial 7117 VC 5” es un modelo roto-orbital que está equipado con manguera de succión, bolsa recolectora, empuñadura recubierta en goma anti-deslizamiento, y base de velcro para un veloz cambio de lijas. También cuenta con regulador de potencia, y sus componentes internos son de fabricación japonesa. Su base de lijado es de 5”.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>7117 VC 5"</th>
                    <th><a href="producto.html?prod=lijadora-7108vc6">7108 VC 6"</a></th>
                </tr>
            </thead>
            <tr>
                <td>Diámetro lijado</td>
                <td>100</td>
                <td>152</td>
            </tr>
            <tr>
                <td>R.P.M</td>
                <td>15000</td>
                <td>10000</td>
            </tr>
            <tr>
                <td>Entrada aire</td>
                <td>1/4"</td>
                <td>1/4"</td>
            </tr>
            <tr>
                <td>Caudal aire</td>
                <td>3/8"</td>
                <td>3/8"</td>
            </tr>
            <tr>
                <td>Consumo aire</td>
                <td>255</td>
                <td>255</td>
            </tr>
            <tr>
                <td>Tipo de lijas</td>
                <td>Abrojo velcro</td>
                <td>Abrojo velcro</td>
            </tr>
            </table>`,
            url: 'lijadora-7117vc5',
            alt: 'Lijadora 7117 VC-5".',
            thumb: 'assets/img/herramientas/lijadora-7117vc5.jpg',
            img1: 'assets/img/herramientas/lijadora-7117vc5_img1.jpg',
            img2: 'assets/img/herramientas/lijadora-7117vc5_img2.jpg',
            img3: 'assets/img/herramientas/lijadora-7117vc5_img3.jpg'
        },

        // COMPRESORES

        {
            id: 63,
            categ: 'Herramientas',
            subcateg: 'Compresores',
            nombre: 'Compresor Polaris 200',
            desc: 'El compresor industrial Polaris 200 es un equipo con un tamaño reducido, especialmente diseñado para ser trasladado a distintas locaciones. Ello permite a sus usuarios el poder efectuar fijaciones finales en domicilios u obras, de manera cómoda, rápida y efectiva.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>Polaris 200</th>
                    <th><a href="producto.html?prod=compresor-pioneer340">Pioneer 340</a></th>
                </tr>
            </thead>
            <tr>
                <td>Volts</td>
                <td>220</td>
                <td>220</td>
            </tr>
            <tr>
                <td>HP</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Carga por minuto</td>
                <td>210</td>
                <td>210</td>
            </tr>
            <tr>
                <td>Tanque</td>
                <td>25</td>
                <td>20</td>
            </tr>
            <tr>
                <td>Presión</td>
                <td>90 / 130</td>
                <td>90 / 130</td>
            </tr>
            </table>`,
            url: 'compresor-polaris200',
            alt: 'Compresor Polaris 200.',
            thumb: 'assets/img/herramientas/compresor-polaris200.jpg',
            img1: 'assets/img/herramientas/compresor-polaris200_img1.jpg',
            img2: 'assets/img/herramientas/compresor-polaris200_img2.jpg',
            img3: 'assets/img/herramientas/compresor-polaris200_img3.jpg'
        },
        {
            id: 64,
            categ: 'Herramientas',
            subcateg: 'Compresores',
            nombre: 'Compresor Pioneer 340',
            desc: 'El compresor industrial Pioneer 340 pertenece a la familia de equipamiento industrial de Prebena. Por ende, la totalidad de sus componentes internos han sido fabricados en Alemania, en cumplimiento con los standards de calidad de la Comunidad Europea. Su diseño, que incluye un caño envolvente, lo convierte en una opción sumamente cómoda para movilizarse en las obras.',
            tbl: `<table>
            <thead>
                <tr>
                    <th> </th>
                    <th>Pioneer 340</th>
                    <th><a href="producto.html?prod=compresor-polaris200">Polaris 200</a></th>
                </tr>
            </thead>
            <tr>
                <td>Volts</td>
                <td>220</td>
                <td>220</td>
            </tr>
            <tr>
                <td>HP</td>
                <td>2</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Carga por minuto</td>
                <td>210</td>
                <td>210</td>
            </tr>
            <tr>
                <td>Tanque</td>
                <td>20</td>
                <td>25</td>
            </tr>
            <tr>
                <td>Presión</td>
                <td>90 / 130</td>
                <td>90 / 130</td>
            </tr>
            </table>`,
            url: 'compresor-pioneer340',
            alt: 'Compresor Pioneer 340.',
            thumb: 'assets/img/herramientas/compresor-pioneer340.jpg',
            img1: 'assets/img/herramientas/compresor-pioneer340_img1.jpg',
            img2: 'assets/img/herramientas/compresor-pioneer340_img2.jpg',
            img3: 'assets/img/herramientas/compresor-pioneer340_img3.jpg'
        },

        // ACCESORIOS

        {
            id: 65,
            categ: 'Herramientas',
            subcateg: 'Accesorios',
            nombre: 'Pistola Selladora ST-66413',
            desc: 'El modelo de pistola selladora ST 66413 es una herramienta diseñada con tres tipos de funciones: rociador, aplicador de espuma y sellador. Ello le permite al usuario la aplicación continua y de suma comodidad de distintos tipos de adhesivos y selladores de latex, vinílicos, acrílicos y siliconados. La pistola aplicadora es apta tanto para su uso en fábrica como en obra, al momento de efectuar colocación de aberturas. Está equipada con una válvula roja reguladora de la aplicación de espuma, y una válvula azul para un mayor control sobre el caudal de sellador a aplicar sobre la superficie.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Capacidad de cartucho</th>
                    <th>Capacidad de sachet</th>
                    <th>Presión operativa</th>
                </tr>
            </thead>
            <tr>
                <td>500ml</td>
                <td>310 - 600ml</td>
                <td>60 - 90 PSI</td>
            </tr>
            </table>`,
            url: 'accesorios-pistola_sellador-st66413',
            alt: 'Pistola Selladora ST-66413.',
            thumb: 'assets/img/herramientas/accesorios-pistola_sellador-st66413.jpg',
            img1: 'assets/img/herramientas/accesorios-pistola_sellador-st66413_img1.jpg',
            img2: 'assets/img/herramientas/accesorios-pistola_sellador-st66413_img2.jpg',
            img3: 'assets/img/herramientas/accesorios-pistola_sellador-st66413_img3.jpg'
        },
        {
            id: 66,
            categ: 'Herramientas',
            subcateg: 'Accesorios',
            nombre: 'Balanceador SA-2207',
            desc: 'El Balanceador industrial modelo SA-2207 ha sido diseñado para aumentar la comodidad de los trabajadores en el área de trabajo, así como para evitar que ocurran accidentes y los daños ocasionados por la caída de las herramientas neumáticas. Las mismas se mantienen suspendidas al tiempo que el operario lleva a cabo su labor. Es capaz de soportar hasta 3 kilos de peso.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Balanceador</th>
                    <th>Peso soport.</th>
                    <th>Long. del cable</th>
                </tr>
            </thead>
            <tr>
                <td>SA 2207</td>
                <td>De 3,5 a 5 Kgs.</td>
                <td>1,6 metros</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=balanceador-sa2204">SA 2204</a></td>
                <td>De 1,5 a 3 Kgs.</td>
                <td>1,6 metros</td>
            </tr>
            </table>`,
            url: 'balanceador-sa2207',
            alt: 'Balanceador SA-2207.',
            thumb: 'assets/img/herramientas/accesorios-balanceador-sa2207.jpg',
            img1: 'assets/img/herramientas/accesorios-balanceador-sa2207_img1.jpg',
            img2: 'assets/img/herramientas/accesorios-balanceador-sa2207_img2.jpg',
            img3: 'assets/img/herramientas/accesorios-balanceador-sa2207_img3.jpg'
        },
        {
            id: 67,
            categ: 'Herramientas',
            subcateg: 'Accesorios',
            nombre: 'Balanceador SA-2204',
            desc: 'El Balanceador industrial modelo SA-2204 ha sido diseñado para aumentar la comodidad de los trabajadores en el área de trabajo, así como para evitar que ocurran accidentes y los daños ocasionados por la caída de las herramientas neumáticas. Las mismas se mantienen suspendidas al tiempo que el operario lleva a cabo su labor. Es capaz de soportar hasta 3 kilos de peso.',
            tbl: `<table>
            <thead>
                <tr>
                    <th>Balanceador</th>
                    <th>Peso soport.</th>
                    <th>Long. del cable</th>
                </tr>
            </thead>
            <tr>
                <td>SA 2204</td>
                <td>De 1,5 a 3 Kgs.</td>
                <td>1,6 metros</td>
            </tr>
            <tr>
                <td><a href="producto.html?prod=balanceador-sa2207">SA 2207</a></td>
                <td>De 3,5 a 5 Kgs.</td>
                <td>1,6 metros</td>
            </tr>
            </table>`,
            url: 'balanceador-sa2204',
            alt: 'Balanceador SA-2204.',
            thumb: 'assets/img/herramientas/accesorios-balanceador-sa2204.jpg',
            img1: 'assets/img/herramientas/accesorios-balanceador-sa2204_img1.jpg',
            img2: 'assets/img/herramientas/accesorios-balanceador-sa2204_img2.jpg',
            img3: 'assets/img/herramientas/accesorios-balanceador-sa2204_img3.jpg'
        },
        {
            id: 68,
            categ: 'Herramientas',
            subcateg: 'Accesorios',
            nombre: 'Equipo Combinado - Regufiltro',
            desc: 'El Equipo Combinado (regufiltro) SA 2324 es un accesorio fundamental en la instalación de toda línea de aire. Es capaz de cumplir múltiples funciones. Por un lado, cuenta con un vaso deshumectizador, que filtra y retiene la humedad producto de la condensación del aire. Luego, tiene un segundo vaso que se ocupa de la lubricación de las herramientas. Está equipado con manómetro y regulador de presión. Este Equipo Combinado (regufiltro) es apto para montar sobre compresores y otras superficies.',
            tbl: `<table>
            <tr>
                <td>Entrada y salida de aire</td>
                <td>1/2"</td>
            </tr>
            <tr>
                <td>Rango de ajuste de presión</td>
                <td>0,5 a 9,9</td>
            </tr>
            <tr>
                <td>Máximo servicio de presión</td>
                <td>15</td>
            </tr>
            <tr>
                <td>Capacidad de drenaje</td>
                <td>80</td>
            </tr>
            <tr>
                <td>Capacidad de lubricación</td>
                <td>125</td>
            </tr>
            <tr>
                <td>Lubricante recomendado</td>
                <td>VG - 32</td>
            </tr>
            </table>`,
            url: 'accesorios-equipo_combinado-regufiltro',
            alt: 'Equipo Combinado - Regufiltro.',
            thumb: 'assets/img/herramientas/accesorios-equipo_combinado-regufiltro.jpg',
            img1: 'assets/img/herramientas/accesorios-equipo_combinado-regufiltro_img1.jpg',
            img2: 'assets/img/herramientas/accesorios-equipo_combinado-regufiltro_img2.jpg',
            img3: 'assets/img/herramientas/accesorios-equipo_combinado-regufiltro_img3.jpg'
        }

    ]

    return listaProductos


} 