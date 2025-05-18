<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. El arte y la expresión corporal en la educación inicial '")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 Durante esta unidad se abordará el arte y la expresión corporal en la educación inicial, tomando como referencia el documento El arte y la expresión corporal en la educación inicial (MEN, 2014). Se explorarán los siguientes aspectos:
    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.align-items-stretch
          .col-lg-4.mb-4(data-aos="zoom-in-up")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/1.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Lenguajes artísticos
                p.mb-0 Expresión dramática, musical, plástica y visual.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/2.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Importancia del arte
                p.mb-0 Desarrollo integral en la primera infancia.
          .col-lg-4.mb-4(data-aos="zoom-in-down")
            .custom-image-card-2.h-100
              img.custom-image-card__image(src="@/assets/curso/tema1/3.png" alt="")
              .custom-image-card__text.p-4
                h5.mb-2.text-center Expresión corporal
                p.mb-0 Comunicación y aprendizaje en los primeros años de vida.
        
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Para iniciar, reflexionemos sobre estas preguntas: ¿Cómo influye el arte en la forma en que los niños comprenden y expresan sus emociones? ¿De qué manera la expresión corporal facilita la comunicación y el aprendizaje en la infancia? Para responderlas, revisemos lo planteado en el documento El arte y la expresión corporal en la educación inicial del Ministerio de Educación Nacional de Colombia (2014).
        p(data-aos="fade-left") Este documento destaca la relevancia del arte como un medio clave para el desarrollo integral en la educación inicial. Propone integrar lenguajes artísticos más allá de la palabra, como la música, la expresión plástica y el juego dramático. Además, ofrece orientaciones pedagógicas para que los educadores fomenten la creatividad, la sensibilidad y la expresividad en los niños, garantizando un entorno rico en estímulos artísticos mediante diversas actividades.
        p A continuación, se detallan los principales lenguajes artísticos que promueve el documento:
    
    TabsC.color-acento-contenido.mb-5
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Expresión plástica y visual" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Expresión plástica y visual
            p Uso de materiales como marcadores, vinilos, pinceles y crayolas en actividades como dibujo, pintura y modelado.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Música" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Música
            p Desarrollo del ritmo y la armonía mediante la exploración de sonidos y melodías.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/7.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Expresión corporal" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Expresión corporal
            p Uso del cuerpo como medio de comunicación y exploración del entorno.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/8.png', alt='', style="width: 100%;")
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Juego dramático" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Juego dramático
            p Representación de roles y situaciones a través de la imaginación y la creatividad.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/9.png', alt='', style="width: 100%;")
    
      
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] El arte en la educación inicial
    
    p.mb-4 El Ministerio de Educación Nacional (2014) enfatiza que el ser humano, por naturaleza, es un creador que utiliza diversos lenguajes para expresar ideas, pensamientos y sentimientos. Entre estos se encuentran:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 01
          p.mb-0 Notaciones musicales

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
            h5.mb-2 02
            p.mb-0 Paletas de colores
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 03
          p.mb-0 Alfabetos

      .col-lg-3.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
            h5.mb-2 04
            p.mb-0 Símbolos y códigos organizadores de significados
    
    .bg-full-width.bg-h85
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0.text-white El arte permite expresar emociones y perspectivas de la vida a través de trazos, ritmos y movimientos, fortaleciendo la conexión entre el individuo y su entorno. No solo representa experiencias personales, sino que también establece vínculos con la colectividad, lo que lo convierte en una herramienta clave en la educación inicial.
              .col-lg-3(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema1/10.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-4 Sin embargo, cuando el arte se reduce a una herramienta para lograr objetivos conductuales, como enseñar a los niños a quedarse quietos o colorear dentro de líneas, se pierde su esencia liberadora y placentera. En cambio, la educación inicial debe fomentar el contacto con el arte mediante actividades que incluyan:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 01
              p.mb-0 Juego dramático

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/12.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 02
              p.mb-0 Literatura
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 03
              p.mb-0 Ritmos y melodías

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 04
              p.mb-0 Expresión visual y plástica
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 05
              p.mb-0 Participación en espacios culturales
    
    p.mb-4 Garantizar el acceso a experiencias artísticas contribuye al desarrollo de la identidad y el bienestar infantil.

    h2(data-aos="fade-left") El arte como lenguaje y fenómeno cultural
    p Ruiz et al. (2018) ratifican que el arte es una expresión interna más que un aprendizaje estructurado. Su esencia radica en la capacidad de transmitir emociones y sentimientos personales, lo que dificulta su evaluación y normalización. Desde la infancia, los niños interactúan con diversas formas culturales y artísticas, y la educación debe enriquecer este proceso.
    p.mb-5 Algunos enfoques destacan el arte como:

    .bg-full-width-2.bg-color-3
      .px-4.px-md-5.pb-md-3
        .row.align-items-start.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/16.png", alt="").mb-4.mb-lg-0
          .col-lg-8
        
            AcordionA(tipo="b")
              .div(titulo="Lenguaje alternativo")
                p Permite a los niños comunicar ideas y emociones sin depender exclusivamente del lenguaje verbal (Imanol, 2006).
        
              .div(titulo="Herramienta crítica")
                p Proporciona medios para interpretar y cuestionar la realidad social y cultural (Aguirre, 2006).
        
              .div(titulo="Estrategia interdisciplinaria")
                p Integra las artes con otras disciplinas, alineándose con propuestas contemporáneas que enfatizan la experiencia sobre el objeto artístico (Deweriana, 2006).
        p.mb-4 Desde esta perspectiva, el arte no solo es un medio de expresión, sino también un recurso pedagógico para fomentar la reflexión crítica en los niños sobre su entorno y su cultura. A través de experiencias artísticas, pueden reinterpretar conceptos establecidos y desarrollar nuevas formas de percibir la realidad.

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 La expresión artística en el desarrollo integral de la educación inicial
                      p.mb-0 Para profundizar en este tema, se recomienda consultar el siguiente artículo:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://polodelconocimiento.com/ojs/index.php/es/article/download/3964/9226 " target="_blank")
                        span.bg-color-4 Ir al sitio
                        i.fas.fa-arrow-right

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] La expresión corporal en la educación inicial
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-5.p-4.mb-5(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/18.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Después de analizar la importancia del arte en la educación inicial, es momento de profundizar en la expresión corporal como parte del desarrollo infantil. Según el Documento N° 21 del Ministerio de Educación Nacional de Colombia (MEN, 2014), la expresión corporal es una forma esencial de comunicación y exploración del mundo en los primeros años de vida. Permite a los niños utilizar su cuerpo para expresar ideas, emociones y experiencias que pueden no ser fácilmente articuladas con palabras.
        h2(data-aos="fade-left") Beneficios de la expresión corporal
        p.mb-5 La expresión corporal contribuye a múltiples dimensiones del desarrollo infantil:
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Motriz
                p.text-center Favorece el desarrollo de habilidades motoras y mejora la coordinación.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Cognitiva
                p.text-center Permite a los niños interpretar y representar el mundo a través del movimiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Emocional
                p.text-center Facilita la expresión de sentimientos y el desarrollo de la confianza en sí mismos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Social
                p.text-center Fortalece la interacción con otros niños y el trabajo en equipo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Creativa
                p.text-center Estimula la imaginación a través de diferentes formas de movimiento.
          .col-lg-4.order-1
            figure
              img(src='@/assets/curso/tema1/19.png', alt='')
        
    p Para potenciar estos beneficios, el documento enfatiza la necesidad de crear entornos que favorezcan la exploración libre del movimiento, proporcionando espacios adecuados y materiales que estimulen la creatividad. Se recomienda a los educadores incluir actividades como:

    .bg-full-width.bg-color-6
      .px-4.px-md-5.pb-md-3.p-4
        figure
          img(src='@/assets/curso/tema1/25.svg', alt='')
    .bg-full-width.bg-color-7.mb-5
      .px-4.px-md-5.py-4
        p.mb-0 Estas actividades no solo enriquecen el aprendizaje, sino que también fortalecen las habilidades sociales al fomentar la interacción con los compañeros.
    
    h2.mb-3(data-aos="fade-left") La expresión corporal como herramienta educativa
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p.mb-5(data-aos="fade-left") Gutiérrez Díaz del Campo (2005), citando a Zabalza (1987), destaca que la expresión corporal es clave en la educación infantil porque, en esta etapa, los niños se comunican principalmente a través de acciones. A medida que crecen, sus movimientos y gestos se vuelven más complejos, reflejando sus emociones e intenciones. Algunos ejemplos incluyen:
    
        .bg-color-8.px-5(data-aos="fade-left")
          .row.align-items-center
            .col-lg-auto.order-2
              img(src="@/assets/curso/tema1/27.svg").mx-auto
            .col-lg.order-1
              ul.lista-ul--color
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Un niño pequeño expresa alegría saltando y riendo.
                li.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Un niño mayor puede manifestar la misma emoción con una sonrisa y un abrazo.
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 Según este autor, una educación que valore la expresión corporal no solo fortalece la comunicación no verbal, sino que también desarrolla la conciencia de sí mismo, el respeto por los demás y la autonomía. Además, a través de juegos de roles, los niños aprenden a identificar y gestionar emociones, lo que favorece su desarrollo social y emocional.
    
    h2.mb-5(data-aos="fade-left") Influencia de los medios y la socialización

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/28.svg", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el proceso de socialización, los niños pueden pasar de movimientos espontáneos a otros más estereotipados para complacer a los adultos y encajar en normas sociales. Monfort (1999), citado por Gutiérrez Díaz del Campo (2005), señala que los medios de comunicación imponen una imagen corporal "ideal", lo que puede distorsionar la percepción que los niños tienen de sí mismos y llevar a la inhibición del movimiento libre. Por ejemplo:
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5 Por ejemplo
              p.mb-0 Un niño que disfruta bailando libremente podría sentirse cohibido si se le critica por no seguir los pasos "correctos" para su género.
        P Para evitar esto, es crucial que en la educación infantil se promuevan actividades sin etiquetas de género, asegurando un desarrollo libre de prejuicios.

    h2(data-aos="fade-left") Expresión corporal y currículo educativo
    p.mb-5 El currículo de educación infantil reconoce la expresión corporal como un pilar fundamental del aprendizaje. Según Gutiérrez Díaz del Campo (2005), los niños pequeños aún no pueden expresarse completamente con palabras, por lo que el movimiento se convierte en su principal herramienta de comunicación. Esto les permite:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 01
          p.mb-0 Conocerse a sí mismos y a los demás.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
            h5.mb-2 02
            p.mb-0 Expresar necesidades y pensamientos sin depender del lenguaje verbal.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 03
          p.mb-0 Desarrollar su identidad y confianza.
    
    p.mb-4 El objetivo principal de la educación inicial es fomentar el desarrollo integral del niño en diversas áreas:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/30.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Motriz
              p.mb-0 Mejora la coordinación y el control del cuerpo.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/31.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Cognitiva
              p.mb-0 Ayuda a interpretar e interactuar con el entorno.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/32.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Afectiva y emocional
              p.mb-0 Favorece la expresión de emociones y el autoconocimiento.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/33.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Relacional y social
              p.mb-0 Fortalece la empatía y el trabajo en equipo.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/34.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Estética y creativa
              p.mb-0 Despierta la imaginación y la exploración artística.
    
    p.mb-4 Según Torres e Hidalgo (1994), citados por Gutiérrez Díaz del Campo (2005), la expresión corporal es una manifestación espontánea y natural que permite a los niños integrarse con otras formas de comunicación, como el habla, el dibujo y la escritura. Tanto Gutiérrez Díaz del Campo (2005) como el Documento N° 21 del MEN (2014) coinciden en la importancia de la expresión corporal en la educación inicial. A través del movimiento, los niños:

    .bg-full-width.bg-color-3
      .px-4.px-md-5.pb-md-3.p-4
        .row.mb-5
          .col-lg-4.order-2
            figure
              img(src="@/assets/curso/tema1/35.png", data-aos="zoom-in")
          .col-lg-8.order-1.mb-3.mb-lg-0
            .bg-color-8.p-5(data-aos="fade-left")
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Descubren su cuerpo y sus capacidades.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Desarrollan su creatividad y sensibilidad artística.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Fortalecen su comunicación y socialización.
                li.mb-0.d-flex
                  i.far.fa-arrow-alt-circle-right
                  p.mb-0 Aprenden a expresar emociones y a relacionarse con los demás.
            .bg-color-9.p-4(data-aos="fade-left")
              p.mb-0 Gracias a estas cualidades, la expresión corporal se reconoce como una herramienta clave para el desarrollo integral infantil, promoviendo el crecimiento físico, emocional y social de los niños mediante la creatividad y el movimiento.

        .row.mb-5
          .col-lg-2.mb-3.mb-lg-0.pe-0
            figure
              img(src="@/assets/curso/tema1/36.svg", data-aos="zoom-in")
          .col-lg-10.ps-0
            .bg-color-9.p-5(data-aos="fade-left")
              .bg-color-white.shadow-soft.p-4
                .row.justify-content-around.align-items-center
                  .col-md-auto
                    img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h5.mb-1 Arte, expresión corporal y juego en la primera infancia
                        p.mb-0 En este sentido, se recomienda ver el siguiente video, donde a partir del minuto 8:22 se habla de arte, expresión corporal y juego en la primera infancia:
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=4aFAntxhUGw " target="_blank")
                          span.bg-color-4 Ir al sitio
                          i.fas.fa-arrow-right
              
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://polodelconocimiento.com/ojs/index.php/es/article/download/3964/9226" target="_blank" rel="noopener noreferrer") Pinargote-Pisco, Y. D. R., Calderón-Alcívar, C. E., Arteaga-Briones, G. J., Macías-Zambrano, C. P., Morales-Intriago, E. A., & Barcia-Briones, M. F. (2022). La expresión artística en el desarrollo integral de la educación inicial. Polo del conocimiento, 7(5), 321-334. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.miprimerainfancia.com/el-arte-en-la-educacion-inicial/" target="_blank" rel="noopener noreferrer") Causil, R. D. (12 de febrero, 2020). Qué es el arte en la educación inicial. Mi primera infancia. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=4aFAntxhUGw" target="_blank" rel="noopener noreferrer") Programas Telemedellín.. (2019, 12 de septiembre). Juego y arte en la primera infancia [Vídeo]. Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
