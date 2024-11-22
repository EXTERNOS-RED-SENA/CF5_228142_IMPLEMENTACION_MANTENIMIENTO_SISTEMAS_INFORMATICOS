<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/1.svg', alt='')
      .col-lg-9
        p.mb-0 En la actualidad, las redes inalámbricas son una pieza fundamental en la infraestructura de comunicaciones, permitiendo la conectividad sin cables y facilitando el acceso a la información desde cualquier lugar. Con el auge del Internet de las Cosas (IoT) y la proliferación de dispositivos inteligentes, la necesidad de redes inalámbricas robustas y seguras se ha vuelto imprescindible. Este módulo ofrece una visión integral de las tecnologías, dispositivos y técnicas de configuración principales para la implementación y optimización de redes inalámbricas y su interacción con equipos de cómputo.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-4 En la actualidad, las redes inalámbricas son una pieza fundamental en la infraestructura de comunicaciones, permitiendo la conectividad sin cables y facilitando el acceso a la información desde cualquier lugar. Con el auge del Internet de las Cosas (IoT) y la proliferación de dispositivos inteligentes, la necesidad de redes inalámbricas robustas y seguras se ha vuelto imprescindible. Este módulo ofrece una visión integral de las tecnologías, dispositivos y técnicas de configuración principales para la implementación y optimización de redes inalámbricas y su interacción con equipos de cómputo.
          br
          br
          |El contenido abarca desde las tecnologías base, como Wi-Fi y Bluetooth, hasta los dispositivos específicos de IoT que habilitan la conectividad inteligente, tales como sensores, actuadores y microcontroladores. Estos componentes permiten la creación de entornos conectados que se adaptan a múltiples aplicaciones en áreas como la industria, el hogar y la salud. Comprender la función de cada uno y cómo interactúan en una red compleja es fundamental para lograr un funcionamiento eficiente y adaptado a las necesidades de los usuarios.
        .tarjeta.rounded-3.p-4(style="background-color: #efe8f7")
          p.mb-0 Otro aspecto central de este módulo es la infraestructura necesaria para el despliegue de redes inalámbricas, incluyendo la planificación de cobertura, la elección de antenas y los métodos de configuración de Access Points. Estas herramientas permiten que las redes mantengan una cobertura adecuada y estable, asegurando que los dispositivos puedan conectarse de manera óptima y sin interrupciones. A través de estos procesos, los administradores de red pueden controlar el rendimiento y ajustarlo según los requisitos del entorno.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/2.png', alt='')
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Finalmente, este componente profundiza en los aspectos de seguridad y gestión en redes inalámbricas, abordando protocolos como WPA2 y técnicas avanzadas de monitoreo y autenticación. Con la creciente cantidad de dispositivos conectados y el intercambio constante de datos, asegurar la integridad y confidencialidad de las redes se ha convertido en una prioridad. Esta formación proporciona las herramientas necesarias para implementar políticas de seguridad efectivas, proteger el acceso a la red y mantener un rendimiento confiable en entornos inalámbricos de alta demanda.
    p.mb-5(data-aos='fade-right') ¡Bienvenido a este viaje relacionado con la configuración e implementación de los equipos de cómputo!
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video.




    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
