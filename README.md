# 🎓 Abecedario Interactivo - Astro# 🎓 Abecedario Interactivo - Astro# Astro Starter Kit: Basics



[![Deploy to GitHub Pages](https://github.com/Subkhht/Abecedario_Astro/actions/workflows/deploy.yml/badge.svg)](https://github.com/Subkhht/Abecedario_Astro/actions/workflows/deploy.yml)



Una aplicación web moderna e interactiva para aprender el abecedario español, construida con Astro y optimizada con las mejores prácticas de desarrollo web.Una aplicación web moderna e interactiva para aprender el abecedario español, construida con Astro y optimizada con las mejores prácticas de desarrollo web.```sh



🌐 **[Ver Demo en Vivo](https://Subkhht.github.io/Abecedario_Astro/)**npm create astro@latest -- --template basics



## ✨ Características Principales## ✨ Características Principales```



### 🎨 Diseño Moderno

- **Vista Dual**: Alterna entre vista carrusel y cuadrícula

- **Tema Claro/Oscuro**: Cambia entre temas con persistencia en localStorage### 🎨 Diseño Moderno> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

- **Animaciones Suaves**: Transiciones fluidas con View Transitions API de Astro

- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorio- **Vista Dual**: Alterna entre vista carrusel y cuadrícula



### 🔊 Interactividad- **Tema Claro/Oscuro**: Cambia entre temas con persistencia en localStorage## 🚀 Project Structure

- **Síntesis de Voz**: Pronunciación en español con Web Speech API

- **Navegación por Teclado**: Usa las flechas ← → para navegar- **Animaciones Suaves**: Transiciones fluidas con View Transitions API de Astro

- **Feedback Háptico**: Vibración en dispositivos móviles

- **Efectos Visuales**: Animaciones y efectos de brillo al interactuar- **Diseño Responsivo**: Optimizado para móviles, tablets y escritorioInside of your Astro project, you'll see the following folders and files:



### ♿ Accesibilidad

- **ARIA Labels**: Etiquetas semánticas para lectores de pantalla

- **Navegación por Teclado**: Soporte completo con Tab, Enter y Espacio### 🔊 Interactividad```text

- **Focus Visible**: Indicadores claros de foco

- **Reduced Motion**: Respeta las preferencias de animación del usuario- **Síntesis de Voz**: Pronunciación en español con Web Speech API/



### 🚀 Performance- **Navegación por Teclado**: Usa las flechas ← → para navegar├── public/

- **TypeScript**: Código tipado para mejor mantenimiento

- **Optimización de Astro**: Generación estática para carga rápida- **Feedback Háptico**: Vibración en dispositivos móviles│   └── favicon.svg

- **CSS Moderno**: Variables CSS para theming dinámico

- **Lazy Loading**: Carga eficiente de recursos- **Efectos Visuales**: Animaciones y efectos de brillo al interactuar├── src



## 🛠️ Tecnologías Utilizadas│   ├── assets



- **[Astro](https://astro.build)** v5.14.1 - Framework web moderno### ♿ Accesibilidad│   │   └── astro.svg

- **TypeScript** - Tipado estático

- **View Transitions API** - Transiciones fluidas entre páginas- **ARIA Labels**: Etiquetas semánticas para lectores de pantalla│   ├── components

- **Web Speech API** - Síntesis de voz

- **CSS Custom Properties** - Theming dinámico- **Navegación por Teclado**: Soporte completo con Tab, Enter y Espacio│   │   └── Welcome.astro

- **Google Fonts** - Tipografías Orbitron y Exo 2

- **Focus Visible**: Indicadores claros de foco│   ├── layouts

## 📦 Estructura del Proyecto

- **Reduced Motion**: Respeta las preferencias de animación del usuario│   │   └── Layout.astro

```

/│   └── pages

├── public/

│   ├── favicon.svg### 🚀 Performance│       └── index.astro

│   ├── scripts/

│   │   └── alphabet-sound-improved.js  # Sistema de audio mejorado- **TypeScript**: Código tipado para mejor mantenimiento└── package.json

│   └── styles/

│       └── global.css                  # Estilos globales con theming- **Optimización de Astro**: Generación estática para carga rápida```

├── src/

│   ├── components/- **CSS Moderno**: Variables CSS para theming dinámico

│   │   ├── AlphabetCarousel.astro     # Componente de carrusel

│   │   ├── AlphabetGrid.astro         # Componente de cuadrícula- **Lazy Loading**: Carga eficiente de recursosTo learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

│   │   ├── InfoPanel.astro            # Panel informativo

│   │   └── LetterCard.astro           # Tarjeta de letra

│   ├── layouts/

│   │   └── BaseLayout.astro           # Layout principal con SEO## 🛠️ Tecnologías Utilizadas## 🧞 Commands

│   └── pages/

│       └── index.astro                # Página principal

├── .github/

│   └── workflows/- **[Astro](https://astro.build)** - Framework web modernoAll commands are run from the root of the project, from a terminal:

│       └── deploy.yml                 # GitHub Actions workflow

├── astro.config.mjs                   # Configuración de Astro- **TypeScript** - Tipado estático

├── package.json

├── tsconfig.json- **View Transitions API** - Transiciones fluidas entre páginas| Command                   | Action                                           |

├── deploy.ps1                         # Script de deployment

├── DEPLOYMENT.md                      # Guía de publicación- **Web Speech API** - Síntesis de voz| :------------------------ | :----------------------------------------------- |

├── MEJORAS.md                         # Lista de mejoras

├── CONFIGURACION.md                   # Guía de personalización- **CSS Custom Properties** - Theming dinámico| `npm install`             | Installs dependencies                            |

└── README.md

```- **Google Fonts** - Tipografías Orbitron y Exo 2| `npm run dev`             | Starts local dev server at `localhost:4321`      |



## 🧞 Comandos| `npm run build`           | Build your production site to `./dist/`          |



| Comando                | Acción                                         |## 📦 Estructura del Proyecto| `npm run preview`         | Preview your build locally, before deploying     |

| :--------------------- | :--------------------------------------------- |

| `npm install`          | Instala dependencias                           || `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321` |

| `npm run build`        | Construye el sitio para producción en `./dist/` |```| `npm run astro -- --help` | Get help using the Astro CLI                     |

| `npm run preview`      | Previsualiza la build localmente               |

| `npm run astro ...`    | Ejecuta comandos CLI de Astro                  |/

| `.\deploy.ps1`         | Script para publicar en GitHub Pages           |

├── public/## 👀 Want to learn more?

## 🚀 Inicio Rápido

│   ├── favicon.svg

### Desarrollo Local

│   ├── scripts/Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

```bash

# Clonar el repositorio│   │   └── alphabet-sound-improved.js  # Sistema de audio mejorado

git clone https://github.com/Subkhht/Abecedario_Astro.git│   └── styles/

│       └── global.css                  # Estilos globales con theming

# Entrar al directorio├── src/

cd Abecedario_Astro│   ├── components/

│   │   ├── AlphabetCarousel.astro     # Componente de carrusel

# Instalar dependencias│   │   ├── AlphabetGrid.astro         # Componente de cuadrícula

npm install│   │   ├── InfoPanel.astro            # Panel informativo

│   │   └── LetterCard.astro           # Tarjeta de letra

# Iniciar servidor de desarrollo│   ├── layouts/

npm run dev│   │   └── BaseLayout.astro           # Layout principal con SEO

```│   └── pages/

│       └── index.astro                # Página principal

Abre http://localhost:4321 en tu navegador.├── astro.config.mjs

├── package.json

### Deployment en GitHub Pages├── tsconfig.json

└── README.md

Este proyecto está configurado para deployment automático en GitHub Pages.```



#### Opción 1: Script Automático (Windows)## 🧞 Comandos

```powershell

.\deploy.ps1| Comando                | Acción                                         |

```| :--------------------- | :--------------------------------------------- |

| `npm install`          | Instala dependencias                           |

#### Opción 2: Manual| `npm run dev`          | Inicia servidor de desarrollo en `localhost:4321` |

```bash| `npm run build`        | Construye el sitio para producción en `./dist/` |

# Agregar cambios| `npm run preview`      | Previsualiza la build localmente               |

git add .| `npm run astro ...`    | Ejecuta comandos CLI de Astro                  |



# Crear commit## 🎯 Mejoras Implementadas

git commit -m "Tu mensaje de commit"

### 1. **Arquitectura con Astro**

# Subir a GitHub- ✅ View Transitions API para navegación fluida

git push- ✅ Generación estática para máxima performance

```- ✅ Componentes modulares y reutilizables

- ✅ TypeScript para type safety

El sitio se actualizará automáticamente en **1-3 minutos**.

### 2. **SEO y Meta Tags**

📖 Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas.- ✅ Meta tags completos (Open Graph, Twitter Cards)

- ✅ Meta tag `generator` de Astro

## 🎯 Mejoras Implementadas- ✅ Descripciones y títulos optimizados

- ✅ Favicon SVG

### 1. **Arquitectura con Astro**

- ✅ View Transitions API para navegación fluida### 3. **Experiencia de Usuario**

- ✅ Generación estática para máxima performance- ✅ Dos vistas: Carrusel y Cuadrícula

- ✅ Componentes modulares y reutilizables- ✅ Tema claro/oscuro con localStorage

- ✅ TypeScript para type safety- ✅ Navegación con teclado (flechas, Home, End)

- ✅ Indicador de progreso (letra actual/total)

### 2. **SEO y Meta Tags**- ✅ Botones de navegación con estados disabled

- ✅ Meta tags completos (Open Graph, Twitter Cards)

- ✅ Meta tag `generator` de Astro### 4. **Accesibilidad (WCAG 2.1)**

- ✅ Descripciones y títulos optimizados- ✅ Roles ARIA apropiados

- ✅ Favicon SVG- ✅ Labels descriptivos

- ✅ Soporte para lectores de pantalla

### 3. **Experiencia de Usuario**- ✅ Focus visible y outline personalizado

- ✅ Dos vistas: Carrusel y Cuadrícula- ✅ Respeto a `prefers-reduced-motion`

- ✅ Tema claro/oscuro con localStorage

- ✅ Navegación con teclado (flechas, Home, End)### 5. **Diseño Responsivo**

- ✅ Indicador de progreso (letra actual/total)- ✅ Mobile-first approach

- ✅ Botones de navegación con estados disabled- ✅ Breakpoints: 480px, 768px, 1400px

- ✅ Grid adaptativo

### 4. **Accesibilidad (WCAG 2.1)**- ✅ Tipografía escalable

- ✅ Roles ARIA apropiados

- ✅ Labels descriptivos### 6. **Sistema de Audio**

- ✅ Soporte para lectores de pantalla- ✅ Clase `AlphabetSpeaker` con manejo de errores

- ✅ Focus visible y outline personalizado- ✅ Pronunciaciones especiales (Ñ, W, Y)

- ✅ Respeto a `prefers-reduced-motion`- ✅ Feedback visual cuando no hay audio

- ✅ Cancelación de audio anterior

### 5. **Diseño Responsivo**

- ✅ Mobile-first approach### 7. **Animaciones y Efectos**

- ✅ Breakpoints: 480px, 768px, 1400px- ✅ Transiciones suaves con cubic-bezier

- ✅ Grid adaptativo- ✅ Efectos de brillo (glow) con CSS

- ✅ Tipografía escalable- ✅ Animación de pulsación al hacer clic

- ✅ Transformaciones 3D suaves

### 6. **Sistema de Audio**

- ✅ Clase `AlphabetSpeaker` con manejo de errores### 8. **CSS Moderno**

- ✅ Pronunciaciones especiales (Ñ, W, Y)- ✅ Variables CSS para theming

- ✅ Feedback visual cuando no hay audio- ✅ Gradientes dinámicos

- ✅ Cancelación de audio anterior- ✅ Backdrop filters

- ✅ Scrollbar personalizada

### 7. **Animaciones y Efectos**- ✅ Custom selection colors

- ✅ Transiciones suaves con cubic-bezier

- ✅ Efectos de brillo (glow) con CSS## 🎨 Temas

- ✅ Animación de pulsación al hacer clic

- ✅ Transformaciones 3D suaves### Tema Oscuro (Default)

- Fondo: #0a0a14

### 8. **CSS Moderno**- Primario: #00f0ff (Cyan)

- ✅ Variables CSS para theming- Secundario: #ff00e6 (Magenta)

- ✅ Gradientes dinámicos- Acento: #7b00ff (Púrpura)

- ✅ Backdrop filters

- ✅ Scrollbar personalizada### Tema Claro

- ✅ Custom selection colors- Fondo: #f0f4f8

- Primario: #0088cc (Azul)

📖 Ver [MEJORAS.md](./MEJORAS.md) para más detalles.- Secundario: #cc0088 (Rosa)

- Acento: #5500cc (Violeta)

## 🎨 Temas

## 📱 Navegación

### Tema Oscuro (Default)

- Fondo: #0a0a14### Ratón/Touch

- Primario: #00f0ff (Cyan)- Click en letra: Centra y pronuncia

- Secundario: #ff00e6 (Magenta)- Botones ‹ ›: Navega letra por letra

- Acento: #7b00ff (Púrpura)

### Teclado

### Tema Claro- `←` `→`: Navega entre letras

- Fondo: #f0f4f8- `Home`: Primera letra

- Primario: #0088cc (Azul)- `End`: Última letra

- Secundario: #cc0088 (Rosa)- `Enter` / `Espacio`: Activa letra enfocada

- Acento: #5500cc (Violeta)- `Tab`: Navega entre elementos



## 📱 Navegación## 🌐 Navegadores Soportados



### Ratón/Touch- Chrome/Edge 90+

- Click en letra: Centra y pronuncia- Firefox 88+

- Botones ‹ ›: Navega letra por letra- Safari 14+

- 🎨 Vista: Cambia entre carrusel y cuadrícula- Opera 76+

- 🌙 Tema: Cambia entre claro y oscuro

## 📄 Licencia

### Teclado

- `←` `→`: Navega entre letrasEste proyecto es de código abierto y está disponible bajo la licencia MIT.

- `Home`: Primera letra

- `End`: Última letra## 🤝 Contribuciones

- `Enter` / `Espacio`: Activa letra enfocada

- `Tab`: Navega entre elementosLas contribuciones son bienvenidas. Por favor:

1. Fork el proyecto

## 🌐 Navegadores Soportados2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)

3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)

- ✅ Chrome/Edge 90+4. Push a la rama (`git push origin feature/AmazingFeature`)

- ✅ Firefox 88+5. Abre un Pull Request

- ✅ Safari 14+

- ✅ Opera 76+## 👨‍💻 Autor



## 📚 Documentación AdicionalDesarrollado con ❤️ y [Astro](https://astro.build)



- 📖 [DEPLOYMENT.md](./DEPLOYMENT.md) - Guía completa de publicación en GitHub Pages---

- 📖 [MEJORAS.md](./MEJORAS.md) - Resumen detallado de todas las mejoras

- 📖 [CONFIGURACION.md](./CONFIGURACION.md) - Personalización avanzada**¿Tienes sugerencias?** Abre un issue en GitHub o contribuye al proyecto.


## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ y [Astro](https://astro.build)

**GitHub:** [@Subkhht](https://github.com/Subkhht)

## 🙏 Agradecimientos

- [Astro](https://astro.build) - Por el increíble framework
- [Google Fonts](https://fonts.google.com) - Por las tipografías Orbitron y Exo 2
- Comunidad de desarrolladores web

---

⭐ Si te gusta este proyecto, dale una estrella en GitHub!

🌐 **[Ver Demo en Vivo](https://Subkhht.github.io/Abecedario_Astro/)**
