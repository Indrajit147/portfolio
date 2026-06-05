param(
  [string]$RemoteUrl = "https://github.com/Indrajit147/portfolio.git"
)

$ErrorActionPreference = "Stop"

if (-not (Test-Path -LiteralPath ".git")) {
  throw "Run this script from the portfolio repository root."
}

$currentBranch = git branch --show-current
if ($currentBranch -ne "main") {
  throw "Expected to publish from main, but current branch is '$currentBranch'."
}

$remote = git remote get-url origin 2>$null
if ($LASTEXITCODE -ne 0) {
  git remote add origin $RemoteUrl
} elseif ($remote -ne $RemoteUrl) {
  git remote set-url origin $RemoteUrl
}

git ls-remote origin *> $null
if ($LASTEXITCODE -ne 0) {
  throw "GitHub repository not found. Create https://github.com/Indrajit147/portfolio, then run this script again."
}

git push -u origin main

Write-Host ""
Write-Host "Published source to GitHub."
Write-Host "In GitHub, set Settings -> Pages -> Source to GitHub Actions."
Write-Host "Expected site URL: https://indrajit147.github.io/portfolio/"
