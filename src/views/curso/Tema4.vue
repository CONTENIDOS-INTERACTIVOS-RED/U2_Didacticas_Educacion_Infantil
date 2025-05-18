<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'4. Expresión musical'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-5(data-aos="fade-left")
          p.mb-0 En el apartado anterior se abordaron algunos elementos de la música y su importancia en la educación inicial. Ahora, profundizaremos en este concepto y su impacto en el aprendizaje y desarrollo infantil. Según el Ministerio de Educación Nacional (2014), la música es una herramienta de expresión universal que fomenta la comunicación y la conexión entre las personas y su entorno. No existe una única forma de expresión musical; cada cultura tiene sus propias manifestaciones, desde las más simples y populares hasta las más complejas, todas ellas reflejando la riqueza cultural y emocional de la humanidad.
        p(data-aos="fade-left") Desde el desarrollo en el vientre materno, los seres humanos poseen una naturaleza musical, pues el oído comienza a funcionar antes del nacimiento. La música se manifiesta de diversas maneras, a través de la melodía, el ritmo o la capacidad de escuchar y reproducir sonidos. No hay una forma "correcta" de hacer música, ya que esta se enriquece con el legado cultural y social de cada comunidad.

    .bg-full-width.bg-h85.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0.text-white Cada cultura tiene su propia representación musical, influenciada por su entorno y tradiciones. A pesar de la diversidad de estilos y creencias, la música trasciende barreras y actúa como un poderoso elemento de unión. Desde los cantos en ceremonias hasta los arrullos que acompañan a los bebés, la música está presente en la vida cotidiana, en entornos familiares y educativos. En la educación inicial, explorar la expresión musical facilita la transmisión de tradiciones y fomenta un sentido de identidad compartida en la comunidad.
              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/tema4/2.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
        

    #t_4_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.1] Elementos de la música
    
    p.mb-4 La música se define como el arte de combinar sonidos de manera secuencial o simultánea (Botero, citada por MEN, 2014). Así como un escultor moldea la arcilla, el músico utiliza el sonido como su material de trabajo. Comprender los elementos de la música permite explorar este lenguaje de forma más profunda y enriquecedora.

    .titulo-figura.mb-4
      h5 Tabla 1.
      span Principales elementos musicales 
    .tabla-a.color-acento-botones.mb-5
      table.text-center
        thead
          tr
            th.bg-color-13.text-white.text-center Elemento
            th.bg-color-13.text-white.text-center Descripción
            th.bg-color-13.text-white.text-center Ejemplo en educación inicial
        tbody
          tr
            td Altura
            td Diferencia entre sonidos agudos y graves.
            td Cantar imitando animales para percibir contrastes sonoros.
          tr
            td Intensidad
            td Diferencia entre sonidos fuertes y suaves.
            td Juegos con voces bajas y altas para explorar la variación de volumen.
          tr
            td.text-bold Duración
            td Distinción entre sonidos largos y cortos.
            td Juegos rítmicos que muestran cómo los sonidos varían en el tiempo.
          tr
            td.text-bold Timbre
            td Identificación de la fuente sonora.
            td Diferenciar el sonido de distintos instrumentos o voces.
    
    p.mb-4 Estos elementos se combinan para dar lugar a tres componentes fundamentales de la música:

    .titulo-figura.mb-4
      h5 Figura 1.
      span Componentes de la música
    .row.justify-content-center.align-items-center.mb-5.bg-color-14.p-4
      .col-lg-10
        figure
          img(src="@/assets/curso/tema4/3.svg", data-aos="zoom-in")


    #t_4_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 4.2] La música y su impacto en la educación inicial
    
    p.mb-4 Según el MEN (2014), la música tiene como objetivo transmitir emociones y sentimientos, completándolos en la interpretación. Su disfrute y apreciación se fortalecen a medida que los niños amplían su repertorio musical. Los beneficios de la música en la educación inicial incluyen:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo de la sensibilidad auditiva
              p Escuchar y bailar diferentes estilos permite a los niños mejorar su percepción de los sonidos.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fomento de la convivencia y el trabajo en equipo
              p Las rondas y juegos colectivos crean un ambiente de cooperación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Enriquecimiento del lenguaje
              p Canciones, poemas y cuentos fortalecen la expresión oral y la conexión con la lengua materna.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo del sentido del ritmo y coordinación corporal
              p La música y el movimiento están estrechamente relacionados, favoreciendo el desarrollo motor.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Inclusión
              p La música se puede experimentar de diversas formas, incluyendo la vibración del sonido, lo que permite la participación de niños con discapacidad auditiva.

    .bg-full-width.bg-color-3
      .p-4.p-md-5
        p.mb-4 La música no solo es una fuente de disfrute, sino que también desarrolla la capacidad de comunicación y expresión de los niños. Antes de utilizar instrumentos musicales, es recomendable que los niños experimenten la música a través del canto y la expresión corporal, explorando sonidos de su entorno para enriquecer su experiencia musical.
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 La influencia de la música en la educación
                      p.mb-0 En este punto, se recomienda ver el siguiente video sobre la importancia de la música en la educación:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=wXCbl1cU3tM" target="_blank")
                        span.bg-color-4 Ver video
                        i.fas.fa-arrow-right
    
    h2.mb-5(data-aos="fade-left") Sugerencias para promover el disfrute de la música en la educación inicial

    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-2
                p Como se ha visto en el material anterior, la musicalidad acompaña al ser humano desde sus primeras etapas de desarrollo. La sensibilización musical comienza en el vientre materno, donde el bebé capta sonidos tanto internos como externos, creando un vínculo emocional con la madre. Para estimular este desarrollo, se recomienda:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Escuchar música</b> de distintos géneros.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Hablarle y leerle al bebé</b> durante el embarazo.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Rodear al bebé con sonidos agradables</b> que contribuyan a su bienestar.
              .col-lg-4(data-aos="zoom-in").order-1
                img.img-fluid(src='@/assets/curso/tema4/9.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0 
    
    p.mb-4 Desde el nacimiento, los bebés responden a estímulos sonoros, especialmente a la voz de su madre. Por ello, es importante interactuar con ellos mediante:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 01
          p.mb-0 Canciones de cuna y juegos de palabras.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
            h5.mb-2 02
            p.mb-0 Exploración del entorno a través de sonidos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-1.p-4(data-aos="fade-left").h-100
          h5.mb-2 03
          p.mb-0 Movimientos y ritmos que favorezcan su desarrollo musical y corporal.
    
    h2(data-aos="fade-left") Estrategias para potenciar la expresión musical
    p.mb-5 Para fomentar la expresión musical en la educación inicial, se sugieren experiencias organizadas en distintos niveles:

    TabsC.color-acento-contenido
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Auditivo" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Auditivo
            p Exponer a los niños a un repertorio variado de sonidos y melodías. Comentar lo que escuchan para enriquecer su percepción musical.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/10.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Manejo instrumental" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Manejo instrumental
            p Permitirles explorar diferentes sonidos con objetos cotidianos e instrumentos musicales sencillos. Crear ambientes sonoros que estimulen la imaginación (ejemplo: sonidos de la naturaleza).
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/11.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Rítmico y melódico" :icon="require('@/assets/bullets/2.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0
            h4 Rítmico y melódico
            p Fomentar la exploración corporal y el desplazamiento para desarrollar el sentido rítmico. Animar a los niños a crear sus propias piezas musicales.
    
          .col-md-8.col-lg-5.col-xl-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/12.png', alt='', style="width: 100%;")
    
    div.bg-color-2.px-4.px-md-5.py-4.mb-5
      .row.align-items-center
        .col-lg-auto
          img(src="@/assets/curso/tema4/13.svg", style="max-width: 90px").mx-auto
        .col-lg
          p.mb-0 A medida que los niños crecen, su capacidad para producir música se amplía. Es esencial permitirles experimentar con la creación musical, dándoles autonomía para explorar sonidos y ritmos.
    
    h2.mb-5(data-aos="fade-left") Recursos para enriquecer la educación musical

    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0.order-2.order-lg-1
                p La diversidad musical del país es un recurso valioso para fortalecer la educación inicial. Algunas estrategias recomendadas incluyen:
                ul.lista-ul--color
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Actividades en familia</b> que rescaten tradiciones musicales.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Intercambio de repertorios</b> dentro de las comunidades educativas.
                  li.mb-0.d-flex
                    i.far.fa-arrow-alt-circle-right
                    p.mb-0 <b>Visitas a bibliotecas y centros culturales</b> para acceder a diversos recursos musicales.
              .col-lg-4(data-aos="zoom-in").order-1.order-lg-2
                img.img-fluid(src='@/assets/curso/tema4/14.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/15.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El entusiasmo por la música debe ser contagioso entre educadores y niños. Los adultos pueden refrescar su memoria sobre tradiciones musicales y aprender junto con los niños, convirtiendo la expresión musical en una herramienta para fortalecer los lazos emocionales y culturales.
    
        .bg-color-9.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Finalmente, se recomienda la siguiente investigación, la cual analiza el impacto de la expresión musical en los niños de educación inicial, profundizando en su influencia en el desarrollo cognitivo, emocional y social.
        .bg-color-white.shadow-soft.p-4.mb-4
          .row.justify-content-around.align-items-center
            .col-md-auto
              img(src="@/assets/template/link2.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h5.mb-1 Manejo de la expresión musical para el desarrollo emocional de los niños de educación inicial
                  p.mb-0 Para profundizar en este tema, se recomienda consultar el siguiente recurso
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(href="http://repositorio.sangregorio.edu.ec:8080/bitstream/123456789/2351/1/Manejo%20de%20la%20expresi%C3%B3n%20musical%20para%20el%20desarrollo%20emocional%20de%20los%20ni%C3%B1os%20de%20educaci%C3%B3n%20inicial.pdf" target="_blank")
                    span.bg-color-4 Ir al sitio
                    i.fas.fa-arrow-right
    
    .bg-full-width.bg-color-10.mb-lg-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7
            h2.mb-4(data-aos="flip-up") Artes plásticas y visuales
            p.mb-4(data-aos="fade-right") Los invitamos a leer el documento Artes plásticas y visuales, donde se explora el papel fundamental de la expresión artística en la educación, resaltando su impacto en el desarrollo cognitivo, emocional y motor de los estudiantes.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Artes plásticas y visuales.
    
          .col-lg-5.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema4/16.png', alt='')



    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://repositorio.sangregorio.edu.ec:8080/bitstream/123456789/2351/1/Manejo%20de%20la%20expresi%C3%B3n%20musical%20para%20el%20desarrollo%20emocional%20de%20los%20ni%C3%B1os%20de%20educaci%C3%B3n%20inicial.pdf" target="_blank" rel="noopener noreferrer") MENDOZA MONTALVO, J. J. (2021). Manejo de la expresión musical para el desarrollo emocional de los niños de educación inicial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/33755?page=1" target="_blank" rel="noopener noreferrer") Ramírez Carmona, I. (2009). 99 juegos de expresión corporal y musical: 5 años: ( ed.). Wanceulen Editorial.  
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://mundoinicial.com/la-importancia-de-la-musica-en-la-educacion-inicial-ritmo-aprendizaje-y-diversion/" target="_blank" rel="noopener noreferrer") Inicial, M. (8 de enero, 2025). La Importancia de la Música en la Educación Inicial: Ritmo, Aprendizaje y Diversión. Mundo Inicial - Sitio web de educación inicial. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=wXCbl1cU3tM" target="_blank" rel="noopener noreferrer") Innovación Educativa - Fundación kichihua. (2018, 11 de diciembre). La importancia de la música en la educación con Alicia Prieto. [Vídeo] Youtube. 



          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes NO es un lenguaje artístico comúnmente utilizado en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Lenguaje Plástico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Lenguaje Musical',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Lenguaje Verbal Abstracto',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Lenguaje Corporal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Qué habilidad principal se desarrolla a través del lenguaje plástico en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Habilidades de razonamiento lógico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Habilidades de motricidad fina y creatividad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Habilidades de cálculo matemático',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Habilidades de debate y argumentación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              '¿Cuál es el principal beneficio del lenguaje musical en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo de habilidades de lectura temprana',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Desarrollo del sentido auditivo y la expresión rítmica',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Desarrollo de habilidades de programación informática',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Desarrollo de habilidades de negociación y liderazgo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Qué aspecto del desarrollo se fortalece principalmente a través del lenguaje corporal en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Desarrollo de habilidades de pensamiento crítico',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Desarrollo de la conciencia corporal y la expresión emocional',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Desarrollo de habilidades de investigación científica',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Desarrollo de habilidades de escritura creativa',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es el objetivo principal de integrar los lenguajes artísticos en la educación inicial?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Formar artistas profesionales desde temprana edad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Desarrollar habilidades específicas para el ingreso a la universidad',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Fomentar el desarrollo integral de los niños a través de la expresión y la creatividad',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto:
                  'Preparar a los niños para carreras en el campo de la tecnología y la ingeniería',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
