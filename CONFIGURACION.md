# ⚙️ Configuración Avanzada - Abecedario Interactivo

## 🎨 Personalización de Temas

### Modificar Colores del Tema Oscuro
Edita `public/styles/global.css` en `:root`:

```css
:root {
    --bg: #0a0a14;              /* Fondo principal */
    --bg-secondary: #0f0f23;     /* Fondo secundario */
    --primary: #00f0ff;          /* Color primario (cyan) */
    --secondary: #ff00e6;        /* Color secundario (magenta) */
    --accent: #7b00ff;           /* Color de acento (púrpura) */
    --text: #ffffff;             /* Color de texto */
}
```

### Modificar Colores del Tema Claro
Edita `public/styles/global.css` en `body.light-theme`:

```css
body.light-theme {
    --bg: #f0f4f8;
    --primary: #0088cc;
    --secondary: #cc0088;
    --accent: #5500cc;
    --text: #1a1a2e;
}
```

---

## 🔊 Configuración de Audio

### Cambiar Velocidad de Pronunciación
Edita `public/scripts/alphabet-sound-improved.js`:

```javascript
// Línea ~30
utterance.rate = 0.9;  // Cambiar a 0.7 (más lento) o 1.2 (más rápido)
utterance.pitch = 1.1; // Cambiar tono (0.1 a 2.0)
utterance.volume = 1.0; // Volumen (0.0 a 1.0)
```

### Agregar Más Pronunciaciones Especiales
```javascript
getSpanishPronunciation(letter) {
    const pronunciations = {
        'Ñ': 'eñe',
        'W': 'uve doble',
        'Y': 'i griega',
        'H': 'hache',  // Agregar más aquí
        'V': 'uve'
    };
    return pronunciations[letter] || letter.toLowerCase();
}
```

---

## 🎯 Personalización de Animaciones

### Modificar Velocidad de Transiciones
Edita `public/styles/global.css`:

```css
:root {
    --transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    /* Cambiar 0.3s a: */
    /* 0.2s = más rápido */
    /* 0.5s = más lento */
}
```

### Cambiar Efecto de Pulsación
Edita `src/pages/index.astro` en la sección de estilos:

```css
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { 
        transform: scale(1.15);  /* Cambiar escala */
        box-shadow: 0 0 40px rgba(0, 240, 255, 0.8);
    }
}
```

---

## 📱 Configuración Responsiva

### Modificar Breakpoints
Edita `src/pages/index.astro`:

```css
/* Mobile */
@media (max-width: 768px) { /* Cambiar a 640px o 1024px */ }

/* Small Mobile */
@media (max-width: 480px) { /* Ajustar según necesidad */ }
```

### Cambiar Tamaño de Letras en Móvil
```css
@media (max-width: 768px) {
    .letter {
        font-size: 2rem; /* Cambiar tamaño */
    }
}
```

---

## 🎨 Personalización de Vista

### Cambiar Número de Columnas en Grid
Edita `src/pages/index.astro`:

```css
.alphabet-grid {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    /* Cambiar 100px a: */
    /* 80px = más columnas */
    /* 120px = menos columnas */
}
```

### Modificar Espaciado del Carrusel
```css
.carousel-track {
    gap: 2.5rem; /* Cambiar espaciado entre letras */
}
```

---

## 🔧 Configuración de Navegación

### Cambiar Tamaño de Letras en Carrusel
Edita `src/pages/index.astro` en el script:

```typescript
const ITEM_WIDTH = 140; 
/* Ajustar según el tamaño de tus letras */
/* Debe coincidir con width + gap en CSS */
```

### Desactivar Auto-centrado
En el script de `index.astro`, comenta:

```typescript
// centerOnIndex(0); // Comentar esta línea
```

---

## 🎭 Agregar Más Letras o Caracteres

### Modificar el Abecedario
Edita `src/pages/index.astro`:

