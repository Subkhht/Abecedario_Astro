# 🚀 PASOS PARA PUBLICAR EN GITHUB PAGES

## ✅ Configuración Completada

Los siguientes archivos ya están listos:

1. ✅ **astro.config.mjs** - Configurado con:
   - `site: 'https://Subkhht.github.io'`
   - `base: '/Abecedario_Astro'`

2. ✅ **.github/workflows/deploy.yml** - Workflow de GitHub Actions listo

3. ✅ **deploy.ps1** - Script de deployment automático

4. ✅ **README.md** - Documentación completa

5. ✅ **DEPLOYMENT.md** - Guía detallada de publicación

---

## 🎯 OPCIÓN 1: Deployment Rápido (Recomendado)

### Ejecuta este comando:

```powershell
.\deploy.ps1
```

El script te pedirá un mensaje de commit y hará todo automáticamente.

---

## 🎯 OPCIÓN 2: Paso a Paso Manual

### 1. Agregar Todos los Archivos
```powershell
git add .
```

### 2. Crear Commit
```powershell
git commit -m "Configure GitHub Pages deployment"
```

### 3. Subir a GitHub
```powershell
git push
```

### 4. Configurar GitHub Pages (IMPORTANTE)

1. Ve a tu repositorio en GitHub:
   **https://github.com/Subkhht/Abecedario_Astro**

2. Clic en **Settings** (Configuración)

3. En el menú lateral izquierdo, busca y clic en **Pages**

4. En la sección **"Build and deployment"**:
   - **Source**: Selecciona **"GitHub Actions"**
   - NO selecciones "Deploy from a branch"

5. Guarda (si es necesario)

### 5. Esperar el Deployment

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera 1-3 minutos

### 6. ¡Listo!

Tu sitio estará disponible en:
**https://Subkhht.github.io/Abecedario_Astro/**

---

## 🔍 Verificar el Progreso

### En GitHub:
1. **Actions** tab → Ver workflow ejecutándose
2. ✅ Verde = Éxito
3. ❌ Rojo = Error (revisar logs)

### En la Terminal:
```powershell
git log --oneline -5  # Ver últimos commits
git remote -v         # Ver repositorio remoto
```

---

## 🐛 Solución Rápida de Problemas

### Si el workflow falla:
1. Ve a Actions → Click en el workflow fallido
2. Lee el error en los logs
3. Común: Verificar que Settings → Pages → Source esté en "GitHub Actions"

### Si ves 404:
1. Espera 2-3 minutos más
2. Verifica que el workflow haya terminado exitosamente
3. Limpia caché del navegador (Ctrl + F5)

### Si los estilos no cargan:
✅ Ya está solucionado con la configuración `base` en `astro.config.mjs`

---

## 📊 Comandos Útiles

```powershell
# Ver estado de git
git status

# Ver diferencias
git diff

# Ver historial de commits
git log --oneline -10

# Cancelar cambios (CUIDADO)
git restore <archivo>

# Ver branches
git branch

# Ver remotes
git remote -v
```

---

## 🔄 Para Futuras Actualizaciones

Cada vez que hagas cambios:

### Opción A: Script automático
```powershell
.\deploy.ps1
```

### Opción B: Manual
```powershell
git add .
git commit -m "Descripción de cambios"
git push
```

El sitio se actualizará automáticamente en 1-3 minutos.

---

## 📱 URL Final

Una vez publicado:
🌐 **https://Subkhht.github.io/Abecedario_Astro/**

---

## ✨ Características del Deployment

✅ **Automático**: Cada push a `main` actualiza el sitio
✅ **Rápido**: 1-3 minutos de deployment
✅ **Gratuito**: GitHub Pages es gratis
✅ **HTTPS**: Certificado SSL automático
✅ **CDN**: Distribución global rápida

---

## 🎉 ¡Siguiente Paso!

**EJECUTA AHORA:**

```powershell
.\deploy.ps1
```

O manualmente:

```powershell
git add .
git commit -m "Configure GitHub Pages deployment"
git push
```

Luego ve a: **Settings → Pages → Source → GitHub Actions**

---

**¡Tu sitio estará en línea en minutos!** 🚀
