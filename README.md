# 🎓 Abecedario Interactivo - Astro# Astro Starter Kit: Basics



Una aplicación web moderna e interactiva para aprender el abecedario español, construida con Astro y optimizada con las mejores prácticas de desarrollo web.```sh

npm create astro@latest -- --template basics

## ✨ Características Principales```



### 🎨 Diseño Moderno> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- **Vista Dual**: Alterna entre vista carrusel y cuadrícula

- **Tema Claro/Oscuro**: Cambia entre temas con persistencia en localStorage## 🚀 Project Structure

- **Animaciones Suaves**: Transiciones fluidas con View Transitions API de Astro

- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorioInside of your Astro project, you'll see the following folders and files:



### 🔊 Interactividad```text

- **Síntesis de Voz**: Pronunciación en español con Web Speech API/

- **Navegación por Teclado**: Usa las flechas ← → para navegar├── public/

- **Feedback Háptico**: Vibración en dispositivos móviles│   └── favicon.svg

- **Efectos Visuales**: Animaciones y efectos de brillo al interactuar├── src

│   ├── assets

### ♿ Accesibilidad│   │   └── astro.svg

- **ARIA Labels**: Etiquetas semánticas para lectores de pantalla│   ├── components

- **Navegación por Teclado**: Soporte completo con Tab, Enter y Espacio│   │   └── Welcome.astro

- **Focus Visible**: Indicadores claros de foco│   ├── layouts

- **Reduced Motion**: Respeta las preferencias de animación del usuario│   │   └── Layout.astro

│   └── pages

### 🚀 Performance│       └── index.astro

- **TypeScript**: Código tipado para mejor mantenimiento└── package.json

- **Optimización de Astro**: Generación estática para carga rápida```

- **CSS Moderno**: Variables CSS para theming dinámico

- **Lazy Loading**: Carga eficiente de recursosTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).



## 🛠️ Tecnologías Utilizadas## 🧞 Commands



- **[Astro](https://astro.build)** - Framework web modernoAll commands are run from the root of the project, from a terminal:

- **TypeScript** - Tipado estático

- **View Transitions API** - Transiciones fluidas entre páginas| Command                   | Action                                           |

- **Web Speech API** - Síntesis de voz| :------------------------ | :----------------------------------------------- |

- **CSS Custom Properties** - Theming dinámico| `npm install`             | Installs dependencies                            |

- **Google Fonts** - Tipografías Orbitron y Exo 2| `npm run dev`             | Starts local dev server at `localhost:4321`      |

| `npm run build`           | Build your production site to `./dist/`          |

## 📦 Estructura del Proyecto| `npm run preview`         | Preview your build locally, before deploying     |

| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

```| `npm run astro -- --help` | Get help using the Astro CLI                     |

/

├── public/## 👀 Want to learn more?

│   ├── favicon.svg

│   ├── scripts/Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

│   │   └── alphabet-sound-improved.js  # Sistema de audio mejorado
│   └── styles/
│       └── global.css                  # Estilos globales con theming
├── src/
│   ├── components/
│   │   ├── AlphabetCarousel.astro     # Componente de carrusel
│   │   ├── AlphabetGrid.astro         # Componente de cuadrícula
│   │   ├── InfoPanel.astro            # Panel informativo
│   │   └── LetterCard.astro           # Tarjeta de letra
│   ├── layouts/
│   │   └── BaseLayout.astro           # Layout principal con SEO
│   └── pages/
│       └── index.astro                # Página principal
├── astro.config.mjs
├── package.json
├── tsconfig.json
└── README.md
```

## 🧞 Comandos

| Comando                | Acción                                         |
| :--------------------- | :--------------------------------------------- |
| `npm install`          | Instala dependencias                           |
| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321` |
| `npm run build`        | Construye el sitio para producción en `./dist/` |
| `npm run preview`      | Previsualiza la build localmente               |
| `npm run astro ...`    | Ejecuta comandos CLI de Astro                  |

## 🎯 Mejoras Implementadas

### 1. **Arquitectura con Astro**
- ✅ View Transitions API para navegación fluida
- ✅ Generación estática para máxima performance
- ✅ Componentes modulares y reutilizables
- ✅ TypeScript para type safety

### 2. **SEO y Meta Tags**
- ✅ Meta tags completos (Open Graph, Twitter Cards)
- ✅ Meta tag `generator` de Astro
- ✅ Descripciones y títulos optimizados
- ✅ Favicon SVG

### 3. **Experiencia de Usuario**
- ✅ Dos vistas: Carrusel y Cuadrícula
- ✅ Tema claro/oscuro con localStorage
- ✅ Navegación con teclado (flechas, Home, End)
- ✅ Indicador de progreso (letra actual/total)
- ✅ Botones de navegación con estados disabled

### 4. **Accesibilidad (WCAG 2.1)**
- ✅ Roles ARIA apropiados
- ✅ Labels descriptivos
- ✅ Soporte para lectores de pantalla
- ✅ Focus visible y outline personalizado
- ✅ Respeto a `prefers-reduced-motion`

### 5. **Diseño Responsivo**
- ✅ Mobile-first approach
- ✅ Breakpoints: 480px, 768px, 1400px
- ✅ Grid adaptativo
- ✅ Tipografía escalable

### 6. **Sistema de Audio**
- ✅ Clase `AlphabetSpeaker` con manejo de errores
- ✅ Pronunciaciones especiales (Ñ, W, Y)
- ✅ Feedback visual cuando no hay audio
- ✅ Cancelación de audio anterior

### 7. **Animaciones y Efectos**
- ✅ Transiciones suaves con cubic-bezier
- ✅ Efectos de brillo (glow) con CSS
- ✅ Animación de pulsación al hacer clic
- ✅ Transformaciones 3D suaves

### 8. **CSS Moderno**
- ✅ Variables CSS para theming
- ✅ Gradientes dinámicos
- ✅ Backdrop filters
- ✅ Scrollbar personalizada
- ✅ Custom selection colors

## 🎨 Temas

### Tema Oscuro (Default)
- Fondo: #0a0a14
- Primario: #00f0ff (Cyan)
- Secundario: #ff00e6 (Magenta)
- Acento: #7b00ff (Púrpura)

### Tema Claro
- Fondo: #f0f4f8
- Primario: #0088cc (Azul)
- Secundario: #cc0088 (Rosa)
- Acento: #5500cc (Violeta)

## 📱 Navegación

### Ratón/Touch
- Click en letra: Centra y pronuncia
- Botones ‹ ›: Navega letra por letra

### Teclado
- `←` `→`: Navega entre letras
- `Home`: Primera letra
- `End`: Última letra
- `Enter` / `Espacio`: Activa letra enfocada
- `Tab`: Navega entre elementos

## 🌐 Navegadores Soportados

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 👨‍💻 Autor

Desarrollado con ❤️ y [Astro](https://astro.build)

---

**¿Tienes sugerencias?** Abre un issue en GitHub o contribuye al proyecto.
