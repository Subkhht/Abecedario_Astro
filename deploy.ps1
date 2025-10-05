# Script de Deployment para GitHub Pages
# Ejecuta este script para publicar cambios

Write-Host "🚀 Iniciando proceso de deployment..." -ForegroundColor Cyan
Write-Host ""

# Verificar cambios
Write-Host "📝 Verificando cambios..." -ForegroundColor Yellow
git status
Write-Host ""

# Agregar todos los archivos
Write-Host "➕ Agregando archivos..." -ForegroundColor Yellow
git add .

# Pedir mensaje de commit
Write-Host ""
$commitMessage = Read-Host "💬 Ingresa un mensaje para el commit (o presiona Enter para usar mensaje por defecto)"
if ([string]::IsNullOrWhiteSpace($commitMessage)) {
    $commitMessage = "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

# Hacer commit
Write-Host ""
Write-Host "💾 Creando commit..." -ForegroundColor Yellow
git commit -m $commitMessage

# Push a GitHub
Write-Host ""
Write-Host "☁️  Subiendo cambios a GitHub..." -ForegroundColor Yellow
git push

Write-Host ""
Write-Host "✅ ¡Deployment iniciado!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 El sitio se actualizará en 1-3 minutos" -ForegroundColor Cyan
Write-Host "🌐 URL: https://Subkhht.github.io/Abecedario_Astro/" -ForegroundColor Cyan
Write-Host ""
Write-Host "👀 Monitorea el progreso en:" -ForegroundColor Yellow
Write-Host "   https://github.com/Subkhht/Abecedario_Astro/actions" -ForegroundColor White
Write-Host ""
