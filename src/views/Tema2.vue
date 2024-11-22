<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de instalación
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-lg-0.mb-3
        p.mb-0 El módulo sobre dispositivos y componentes IoT se enfoca en los elementos indispensables que hacen posible el Internet of Things (IoT), donde los dispositivos están interconectados, comparten información y permiten la automatización y el monitoreo inteligente. La implementación de sistemas IoT requiere de componentes específicos, como sensores, actuadores, gateways y microcontroladores, que juntos habilitan una comunicación fluida y eficaz en la red, y permiten que los sistemas respondan de manera autónoma según las condiciones detectadas.
      .col-lg-2.col-7: img(src='@/assets/curso/temas/15.svg', alt='')
    .mn.p-5.bg-slyde
      .tarjeta.bg-white.p-5
        SlyderA(tipo='b')
          .row
            .col-lg-7.mb-4.mb-md-0
              p Los sensores son dispositivos que recopilan información del entorno y la convierten en datos digitales. Por ejemplo, un sensor de temperatura mide el calor del ambiente y envía estos datos a otros sistemas para que realicen ajustes automáticos, como encender un ventilador. Los sensores son primordiales en aplicaciones de monitoreo y control ambiental, en industrias de manufactura y en entornos domésticos. Por su parte, los actuadores son dispositivos que ejecutan acciones físicas en respuesta a las señales que reciben. Por ejemplo, un actuador puede abrir una válvula o mover un mecanismo, convirtiendo las señales de los sensores en acciones específicas.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/16.png', alt='Texto que describa la imagen')
          .row
            .col-lg-7.mb-4.mb-md-0
              p Los gateways y controladores desempeñan un papel principal en la infraestructura de redes IoT. Los gateways actúan como intermediarios que traducen los protocolos de comunicación y envían datos de los dispositivos al sistema central, ya sea en el cloud o en servidores locales. Su función es determinante para filtrar, procesar y gestionar el tráfico de datos en tiempo real, garantizando que la información se envíe de manera segura y eficiente. Los controladores, por otro lado, coordinan la comunicación entre sensores y actuadores, gestionando el flujo de datos y asegurando que las respuestas sean adecuadas y rápidas.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/17.png', alt='Texto que describa la imagen')
          .row
            .col-lg-7.mb-4.mb-md-0
              p Los microcontroladores y plataformas de procesamiento local o en el cloud permiten que los sistemas IoT analicen datos y tomen decisiones autónomas en función de los algoritmos de programación. Estos dispositivos, como las placas Arduino y Raspberry Pi, son plataformas versátiles que soportan múltiples tipos de sensores y actuadores, facilitando la creación de soluciones personalizadas para aplicaciones específicas. La incorporación de estos microcontroladores permite el procesamiento local, que es particularmente útil en aplicaciones que requieren respuestas inmediatas, mientras que el cloud permite el análisis de grandes volúmenes de datos en un entorno centralizado.
            .col-lg-5.col-7
              figure
                img(src='@/assets/curso/temas/18.png', alt='Texto que describa la imagen')
    p.mb-5(data-aos='fade-right') Cada uno de estos componentes trabaja en conjunto para crear un sistema de comunicación y respuesta que caracteriza a la tecnología IoT. A medida que se desarrollan nuevas aplicaciones en campos como la agricultura, la salud y las ciudades inteligentes, la comprensión profunda de estos dispositivos y componentes se vuelve indispensable para crear redes eficientes y seguras.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 1.
      span Componentes y funcionalidades clave
    .tabla-a.color-acento-botones.mb-5
      table
        caption Fuente: OIT, 2024.
        thead.border-0
          tr(style="background-color: #efe8f7 ")
            th.border-0 Componente
            th.border-0 Descripción
            th.border-0 Función en la Red
        tbody
          tr
            td(style="background-color: #ebf6ea ").fw-bold Dispositivos de red
            td Equipos como Access Points, routers y controladores. 
            td Facilitan la conectividad y controlan el tráfico de la red.
          tr
            td(style="background-color: #ebf6ea ").fw-bold Sensores IoT
            td Dispositivos que capturan datos ambientales (temperatura, movimiento, etc.).
            td Recogen datos y permiten el monitoreo en tiempo real.
          tr
            td(style="background-color: #ebf6ea ").fw-bold Protocolos de Seguridad
            td Ej. WPA, WPA2, autenticación multifactor (MFA).
            td Protegen el acceso y garantizan la confidencialidad de la red.
          tr
            td(style="background-color: #ebf6ea ").fw-bold Antenas y coberturas
            td Estructuras que amplían o dirigen la señal inalámbrica.
            td Aseguran una señal estable en toda el área de cobertura.
          tr
            td(style="background-color: #ebf6ea ").fw-bold Monitoreo y Gestión
            td Herramientas y métodos de supervisión del tráfico y el rendimiento de la red.
            td Previenen intrusiones y optimizan el rendimiento de la red.
    Separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1	Sensores y actuadores
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/19.svg', alt='')
      .col-lg-9
        p.mb-0 Los sensores y actuadores son componentes fundamentales en los sistemas IoT, permitiendo la interacción directa con el entorno y el control de diversos procesos. Los sensores recopilan datos específicos del ambiente, como temperatura, humedad, presión, o niveles de luz, y los convierten en señales digitales que pueden ser interpretadas por otros dispositivos. Este proceso de recolección de datos es primordial para la toma de decisiones automatizadas en sistemas IoT, ya que proporciona la información necesaria para el monitoreo continuo y en tiempo real de condiciones variables en el entorno.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-3 Los actuadores, por otro lado, son dispositivos que convierten las señales digitales en acciones físicas. Por ejemplo, un actuador puede encender una lámpara, abrir una válvula de agua o ajustar el nivel de un termostato. Esta capacidad de respuesta permite que los sistemas IoT no solo recopilen datos, sino que también interactúen activamente con el entorno para realizar tareas específicas en función de los datos que los sensores han proporcionado.
        .tarjeta.p-4(style="background-color: #e2f4f9")
          p.mb-0 La combinación de sensores y actuadores en un sistema IoT es lo que permite la creación de entornos autónomos y adaptativos. En aplicaciones industriales, esta sinergia facilita la supervisión de maquinaria y la automatización de tareas, mientras que en el hogar puede usarse para sistemas de seguridad, termostatos inteligentes, o iluminación automatizada. En resumen, los sensores detectan cambios y los actuadores responden, formando un ciclo continuo que hace posible la funcionalidad inteligente en estos sistemas.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/20.png', alt='')
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2	#[em Gateways] y controladores
    div(style="background-color: #efe8f7 ")
      .row.justify-content-center.mb-5.g-0
        .col-lg-5.d-lg-block.d-none: img(src='@/assets/curso/temas/21.png', alt='')
        .col-lg-7
          .p-4
            p.mb-0 Los gateways y controladores desempeñan roles decisivos en la infraestructura de los sistemas IoT, actuando como intermediarios y gestores en la comunicación entre dispositivos y redes. Los gateways son responsables de conectar los dispositivos IoT a la red principal, ya sea a través de redes locales o mediante conexión a la cloud. Estos dispositivos filtran y traducen los datos recibidos de los sensores, asegurando que la información se envíe de forma segura y eficiente a los sistemas de procesamiento central. Los gateways también permiten la interoperabilidad entre dispositivos que utilizan diferentes protocolos de comunicación, facilitando la transmisión de datos en redes complejas y distribuidas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        p.mb-0 Los controladores se encargan de gestionar y coordinar las interacciones entre dispositivos dentro de un sistema IoT, actuando como el “cerebro” local que toma decisiones sobre la base de los datos obtenidos de los sensores. En muchos sistemas, los controladores están programados para responder de forma autónoma, enviando instrucciones a los actuadores sin necesidad de intervención humana. Estos dispositivos permiten una comunicación fluida y rápida, especialmente en aplicaciones donde la velocidad de respuesta es crítica, como en sistemas industriales o de seguridad.
          br
          br
          |En conjunto, los gateways y controladores aseguran la estabilidad y eficiencia de los sistemas IoT. Los gateways manejan la conexión y el flujo de datos, mientras que los controladores procesan la información y gestionan las acciones dentro del sistema, facilitando la autonomía y el control centralizado. Esta organización es especialmente útil en aplicaciones de ciudades inteligentes, agricultura de precisión y automatización del hogar, donde se requiere monitoreo constante y respuesta inmediata.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/22.svg', alt='')
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3	Microcontroladores y plataformas
    p.mb-4(data-aos='fade-right') Los microcontroladores y las plataformas de desarrollo son componentes fundamentales en los sistemas IoT, ya que permiten el procesamiento local de datos y la ejecución de instrucciones directamente en los dispositivos. Los microcontroladores, como los presentes en las placas Arduino o ESP8266, son pequeños circuitos integrados que combinan un procesador, memoria y entradas/salidas en un solo chip. Esto les permite realizar cálculos, tomar decisiones y controlar otros componentes, como sensores y actuadores, de manera autónoma y en tiempo real, sin necesidad de conectarse continuamente a un sistema externo.
    .row.justify-content-center.mb-5
      .col-lg-9.mb-lg-0.mb-3
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-3.col-7.mb-lg-0.mb-3: img(src='@/assets/curso/temas/23.svg', alt='')
          .col-lg-9
            .p-4(style="background-color: #e2f4f9 ")
              p.mb-0 Las plataformas de desarrollo como Raspberry Pi o Arduino proporcionan entornos de hardware y software que facilitan la creación y prueba de soluciones IoT. Estas plataformas son versátiles y compatibles con una amplia variedad de sensores y actuadores, permitiendo a los desarrolladores diseñar soluciones específicas para aplicaciones en áreas como la automatización del hogar, la agricultura de precisión o la industria 4.0. Regularmente, muchas plataformas son de código abierto, lo que fomenta la innovación y permite que los sistemas se adapten a necesidades particulares.
        p.mb-0 En el contexto de IoT, los microcontroladores y plataformas de desarrollo permiten un procesamiento de datos más eficiente y rápido, lo que es vital para aplicaciones que requieren respuestas inmediatas. En sistemas complejos, los microcontroladores pueden actuar como dispositivos de borde (edge devices), procesando los datos localmente y enviando solo información relevante a la cloud para un análisis más profundo. Esto reduce la latencia y permite que los sistemas respondan en tiempo real a los cambios en el entorno.
      .col-lg-3.col-7: img(src='@/assets/curso/temas/24.png', alt='')
    .bloque-texto-g.color-acento-contenido2.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/25.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Además de su rol en el procesamiento local de datos, los microcontroladores y plataformas de desarrollo también destacan por su capacidad de conectividad y su adaptabilidad a diferentes protocolos de comunicación, como WiFi, Bluetooth, LoRa y Zigbee. Esto les permite integrarse en redes más amplias y conectarse con otros dispositivos de manera flexible, facilitando el diseño de soluciones escalables en las que varios dispositivos puedan comunicarse entre sí sin necesidad de intervención humana. Las plataformas también soportan bibliotecas y entornos de programación amigables, como C++, Python o JavaScript, lo que permite una implementación rápida y flexible de aplicaciones, optimizando el desarrollo de prototipos y la integración en infraestructuras IoT complejas.







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
