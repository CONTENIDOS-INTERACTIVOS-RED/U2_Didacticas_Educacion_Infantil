<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. El arte a través de los lenguajes artísticos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Para iniciar este nuevo tema, qué tal si nos preguntamos, cuando eras pequeño ¿Qué significaba para ti ser un artista? Recordemos con este corto cuento.

        .bg-color-white.shadow-soft.p-4.mb-3
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Lupo quiere ser artista
                  p.mb-0 Para disfrutar de un cuento infantil sobre el deseo de ser artista, se recomienda ver el siguiente video:
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=upZn61hrINM" target="_blank")
                    span.bg-color-4 Ver video
                    i.fas.fa-arrow-right
    
        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 Los lenguajes artísticos son el conjunto de convenciones y códigos que emplean las distintas formas de arte para construir significados y expresar emociones, sensaciones y reflexiones. Estos incluyen disciplinas como la pintura, la escultura, la música, la danza, el teatro, la literatura y el cine. Cada uno tiene técnicas y formas específicas de comunicación y expresión artística (Lifeder, 2023).
    
    h2.mb-5(data-aos="fade-left") Evolución de los lenguajes artísticos
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0
                p Desde tiempos antiguos, la narración ha sido un medio fundamental de comunicación. Ortiz, Bianchi y Canosa (2018) explican que, en los primeros grupos humanos, las historias eran transmitidas oralmente en reuniones alrededor del fuego. Con el tiempo, la expresión artística se diversificó en formas como:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Danza:</b> recreación de experiencias mediante el movimiento.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Música y rituales:</b> empleados por sacerdotes para transmitir mitos.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Juegos dramáticos:</b> niños que creaban historias con muñecos y personajes improvisados.
              .col-lg-5(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    p.mb-5 A medida que evolucionaron las culturas, estas expresiones se volvieron más complejas, consolidándose como formas de arte con características propias. Además del lenguaje verbal, surgieron otros sistemas de signos como los lenguajes formales de las matemáticas, la lógica y la informática, así como los lenguajes artísticos, que incluyen medios específicos de expresión como:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Música
              p.mb-0 Cualidades sonoras, ritmo y melodía.

      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/4.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Plástica
              p.mb-0 Línea, color e imagen.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              h5.mb-2 Representación escénica	
              p.mb-0 Movimiento, dramatización y gestualidad.
    
    h2(data-aos="fade-left") El impacto de los lenguajes artísticos en la educación
    p.mb-5 Bermúdez (2021) define el lenguaje artístico como el uso de diversos medios para representar y expresar sentimientos estéticos, destacando su papel en la formación cultural e individual. A través del arte, las personas pueden expresar su visión del mundo y fomentar habilidades como la creatividad y el análisis crítico.

    .bg-color-5.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/6.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") López (2013), citado por Bermúdez (2021), enfatiza que los lenguajes artísticos permiten a niños, jóvenes y adultos desarrollar herramientas para relacionarse consigo mismos y con su entorno. Sin embargo, advierte que la educación artística suele subestimarse en las instituciones educativas, a pesar de su importancia en el proceso de enseñanza-aprendizaje. Bermúdez (2021) insta a los docentes a acercar los lenguajes artísticos a los estudiantes, promoviendo su participación y creatividad.
    
    h2.mb-5(data-aos="fade-left") Lenguajes artísticos en la educación inicial
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p.mb-5(data-aos="fade-left") Según la Guía 21 del MEN (2014), los lenguajes artísticos son esenciales en la infancia, ya que permiten a los niños crear, expresar y representar su realidad. Se destacan los siguientes:
    
        .bg-color-8.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Juego dramático:</b> representación de roles y situaciones imaginarias.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Expresión musical:</b> exploración de sonidos y ritmos.
            li.d-flex
              i.far.fa-arrow-alt-circle-right
              p.mb-0 <b>Expresión visual y plástica:</b> uso de materiales como pintura, crayolas y modelado.
        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 El MEN (2014) enfatiza que es clave acompañar a los niños en su descubrimiento del mundo a través de los lenguajes artísticos, despertando su sensibilidad y criterios estéticos. En este sentido, Tita Maya (2007) sostiene que el arte y la imaginación preparan a los niños para enfrentar su futuro con confianza y recursos creativos.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Howard Gardner (2005), citado por el MEN (2014), señala que los niños tienden a mezclar formas artísticas de manera natural. Por ejemplo, pueden cantar mientras dibujan o bailar al ritmo de la música. Esta sinestesia les ayuda a establecer conexiones entre colores, sonidos, movimientos y palabras, favoreciendo un aprendizaje integral.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Además, el MEN (2014) destaca la importancia del desarrollo del sentido estético en la educación infantil, ya que la estética influye en la percepción de la belleza y la armonía desde la infancia. Las interacciones con los adultos también transmiten patrones estéticos culturales, influyendo en la manera en que los niños perciben y valoran el arte.

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipos de lenguaje artístico
    
    p.mb-4 Existen diversos tipos de lenguajes artísticos, cada uno con sus propias características. A continuación, se presenta una descripción breve de algunos de ellos:

    .bg-full-width.bg-fondo-3
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/10.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2.4%" y="79.5%" numero="+")
                h5 Música
                p Es el arte de combinar los sonidos de manera armoniosa. Se considera un lenguaje universal porque despierta emociones independientemente de la cultura de las personas. Sus herramientas incluyen ritmo, melodía, armonía, repeticiones y silencios (González, 2015).
    
              .bg-color-white.box-shadow.p-3(x="16.8%" y="93%" numero="+")
                h5 Pintura
                p Pertenece a las artes plásticas y se basa en la combinación de colores, perspectiva y claroscuros. Se divide en dos tendencias principales: figurativa (representa formas reconocibles como el expresionismo y el realismo) y abstracta (juega con colores y texturas sin formas definidas) (Comas, 2024).
    
              .bg-color-white.box-shadow.p-3(x="31.3%" y="79.5%" numero="+")
                h5 Danza
                p Utiliza la música, el vestuario y el movimiento rítmico para transmitir mensajes o relatos. Su interpretación requiere la participación activa del espectador.
    
              .bg-color-white.box-shadow.p-3(x="44.3%" y="93%" numero="+")
                h5 Literatura
                p Se expresa a través del lenguaje escrito, narrando historias que captan la atención de los lectores. Es una de las formas de arte más antiguas.
    
              .bg-color-white.box-shadow.p-3(x="60.8%" y="79.5%" numero="+")
                h5 Cine
                p Utiliza imágenes y sonido para contar historias a través de películas y documentales. También abarca series televisivas, desarrollando códigos lingüísticos propios (Tapia et al., 2025).
              .bg-color-white.box-shadow.p-3(x="74.2%" y="93%" numero="+")
                h5 Teatro
                p Arte que combina la música, la gestualidad, el ritmo y la palabra. El montaje y la iluminación son elementos clave en la transmisión del mensaje (Rodríguez, 2015).
    
              .bg-color-white.box-shadow.p-3(x="86.8%" y="79.5%" numero="+")
                h5 Fotografía
                p Captura la realidad a través de imágenes, utilizando elementos como la luz, el color y la composición para transmitir emociones y significados (Lamariluna, 2025).
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Los lenguajes artísticos han evolucionado desde las primeras formas de narración oral hasta expresiones contemporáneas como el cine y la fotografía. En la educación inicial, estos lenguajes cumplen un papel fundamental en la formación de los niños, permitiéndoles desarrollar su creatividad, sensibilidad y capacidad comunicativa.
    
    p.mb-5 La enseñanza del arte no debe limitarse a la reproducción de técnicas, sino que debe fomentar la exploración y la expresión libre. Al integrar los lenguajes artísticos en la educación, se proporciona a los niños herramientas para interpretar y construir significados en su entorno, fortaleciendo su desarrollo integral.

    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Características de los lenguajes artísticos
    
    p.mb-4 Los lenguajes artísticos poseen características únicas que los diferencian de otros tipos de comunicación. Según Lifeder (2023), se destacan tres aspectos esenciales:

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Percepción subjetiva y pluralidad de interpretaciones")
            p Cada individuo experimenta una obra de arte de manera distinta, lo que significa que no existen interpretaciones únicas o correctas, sino múltiples significados válidos. Por ejemplo, una pintura abstracta puede evocar diferentes emociones según la experiencia del espectador.

    
          .div(titulo="Apelación a la función emotiva")
            p El arte busca generar una respuesta emocional en el receptor. Para ello, emplea recursos como la composición, el color, la textura y el ritmo, creando atmósferas que conectan con el público. Un ejemplo es una pieza musical melancólica que puede provocar nostalgia, mientras que una escultura dinámica transmite energía.

    
          .div(titulo="Niveles del lenguaje artístico")
            ul.lista-ul--color
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Primer nivel:</b> Captar la atención mediante elementos visuales, sonoros o performáticos.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Segundo nivel:</b> Provocar un impacto emocional o inconsciente en el receptor.
              li.mb-0.d-flex
                i.far.fa-arrow-alt-circle-right
                p.mb-0 <b>Tercer nivel:</b> Lograr que el espectador comprenda y disfrute la obra estéticamente.
    
    p.mb-4 Para comprender mejor cómo estas características se evidencian en la educación inicial, a continuación se presentan algunos ejemplos:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Percepción subjetiva
              p Cada niño representa el mundo de forma única: uno pinta un árbol azul y otro verde. Fomenta la individualidad y el pensamiento creativo.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Función emotiva
              p En el juego dramático, los niños expresan emociones mediante la interpretación de personajes. Desarrolla inteligencia emocional y empatía.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Niveles del lenguaje artístico
              p Un rincón de arte atractivo (1er nivel) invita a la participación, la narración de cuentos conecta con experiencias personales (2do nivel) y una obra teatral grupal genera sentido de logro (3er nivel). Favorece el aprendizaje progresivo y la motivación.
    
    p.mb-4 Según el Ministerio de Educación Nacional (2014), en la educación inicial es clave proporcionar oportunidades para la expresión artística en diversas formas, ya que estas ayudan a los niños a gestionar sus emociones y fortalecer su capacidad de comunicación. La integración del arte en la educación inicial contribuye significativamente al desarrollo integral de los niños. De acuerdo con el MEN (2017), sus beneficios incluyen:

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Fomento de la imaginación y creatividad
              p.mb-0.text-center La pintura, la música, el teatro y la danza permiten a los niños explorar y transformar su entorno.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Desarrollo de habilidades cognitivas y sociales
              p.mb-0.text-center Actividades grupales como el teatro y la danza promueven la cooperación y la comunicación.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Estimulación sensorial y atención
              p.mb-0.text-center La exploración de distintos materiales y técnicas mejora la observación y concentración.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.svg" alt="" style="width: 90px")
              h5.text-center Gestión emocional y bienestar
              p.mb-0.text-center El arte brinda una vía para expresar sentimientos de manera saludable y constructiva.
    
    .bg-full-width.bg-h85
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-9(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0.text-white Finalmente, el contacto temprano con el arte fortalece el sentido estético y la apreciación de la diversidad cultural. Integrar el arte en el currículo enriquece el aprendizaje y proporciona herramientas esenciales para el desarrollo personal y social de los niños (MEN, 2017).
              .col-lg-3(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema2/17.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://repository.usta.edu.co/items/f793ffd0-f5d2-4870-a270-c0afc8b2faab" target="_blank" rel="noopener noreferrer") Bermúdez, O. (2021). Los lenguajes artísticos y su incidencia en el desarrollo integral de los niños de grado preescolar del colegio San José de Barranquilla. Universidad Santo Tomas-Decanatura de División de Universidad Abierta ya Distancia-Facultad de Educación Barranquilla. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://concepto.de/lenguaje-artistico/" target="_blank" rel="noopener noreferrer") Sojo, F. P. (s/f). Lenguaje artístico - Qué es, tipos, importancia y elementos. Recuperado el 24 de febrero de 2025, de 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=upZn61hrINM" target="_blank" rel="noopener noreferrer") Imagiland Kids. (2019, 31 de enero). Lupo quiere ser artista - cuentos infantiles español- cuentos para dormir - que quiero ser de grande. [Vídeo] Youtube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
