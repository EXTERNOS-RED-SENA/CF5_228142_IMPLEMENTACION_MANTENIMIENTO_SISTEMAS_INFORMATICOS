export default {
  global: {
    componenteFormativo:
      'Redes inalámbricas y equipos de cómputo: configuración e implementación',
    descripcionCurso:
      'Este componente aborda los elementos para desarrollar la configuración, instalación y administración de redes inalámbricas, junto con la integración y puesta en marcha de equipos de cómputo. El módulo, también incluye la selección y configuración de dispositivos de red, aplicación de protocolos de seguridad y optimización del rendimiento de conexiones inalámbricas, garantizando la conectividad y funcionalidad de sistemas de cómputo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tecnologías inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estándares y protocolos (WiFi, Bluetooth, 3G/4G/5G).',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Espectro electromagnético y propagación',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Arquitecturas inalámbricas',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Dispositivos y componentes IoT',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Sensores y actuadores',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: '<em>Gateways y controladores</em>',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Microcontroladores y plataformas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Infraestructura inalámbrica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: '<em>Access Points</em> y controladores',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Antenas y cobertura',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '<em>Site surveys</em> y planificación',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Seguridad en redes inalámbricas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Protocolos de seguridad (WEP, WPA, WPA2)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Autenticación y control de acceso',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Monitoreo y gestión',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1.  Cómo funcionan las redes inalámbricas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021f, junio 25). Tecnologías inalámbricas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hyIpJZBLYg0',
    },
    {
      tema: '2. Site Survey',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023d, octubre 30). Infraestructura Inalambrica.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=XaZJ3EYxQHU',
    },
    {
      tema: '3. Arquitectura de internet de las cosas',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2022f, marzo 11). Dispositivos y componentes IoT.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gaa-7nYolxE',
    },
    {
      tema: '4. Herramientas de monitoreo y control',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2023e, enero 29). Seguridad en redes inalámbricas.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gp2cLOeucn4',
    },
    {
      tema: '5. Seguridad en Redes WIFI  Protocolos WEP, WPA, WPA2 y WPA3',
      referencia:
        'Contando Bits. (2024c, agosto 8). Protocolos de seguridad (WEP, WPA, WPA2).',
      tipo: 'Video',
      link: 'Protocolos de seguridad inalámbrica: WEP, WPA, WPA2, y WPA3',
    },
  ],
  glosario: [
    {
      termino: '<em>Access Point</em>',
      significado:
        'Dispositivo que permite la conexión inalámbrica de dispositivos a una red local, actuando como un puente entre dispositivos y el servidor o la red principal.',
    },
    {
      termino: 'Actuador',
      significado:
        'Componente de un sistema IoT que recibe señales y realiza una acción física en respuesta, como encender un motor, abrir una válvula o ajustar una luz.',
    },
    {
      termino: 'Antena',
      significado:
        'Dispositivo que transmite y recibe ondas de radio para la comunicación en redes inalámbricas, determinando en gran medida la cobertura y calidad de la señal.',
    },
    {
      termino: 'Arquitectura inalámbrica',
      significado:
        'Estructura y organización de los componentes y dispositivos de una red inalámbrica, incluyendo la disposición de access points, antenas y dispositivos terminales.',
    },
    {
      termino: 'Autenticación',
      significado:
        'Proceso mediante el cual se verifica la identidad de un usuario o dispositivo para permitir el acceso a una red o sistema de manera segura.',
    },
    {
      termino: '<em>Bluetooth</em>',
      significado:
        'Estándar de comunicación inalámbrica de corto alcance diseñado para la transmisión de datos entre dispositivos de forma rápida y sencilla.',
    },
    {
      termino: 'Cobertura',
      significado:
        'Área geográfica en la que una red inalámbrica puede operar de manera efectiva y proporcionar conectividad a los dispositivos.',
    },
    {
      termino: 'Controlador',
      significado:
        'Componente de un sistema de redes o IoT que gestiona y coordina la operación de diversos dispositivos, asegurando que funcionen de manera sincronizada.',
    },
    {
      termino: 'Espectro electromagnético',
      significado:
        'Conjunto de todas las frecuencias de ondas electromagnéticas, desde ondas de radio hasta rayos gamma, utilizado en diversas tecnologías de comunicación, incluida la transmisión de datos inalámbricos.',
    },
    {
      termino: '<em>Gateway</em>',
      significado:
        'Dispositivo que conecta redes diferentes entre sí, permitiendo la comunicación y transmisión de datos entre sistemas IoT y otros dispositivos o redes.',
    },
    {
      termino: 'Gestión de incidentes',
      significado:
        'Proceso de respuesta ante problemas detectados en la red, incluyendo acciones correctivas para restaurar el servicio y prevenir futuras interrupciones.',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'Unidad de procesamiento de pequeña escala que integra una CPU, memoria y entradas/salidas en un solo chip, utilizado en dispositivos IoT para realizar tareas específicas de forma autónoma.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'Actividad de supervisión continua de la red para identificar posibles problemas, caídas de servicio o intentos de acceso no autorizado, permitiendo respuestas rápidas.',
    },
    {
      termino: 'Protocolo de seguridad',
      significado:
        'Conjunto de reglas y algoritmos diseñados para proteger la comunicación en redes inalámbricas, como WEP, WPA y WPA2, asegurando que solo usuarios autorizados puedan acceder a la red.',
    },
    {
      termino: 'Red inalámbrica',
      significado:
        'Sistema de comunicación que permite la transmisión de datos sin necesidad de cables físicos, utilizando ondas electromagnéticas para la conexión entre dispositivos.',
    },
    {
      termino: 'Sensor',
      significado:
        'Dispositivo que detecta y mide condiciones físicas o químicas del entorno (como temperatura, presión o luz) y convierte esa información en señales que pueden ser interpretadas por otros dispositivos',
    },
    {
      termino: '<em>Site survey</em>',
      significado:
        'Proceso de evaluación de un sitio para planificar la implementación de una red inalámbrica, considerando factores como la cobertura, interferencias y ubicación de los <em>access points.</em>',
    },
    {
      termino: 'WiFi',
      significado:
        'Tecnología de red inalámbrica que permite la conexión de dispositivos a internet mediante la transmisión de datos a través de frecuencias de radio.',
    },
    {
      termino: 'WEP',
      significado:
        'Protocolo de seguridad antiguo para redes inalámbricas, que en su momento ofrecía protección básica, pero ha sido reemplazado por opciones más seguras debido a sus vulnerabilidades.',
    },
    {
      termino: 'WPA/WPA2',
      significado:
        'Protocolos de seguridad que mejoran la protección en redes inalámbricas respecto a WEP, proporcionando encriptación más avanzada para evitar accesos no autorizados',
    },
  ],
  referencias: [
    {
      referencia:
        'Alvear-Puertas, V., Rosero-Montalvo, P., & Peluffo-Ordóñez, D. (2017). Internet de las Cosas y Visión Artificial: Funcionamiento y aplicaciones: Revisión de literatura. Tomado de Internet de las Cosas y Visión Artificial, Funcionamiento y Aplicaciones: Revisión de Literatura',
      link: '',
    },
    {
      referencia:
        'Bluetooth Special Interest Group (SIG). (2021). Bluetooth Core Specification Version 5.3. Bluetooth SIG.',
      link:
        'https://www.bluetooth.com/specifications/specs/core-specification-5-3/?form=MG0AV3',
    },
    {
      referencia:
        'Durán, F. F., Mondragón, N., & Sánchez, M. (2008). Redes cableadas e inalámbricas para transmisión de datos. Científica, 12(3), 113-118. Tomado de Redalyc. Redes cableadas e inalámbricas para transmisión de datos',
      link: '',
    },
    {
      referencia:
        'Flores Zermeño, F. J., & Cossio Franco, E. G. (2017). Aplicaciones, enfoques y tendencias del Internet de las Cosas (IoT): Revisión sistemática de la literatura. Tomado de Aplicaciones enfoques y tendencias del',
      link: 'https://iot.pdf/?form=MG0AV3',
    },
    {
      referencia:
        'González García, A. J. (2017). IoT: Dispositivos, tecnologías de transporte y aplicaciones: Trabajo final. Tomado de IoT: Dispositivos, tecnologías de transporte y aplicaciones',
      link: '',
    },
    {
      referencia:
        'IEEE Standards Association. (2022). IEEE 802.11: Wireless Local Area Networks (Wi-Fi). IEEE Standards Association.',
      link: 'https://standards.ieee.org/ieee/802.11/865/?form=MG0AV3',
    },
    {
      referencia:
        'Jiménez Bonilla, Z. C., & Leaño Suárez, C. E. (2011). Redes inalámbricas: Diseño e implementación. Universidad Tecnológica de Bolívar. Tomado de Redes Inalámbricas: Diseño e Implementación',
      link: '',
    },
    {
      referencia:
        'Karygiannis, T., & Owens, L. (2002). Wireless Network Security: 802.11, Bluetooth and Handheld Devices. NIST Special Publication 800-48.',
      link: 'https://nistspecialpublication800-48.pdf/?form=MG0AV3',
    },
    {
      referencia:
        'Rappaport, T. S., Heath, R. W., Daniels, R. C., & Murdock, J. N. (2014). Millimeter Wave Wireless Communications. Pearson Education.',
      link: '',
    },
    {
      referencia:
        'Sharma, S. K., & Giannakis, G. B. (2020). Ultra-Reliable and Low-Latency Communications for 5G. IEEE Signal Processing Magazine, 37(2), 14-23.',
      link:
        'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=8688469&form=MG0AV3',
    },
    {
      referencia:
        'Wi-Fi Alliance. (2022). Wi-Fi Certified 6™ Release 2: Bringing Enhanced Features and Capabilities. Wi-Fi Alliance. Tomado de ',
      link:
        'https://www.wi-fi.org/beacon/the-beacon/the-future-of-wi-fi-using-standardized-key-performance-indicators-and-evaluation',
    },
  ],
}
