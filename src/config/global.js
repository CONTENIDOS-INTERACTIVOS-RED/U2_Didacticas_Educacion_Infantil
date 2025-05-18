export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Arte y juego',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'El arte y la expresión corporal en la educación inicial ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'El arte en la educación inicial',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'La expresión corporal en la educación inicial',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'El arte a través de los lenguajes artísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de lenguaje artístico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características de los lenguajes artísticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Expresión dramática',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'La expresión dramática en la educación inicial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación del arte dramático en la educación inicial',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Expresión musical',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Elementos de la música',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'La música y su impacto en la educación inicial',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El arte y la expresión corporal en la educación inicial (Documento N° 21). Recuperado de',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-341813.html',
    },
    {
      referencia:
        'Gutiérrez Díaz del Campo, D. (2005). Expresión corporal y educación infantil: (ed.). Wanceulen Editorial. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33695?page=15',
    },
    {
      referencia:
        'Ruiz, D. P. H., PARRA, H., & Zaza, L. C. (2018). La enseñanza de las artes en la educación inicial. Una mirada desde las aulas. Tsantsa. Revista de Investigaciones Artísticas, (6), 19-34. ',
      link:
        'https://publicaciones.ucuenca.edu.ec/ojs/index.php/tsantsa/article/download/2648/1707',
    },
    {
      referencia:
        'Bermúdez, O. (2021). Los lenguajes artísticos y su incidencia en el desarrollo integral de los niños de grado preescolar del colegio San José de Barranquilla. Universidad Santo Tomas-Decanatura de División de Universidad Abierta ya Distancia-Facultad de Educación Barranquilla. ',
      link:
        'https://repository.usta.edu.co/items/f793ffd0-f5d2-4870-a270-c0afc8b2faab',
    },
    {
      referencia:
        'Comas, S. R. (17 de abril, 2024). ¿Cuáles son las diferencias entre el arte figurativo y el arte abstracto? pymOrganization. ',
      link:
        'https://psicologiaymente.com/cultura/diferencias-arte-figurativo-arte-abstracto',
    },
    {
      referencia:
        'Comunicación, Lenguaje y Literatura: Evolución y Características. (24 de enero, 2025). Wiki Literatura. ',
      link:
        'https://www.wikiliteratura.net/comunicacion-lenguaje-y-literatura-evolucion-y-caracteristicas/',
    },
    {
      referencia: 'González, M. (2015). La música como lenguaje universal. ',
      link:
        'https://josemanuelgonzalez.substack.com/p/musica-lenguaje-universal',
    },
    {
      referencia:
        'Hasard, R. (24 de abril, 2024). Loris Malaguzzi: El creador de la pedagogía Reggio Emilia. NeuroClass. ',
      link:
        'https://neuro-class.com/loris-malaguzzi-el-creador-de-la-pedagogia-reggio-emilia/',
    },
    {
      referencia:
        ' LAMARILUNA. (13 de enero, 2025). La Fotografía como Medio de Expresión Artística.  ',
      link:
        'https://lamariluna.com/la-fotografia-como-medio-de-expresion-artistica/',
    },
    {
      referencia: 'Lifeder. (20 de marzo, 2023). Lenguaje artístico.',
      link: 'https://www.lifeder.com/lenguaje-artistico/',
    },
    {
      referencia:
        'Martínez, P. (2016). La danza. ¿Comprensión y comunicación a través del cuerpo en movimiento? Dialnet. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5879072',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El arte y la expresión corporal en la educación inicial (Documento N° 21). Recuperado de ',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-341813.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2014). Sentido de la Educación Inicial. ',
      link:
        'https://www.mineducacion.gov.co/1621/articles-341810_archivo_pdf_sentido_de_la_educacion.pdf',
    },
    {
      referencia:
        'Ortiz, B. (Coord.), Bianchi Bustos, M. & Canosa, C. (2018). Lenguajes artístico-expresivos en diálogo: literatura, cine, teatro y títeres: ( ed.). Homo Sapiens Ediciones. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/129649?page=13',
    },
    {
      referencia:
        'Rodríguez, J. (19 de mayo, 2015). El teatro como medio de comunicación y su efecto en la audiencia. vaya al teatro. ',
      link:
        'https://vayaalteatro.com/el-teatro-como-medio-de-comunicaci-n-y-su-efecto-en-la-audiencia/',
    },
    {
      referencia:
        'Tapia, Hugo & Manzano, José. (2025). Análisis del lenguaje y montaje cinematográfico y su impacto en las estrategias de comunicación digital en Youtube. Runas. Journal of Education and Culture. 6. e250228. 10.46652/runas.v6i11.228. ',
      link:
        'https://www.researchgate.net/publication/388493772_Analisis_del_lenguaje_y_montaje_cinematografico_y_su_impacto_en_las_estrategias_de_comunicacion_digital_en_Youtube',
    },
    {
      referencia:
        'Borja. M.F (2007). Importancia de la expresión dramática en el desarrollo cognitivo de las niñas y los niños entre los 5 y 6 años de edad. Universidad politécnica salesiana sede Quito. Edu.ec. ',
      link:
        'https://dspace.ups.edu.ec/bitstream/123456789/3104/1/UPS-QT01578.pdf',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El arte y la expresión corporal en la educación inicial (Documento N° 21). Recuperado de ',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-341813.html',
    },
    {
      referencia:
        'Solórzano, M. K., & Loor, T. M. Z. (2023). Aplicación del arte dramático en el desarrollo de la identidad y autonomía en niños de educación inicial. ',
      link:
        'https://revistas.utm.edu.ec/index.php/Cognosis/article/download/3792/6271',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El arte y la expresión corporal en la educación inicial (Documento N° 21). Recuperado de ',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-341813.html',
    },
    {
      referencia:
        'González Zamar, M. D. (2023). Educar en artes plásticas y visuales en la enseñanza primaria: (1 ed.). Editorial Universidad de Almería. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/273885?page=5',
    },
    {
      referencia:
        'Miño, M. L. (2015). Influencia de la expresión plástica en el desarrollo de las habilidades sociales de niños de 2 a 3 años de edad.Universidad Tecnologica equinoccial. ',
      link:
        'https://1library.co/document/q76r9koy-influencia-expresion-plastica-desarrollo-habilidades-sociales-ninos-anos.html',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El arte y la expresión corporal en la educación inicial (Documento N° 21). Recuperado de ',
      link: 'https://www.mineducacion.gov.co/1780/w3-article-341813.html',
    },
  ],
  glosario: [
    {
      termino: 'Arcilla',
      significado:
        'material natural maleable, utilizado en modelado y escultura, que permite a los niños explorar texturas y formas tridimensionales.',
    },
    {
      termino: 'Color',
      significado:
        'elemento visual que transmite emociones y sensaciones. En educación inicial, se exploran los colores primarios, secundarios y terciarios, así como sus combinaciones.',
    },
    {
      termino: 'Creatividad',
      significado:
        'capacidad de generar ideas originales y soluciones innovadoras. En artes plásticas, se fomenta a través de la experimentación con diversos materiales y técnicas.',
    },
    {
      termino: 'Dibujo',
      significado:
        'forma de expresión gráfica que utiliza líneas y trazos para representar objetos, personas o ideas. En educación inicial, se desarrollan habilidades de motricidad fina y representación simbólica.',
    },
    {
      termino: 'Escultura',
      significado:
        'arte de modelar o tallar materiales para crear formas tridimensionales. Permite a los niños explorar el volumen y la espacialidad',
    },
    {
      termino: 'Expresión Corporal',
      significado:
        'lenguaje no verbal que utiliza el cuerpo para comunicar emociones, ideas y sensaciones. Se trabaja a través de juegos, danzas y dramatizaciones.',
    },
    {
      termino: 'Imaginación',
      significado:
        'capacidad de crear imágenes mentales y representaciones de la realidad. Se estimula a través de cuentos, juegos y actividades artísticas.',
    },
    {
      termino: 'Modelado',
      significado:
        'técnica de dar forma a materiales maleables como la arcilla o la plastilina. Permite a los niños desarrollar la motricidad fina y la percepción táctil.',
    },
    {
      termino: 'Pintura',
      significado:
        'técnica de aplicar pigmentos líquidos sobre una superficie para crear imágenes. En educación inicial, se exploran diferentes tipos de pintura y técnicas de aplicación.',
    },
    {
      termino: 'Textura',
      significado:
        'cualidad de las superficies que se percibe a través del tacto o la vista. En artes plásticas, se exploran diferentes texturas a través de materiales como la tela, el papel y la arena.',
    },
  ],
}
