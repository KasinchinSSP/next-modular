$apps = @("apps/web-a", "apps/web-b")
foreach ($app in $apps) {
  Copy-Item -Path ".\.env.shared" -Destination "$app\.env.local" -Force
  Write-Host "Synced to $app\.env.local"
}