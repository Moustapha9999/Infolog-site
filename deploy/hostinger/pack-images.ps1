# Construit les images Docker ici, puis les envoie sur le VPS si le VPS a trop peu de RAM.
Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"
Set-Location (Join-Path $PSScriptRoot "..\..")

docker compose build web nginx
docker save infolog-web infolog-nginx | gzip > infolog-images.tar.gz
Get-Item infolog-images.tar.gz | Select-Object FullName, Length
Write-Host @"

Envoyer :
  scp infolog-images.tar.gz root@IP_DU_VPS:/opt/infolog/

Sur le VPS :
  bash deploy/hostinger/load-images.sh
  SKIP_BUILD=1 bash deploy/hostinger/deploy.sh
"@
