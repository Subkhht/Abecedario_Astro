# 🚀 Guía de Publicación en GitHub Pages

Esta guía te ayudará a publicar tu aplicación Abecedario Interactivo en GitHub Pages.

## 📋 Pre-requisitos

- ✅ Cuenta de GitHub
- ✅ Git instalado en tu computadora
- ✅ Repositorio creado (puede ser nuevo o existente)

## 🔧 Configuración Completada

Los siguientes archivos ya están configurados:

1. ✅ `astro.config.mjs` - Configurado con site y base correctos
2. ✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions
3. ✅ `.gitignore` - Archivos a ignorar

## 📝 Pasos para Publicar

### 1. Inicializar Git (si aún no lo has hecho)

```bash
git init
git add .
git commit -m "Initial commit: Abecedario Interactivo completo"
```

### 2. Conectar con GitHub

#### Opción A: Repositorio Nuevo
```bash
# Crear repositorio en GitHub con el nombre: Abecedario_Astro
# Luego ejecutar:
git remote add origin https://github.com/Subkhht/Abecedario_Astro.git
git branch -M main
git push -u origin main
```

#### Opción B: Repositorio Existente
```bash
git remote add origin https://github.com/Subkhht/Abecedario_Astro.git
git branch -M main
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, selecciona **Pages**
4. En **Source** (Origen), selecciona:
   - **Source**: GitHub Actions (no "Deploy from a branch")
5. Guarda los cambios

### 4. Activar el Workflow

El workflow se ejecutará automáticamente cuando hagas push a la rama `main`.

También puedes ejecutarlo manualmente:
1. Ve a la pestaña **Actions** en tu repositorio
2. Selecciona el workflow "Deploy to GitHub Pages"
3. Haz clic en **Run workflow**

### 5. Verificar el Deployment

1. Ve a la pestaña **Actions**
2. Verás el workflow ejecutándose
3. Espera a que termine (toma 1-3 minutos)
4. Una vez completado, tu sitio estará disponible en:

   ```
   https://Subkhht.github.io/Abecedario_Astro/
   ```

## 🔄 Actualizaciones Futuras

Para publicar cambios futuros:

```bash
# 1. Hacer cambios en tu código
# 2. Guardar y hacer commit
git add .
git commit -m "Descripción de los cambios"
git push

# 3. El deployment se ejecutará automáticamente
```

## 🐛 Solución de Problemas

### Error: "Permission denied"
```bash
# Usar SSH en lugar de HTTPS
git remote set-url origin git@github.com:Subkhht/Abecedario_Astro.git
```

### Error: "Pages not enabled"
1. Ve a Settings → Pages
2. Asegúrate de que **Source** esté en "GitHub Actions"
3. NO selecciones una rama específica

### Error: "Build failed"
```bash
# Verificar que el build funciona localmente
npm run build

# Si funciona, hacer push de nuevo
git push
```

### Error: "404 Not Found" al visitar el sitio
1. Verifica que la configuración en `astro.config.mjs` sea correcta:
   ```javascript
   site: 'https://Subkhht.github.io',
   base: '/Abecedario_Astro',
   ```
2. Asegúrate de que el workflow haya terminado exitosamente

### Los estilos no se cargan correctamente
Esto ya está solucionado con la configuración `base` en `astro.config.mjs`

## 📊 Verificar el Status del Deployment

### En la Terminal:
```bash
git status  # Ver cambios pendientes
git log     # Ver historial de commits
```

### En GitHub:
1. **Actions tab**: Ver el progreso del workflow
2. **Environments**: Ver deployments activos
3. **Settings → Pages**: Ver la URL de tu sitio

## 🎯 URL Final

Una vez publicado, tu sitio estará disponible en:

**🌐 https://Subkhht.github.io/Abecedario_Astro/**

## 📱 Compartir tu Sitio

Puedes compartir la URL directamente. El sitio es:
- ✅ Responsivo (funciona en móviles)
- ✅ Accesible
- ✅ Rápido (generación estática)
- ✅ SEO optimizado

## 🔐 Privacidad

Si quieres hacer el repositorio privado pero mantener el sitio público:
1. Settings → General
2. Sección "Danger Zone"
3. "Change repository visibility" → Private
4. El sitio seguirá siendo público en GitHub Pages

## 📈 Siguiente Nivel

### Dominio Personalizado (Opcional)
1. Compra un dominio (ejemplo: tudominio.com)
2. En Settings → Pages → Custom domain
3. Agrega tu dominio
4. Configura los DNS según las instrucciones

### Analytics (Opcional)
Ya tienes configurado el código para agregar Google Analytics en `BaseLayout.astro`

## 🆘 Comandos Rápidos

```bash
# Ver estado
git status

# Agregar todos los cambios
git add .

# Hacer commit
git commit -m "Mensaje descriptivo"

# Subir cambios
git push

# Ver remotes
git remote -v

# Ver branches
git branch

# Ver últimos commits
git log --oneline -5
```

## ✨ Consejos

1. **Commits frecuentes**: Haz commits pequeños y descriptivos
2. **Branch protection**: Considera proteger la rama `main` en producción
3. **Pre-commit hooks**: Puedes agregar validaciones antes de hacer commit
4. **Caché**: GitHub Pages tiene caché, puede tardar unos minutos en actualizar

## 📞 Soporte

Si tienes problemas:
1. Revisa los logs en la pestaña **Actions**
2. Verifica la configuración en **Settings → Pages**
3. Consulta la [documentación de Astro](https://docs.astro.build/en/guides/deploy/github/)
4. Consulta la [documentación de GitHub Pages](https://docs.github.com/en/pages)

---

**¡Listo!** 🎉 Tu sitio estará en línea en pocos minutos.
