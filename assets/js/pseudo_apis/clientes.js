export default function clientes() {

    const listaClientes = [
        {
            id: 1,
            nom: 'Expoyer',
            web: 'https://www.expoyerweb.com.ar/',
            logo: 'assets/img/clientes/clientes_expoyer_logo_01.jpg'
        },
        {
            id: 2,
            nom: 'Fabril Maderera S.A.',
            web: 'https://fabrilmadererasa.com.ar/',
            logo: 'assets/img/clientes/clientes_fabril_logo_01.jpg'
        },
        {
            id: 3,
            nom: 'Kanji Tech',
            web: 'https://www.kanjitech.com/',
            logo: 'assets/img/clientes/clientes_kanji_logo_01.jpg'
        },
        {
            id: 4,
            nom: 'Diseños y Aberturas Moras S.A.',
            web: 'https://www.moraspuertas.com/',
            logo: 'assets/img/clientes/clientes_moras_logo_01.jpg'
        },
        {
            id: 5,
            nom: 'Novakasa Viviendas',
            web: 'https://novakasaviviendas.com.ar/',
            logo: 'assets/img/clientes/clientes_novakasa_logo_01.jpg'
        },
        {
            id: 6,
            nom: 'OBLAK Hnos.',
            web: 'https://www.oblak.com.ar/',
            logo: 'assets/img/clientes/clientes_oblak_logo_01.jpg'
        },
        {
            id: 7,
            nom: 'ORBIS',
            web: 'https://www.orbis.com.ar/',
            logo: 'assets/img/clientes/clientes_orbis_logo_01.jpg'
        },
        {
            id: 8,
            nom: 'Pinceles El Tucán',
            web: 'https://www.pinceleseltucan.com.ar/',
            logo: 'assets/img/clientes/clientes_pincelestucan_logo_01.jpg'
        },
        {
            id: 9,
            nom: 'Rheem S.A.',
            web: 'https://www.rheem.com.ar/',
            logo: 'assets/img/clientes/clientes_rheem_logo_01.jpg'
        },
        {
            id: 10,
            nom: 'Simet Fábrica & Diseño',
            web: 'https://simet.com.ar/',
            logo: 'assets/img/clientes/clientes_simet_logo_01.jpg'
        },
        {
            id: 11,
            nom: 'Viamo',
            web: 'https://www.viamo.com/',
            logo: 'assets/img/clientes/clientes_viamo_logo_01.jpg'
        },
        {
            id: 12,
            nom: 'Canal Directo Soluciones de Impresión S.A.',
            web: 'https://www.canaldirecto.com.ar/',
            logo: 'assets/img/clientes/clientes_canaldirecto_logo_01.jpg'
        },
        {
            id: 13,
            nom: 'Profine Argentina.',
            web: 'https://www.profine-ar.com/',
            logo: 'assets/img/clientes/clientes_profine_logo_01.jpg'
        },
        {
            id: 14,
            nom: 'Metalúrgica Potenza S.A.',
            web: 'https://mpotenza.com.ar/',
            logo: 'assets/img/clientes/clientes_potenza_logo_01.jpg'
        },
        {
            id: 15,
            nom: 'Johnson Electric Holdings Limited.',
            web: 'https://www.johnsonelectric.com/',
            logo: 'assets/img/clientes/clientes_johnsonelectric_logo_01.jpg'
        },
        {
            id: 16,
            nom: 'Carrocerías Ludamet',
            web: 'http://www.ludamet.com.ar/',
            logo: 'assets/img/clientes/clientes_ludamet_logo_01.jpg'
        },
        {
            id: 17,
            nom: 'Hojalsur s.r.l.',
            web: 'https://hojalsur.com.ar/',
            logo: 'assets/img/clientes/clientes_hojalsur_logo_01.jpg'
        },
        {
            id: 18,
            nom: 'Martiri Cocinas',
            web: 'https://www.instagram.com/martiricocinas/',
            logo: 'assets/img/clientes/clientes_martiri_logo_01.jpg'
        },
        {
            id: 19,
            nom: 'Televisión Pública Argentina.',
            web: 'https://www.tvpublica.com.ar/',
            logo: 'assets/img/clientes/clientes_tvpublica_logo_01.jpg'
        },
        {
            id: 20,
            nom: 'En Zona Norte Tapicería.',
            web: 'https://www.enzonanorte.com.ar/',
            logo: 'assets/img/clientes/clientes_enzonanorte_logo_01.jpg'
        },
        {
            id: 21,
            nom: 'Angelini Hnos. Muebles y Decoraciones.',
            web: 'https://www.facebook.com/angelinimuebles/',
            logo: 'assets/img/clientes/clientes_angelini_logo_01.jpg'
        },
        {
            id: 22,
            nom: 'Pol-ka Producciones.',
            web: 'https://www.pol-ka.com.ar/',
            logo: 'assets/img/clientes/clientes_polka_logo_01.jpg'
        },
        {
            id: 23,
            nom: 'Caño Hogar',
            web: 'http://www.sillashogar.com.ar/',
            logo: 'assets/img/clientes/clientes_caniohogar_logo_01.jpg'
        },
        {
            id: 24,
            nom: 'Carpintería Metálica Orlando.',
            web: 'https://www.instagram.com/orlandocarpinteriametalica/',
            logo: 'assets/img/clientes/clientes_orlando_logo_01.jpg'
        },
        {
            id: 25,
            nom: 'Heccar',
            web: 'http://www.heccar.com/',
            logo: 'assets/img/clientes/clientes_heccar_logo_01.jpg'
        },
        {
            id: 26,
            nom: 'Campi Amoblamientos',
            web: 'https://amoblamientoscampi.com.ar/',
            logo: 'assets/img/clientes/clientes_campi_logo_01.jpg'
        },
        {
            id: 27,
            nom: 'Piamel S.A.',
            web: 'https://www.piamel.com/',
            logo: 'assets/img/clientes/clientes_piamel_logo_01.jpg'
        },
        {
            id: 28,
            nom: 'Muebles Casablanca.',
            web: 'https://mueblescasablanca.com.ar/',
            logo: 'assets/img/clientes/clientes_casablanca_logo_01.jpg'
        },
        {
            id: 29,
            nom: 'Carpincruz',
            web: 'https://carpincruz.com.ar/',
            logo: 'assets/img/clientes/clientes_carpincruz_logo_01.jpg'
        },
        {
            id: 30,
            nom: 'Escaleras San José.',
            web: 'https://www.facebook.com/p/Fabrica-de-Escaleras-San-Jose-100068227736023/',
            logo: 'assets/img/clientes/clientes_sanjose_logo_01.jpg'
        },
        {
            id: 31,
            nom: 'Cearca.',
            web: 'https://www.cearca.com/es',
            logo: 'assets/img/clientes/clientes_cearca_logo_01.jpg'
        },
        {
            id: 32,
            nom: 'Antequera Muebles.',
            web: 'https://www.antequeramuebles.com.ar/',
            logo: 'assets/img/clientes/clientes_antequera_logo_01.jpg'
        },
        {
            id: 33,
            nom: 'Ret SRL.',
            web: 'http://retsrl.com.ar/',
            logo: 'assets/img/clientes/clientes_ret_logo_01.jpg'
        },
        {
            id: 34,
            nom: 'Comade Carpinteros.',
            web: 'https://www.comade.com.ar/',
            logo: 'assets/img/clientes/clientes_comade_logo_01.jpg'
        },
        {
            id: 35,
            nom: 'Conextube',
            web: 'https://conextube.com/',
            logo: 'assets/img/clientes/clientes_conextube_logo_01.jpg'
        },
        {
            id: 36,
            nom: 'Arquisolado SRL.',
            web: 'https://www.arquisolado.com/es/index.php',
            logo: 'assets/img/clientes/clientes_arquisolado_logo_01.jpg'
        },
        {
            id: 37,
            nom: 'Di Donato Plásticos',
            web: 'https://didonatoplasticos.com.ar/',
            logo: 'assets/img/clientes/clientes_didonato_logo_01.jpg'
        },
        {
            id: 38,
            nom: 'El Picapalo Fábrica de Cabañas.',
            web: 'http://elpicapalo.com.ar/',
            logo: 'assets/img/clientes/clientes_elpicapalo_logo_01.jpg'
        },
        {
            id: 39,
            nom: 'Pallets San Andrés',
            web: 'http://palletssanandres.com.ar/',
            logo: 'assets/img/clientes/clientes_palletssanandres_logo_01.jpg'
        },
        {
            id: 40,
            nom: 'RR Maderas',
            web: 'http://www.rrmaderas.com.ar/',
            logo: 'assets/img/clientes/clientes_rrmaderas_logo_01.jpg'
        },
        {
            id: 41,
            nom: 'Gaby Creaciones',
            web: '#',
            logo: 'assets/img/clientes/clientes_gaby_logo_01.jpg'
        },
        {
            id: 42,
            nom: 'Equipamientos Taddei',
            web: 'https://www.taddeiequipamientos.com.ar/',
            logo: 'assets/img/clientes/clientes_taddei_logo_01.jpg'
        },
        {
            id: 43,
            nom: 'Forestal Guaraní.',
            web: 'https://forestalguarani.com/',
            logo: 'assets/img/clientes/clientes_guarani_logo_01.jpg'
        },
        {
            id: 44,
            nom: 'Muebles + Chicos',
            web: 'https://www.mueblesmaschicos.com/',
            logo: 'assets/img/clientes/clientes_mueblesmaschicos_logo_01.jpg'
        },
        {
            id: 45,
            nom: 'Tromen',
            web: 'https://www.tromen.com/',
            logo: 'assets/img/clientes/clientes_tromen_logo_01.jpg'
        },
        {
            id: 46,
            nom: 'Michael Thonet Muebles',
            web: 'https://michaelthonet.ar/',
            logo: 'assets/img/clientes/clientes_thonet_logo_01.jpg'
        },
        {
            id: 47,
            nom: 'Básico Comunicación',
            web: 'https://www.basico.com.ar/',
            logo: 'assets/img/clientes/clientes_basico_logo_01.jpg'
        },
        {
            id: 48,
            nom: 'Grupo Dema',
            web: 'https://grupodema.com.ar/',
            logo: 'assets/img/clientes/clientes_grupodema_logo_01.jpg'
        },
        {
            id: 49,
            nom: 'Fiplasto',
            web: 'http://fiplasto.com.ar/',
            logo: 'assets/img/clientes/clientes_flipasto_logo_01.jpg'
        },
        {
            id: 50,
            nom: 'Gran Sasso',
            web: 'https://gransassosrl.com/',
            logo: 'assets/img/clientes/clientes_gransasso_logo_01.jpg'
        },
        {
            id: 51,
            nom: 'Lareu',
            web: 'https://lareu.com/',
            logo: 'assets/img/clientes/clientes_lareu_logo_01.jpg'
        },
        {
            id: 52,
            nom: 'Morph',
            web: 'https://www.morph.com.ar/',
            logo: 'assets/img/clientes/clientes_morph_logo_01.jpg'
        },
        {
            id: 53,
            nom: 'Genoud Muebles',
            web: 'https://genoudmuebles.com.ar/',
            logo: 'assets/img/clientes/clientes_genoud_logo_01.jpg'
        },
        {
            id: 54,
            nom: 'Gromanti S.A.',
            web: 'https://www.gromanti.com.ar/',
            logo: 'assets/img/clientes/clientes_gromanti_logo_01.jpg'
        },
        {
            id: 55,
            nom: 'Mapei',
            web: 'https://www.mapei.com/ar/es-ar/pagina-de-inicio',
            logo: 'assets/img/clientes/clientes_mapei_logo_01.jpg'
        },
        {
            id: 56,
            nom: 'Spirax Sarco',
            web: 'https://www.spiraxsarco.com/global/es-AR',
            logo: 'assets/img/clientes/clientes_spiraxsarco_logo_01.jpg'
        }
        
        /*
        ,
        {
            id: 57,
            nom: '',
            web: '',
            logo: 'assets/img/clientes/clientes_ _logo_01.jpg'
        },
        {
            id: 58,
            nom: '',
            web: '',
            logo: 'assets/img/clientes/clientes_ _logo_01.jpg'
        },
        {
            id: 59,
            nom: '',
            web: '',
            logo: 'assets/img/clientes/clientes_ _logo_01.jpg'
        },
        {
            id: 60,
            nom: '',
            web: '',
            logo: 'assets/img/clientes/clientes_ _logo_01.jpg'
        },
        {
            id: 61,
            nom: '',
            web: '',
            logo: 'assets/img/clientes/clientes_ _logo_01.jpg'
        }
        */

    ]

    return listaClientes
}