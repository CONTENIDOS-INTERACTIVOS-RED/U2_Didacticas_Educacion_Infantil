<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .row
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-1.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El arte y la expresión corporal son elementos esenciales en la educación inicial, ya que favorecen el desarrollo integral de los niños. A través de diferentes lenguajes artísticos, como la música, la plástica, el teatro y la danza, los niños exploran el mundo, comunican sus emociones y fortalecen su creatividad. Estas experiencias contribuyen a la construcción de su identidad, promoviendo la sensibilidad y la interacción con su entorno.
        p(data-aos="fade-left") El Ministerio de Educación Nacional (2014) resalta la importancia de integrar el arte en las prácticas pedagógicas desde los primeros años, pues permite a los niños expresarse más allá de la palabra. La expresión corporal, en particular, facilita la comunicación de ideas y sentimientos a través del movimiento, fortaleciendo la coordinación, la confianza y la socialización. Cuando los niños participan en actividades artísticas, desarrollan habilidades cognitivas, emocionales y motrices de manera natural y espontánea.
    
    .bg-full-width.bg-h85
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-7(data-aos="fade-left").mb-3.mb-lg-0.order-lg-2
                p.mb-0.text-white Es fundamental que los educadores creen espacios enriquecidos con estímulos artísticos, donde los niños puedan experimentar libremente y desarrollar sus capacidades expresivas. Fomentar el contacto con diversas formas de arte desde la infancia no solo potencia el aprendizaje, sino que también contribuye a la formación de individuos críticos, creativos y sensibles a su entorno.
              .col-lg-5(data-aos="zoom-in").order-lg-1
                img.img-fluid(src='@/assets/curso/intro/3.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
        

</template>