```typescript
const abecedario = "A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z".split(" ");
/* Agregar o quitar letras según necesidad */
/* Ejemplo con números: */
// const abecedario = "0 1 2 3 4 5 6 7 8 9".split(" ");
```

### Agregar Badges a Más Letras
```astro
{letra === "Ñ" && <span class="badge">ES</span>}
{letra === "W" && <span class="badge">EN</span>}
```

---

## 🌐 Configuración de SEO

### Modificar Meta Tags
Edita `src/layouts/BaseLayout.astro`:

```typescript
const defaultTitle = "Tu Título Aquí";
const defaultDescription = "Tu descripción aquí";
```

### Agregar Más Meta Tags
```html
<!-- Agregar en el <head> -->
<meta name="keywords" content="tus, palabras, clave" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://tu-dominio.com" />
```

---

## 🎵 Configuración de Feedback Háptico

### Modificar Duración de Vibración
Edita `public/scripts/alphabet-sound-improved.js`:

```javascript
if ('vibrate' in navigator) {
    navigator.vibrate(50); // Cambiar duración en ms
    // O patrón: navigator.vibrate([50, 100, 50]);
}
```

### Desactivar Vibración
```javascript
// Comentar o eliminar:
// if ('vibrate' in navigator) { ... }
```

---

## 📊 Configuración de Analytics

### Agregar Google Analytics
Edita `src/layouts/BaseLayout.astro`:

```html
<head>
    <!-- ... otros tags ... -->
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
    </script>
</head>
```

---

## 🚀 Optimización de Performance

### Precargar Fuentes
Edita `src/layouts/BaseLayout.astro`:

```html
<head>
    <!-- Preload fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
```

### Minificar CSS en Producción
El build de Astro ya minifica automáticamente.

---

## 🎨 Agregar Nuevas Vistas

### Ejemplo: Vista de Lista
Edita `src/pages/index.astro`:

```astro
<!-- Agregar nueva vista -->
<div id="list-view" class="view-container" hidden>
    <ul class="alphabet-list">
        {abecedario.map((letra) => (
            <li class="list-item" data-letra={letra}>
                {letra}
            </li>
        ))}
    </ul>
</div>
```

### Agregar CSS para la nueva vista
```css
.alphabet-list {
    list-style: none;
    padding: 2rem;
}

.list-item {
    padding: 1rem;
    font-size: 2rem;
    border-bottom: 1px solid var(--border-color);
    cursor: pointer;
    transition: var(--transition);
}

.list-item:hover {
    background: var(--hover-bg);
}
```

---

## 🔐 Configuración de Seguridad

### Content Security Policy
Agregar en `astro.config.mjs`:

```javascript
export default defineConfig({
    vite: {
        server: {
            headers: {
                'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline';"
            }
        }
    }
});
```

---

## 🌍 Internacionalización (i18n)

### Agregar Idiomas
Crear archivos de traducción:

```
src/
├── i18n/
│   ├── es.json  # Español
│   ├── en.json  # Inglés
│   └── fr.json  # Francés
```

---

## 📦 Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Subir carpeta dist/
```

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## 🐛 Debugging

### Activar Modo Verbose
En `public/scripts/alphabet-sound-improved.js`:

```javascript
const DEBUG = true; // Activar modo debug

if (DEBUG) {
    console.log('Letra clickeada:', letter);
}
```

### Ver Estado del Audio
```javascript
console.log('Speech Synthesis:', {
    supported: speaker.isSupported,
    speaking: speaker.isSpeaking
});
```

---

## 💡 Tips Avanzados

### 1. **PWA (Progressive Web App)**
Agregar `manifest.json` y service worker

### 2. **Dark Mode Auto**
Detectar preferencia del sistema:
```javascript
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // Aplicar tema oscuro
}
```

### 3. **Lazy Loading de Audio**
```javascript
// Cargar voces solo cuando se necesiten
speechSynthesis.getVoices();
```

---

**¿Necesitas más personalización?** Consulta la [documentación de Astro](https://docs.astro.build)
