@echo off
setlocal

cd /d "%~dp0"

where pnpm >nul 2>nul
if errorlevel 1 (
	echo pnpm is not installed or not on PATH.
	exit /b 1
)

if not exist "node_modules\.pnpm" (
	echo Dependencies are missing. Installing...
	call pnpm install
	if errorlevel 1 exit /b 1
)

echo Starting development server...
call pnpm dev
