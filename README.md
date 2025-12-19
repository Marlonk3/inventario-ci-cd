#MARLON JAIR AZUA BARRERA
# Proyecto de Implementación de CI/CD - Inventario


## Descripción del Proyecto

El sistema consta de dos componentes principales:
1.  **Backend:** API REST construida con Node.js y Express que gestiona un inventario de productos en memoria.
2.  **Frontend:** Aplicación web moderna construida con React y Vite para interactuar con la API.

El objetivo principal es demostrar la automatización de pruebas y despliegues simulados cada vez que se realizan cambios en el código.

## Estructura del Repositorio


inventario-ci-cd/
backend/            # API REST (Node.js + Express) 
frontend/           # Interfaz de Usuario (React + Vite)
.github/workflows/  # Flujos de automatización CI/CD 
README.md           # Documentación

## Instrucciones de Instalación y EjecuciónSigue estos pasos para levantar el proyecto en tu entorno local. Clonar el repositorioBashgit clone cd inventario-ci-cd
## Configurar el Backend (Puerto 3000)Desde la raíz del proyecto:
cd backend
npm install
npm start

- El servidor iniciará en: http://localhost:3000. Configurar el Frontend (Puerto 5173)Abre una nueva terminal y desde la raíz del proyecto:
cd frontend
npm install
npm run dev

-La aplicación web estará disponible en: http://localhost:5173. 
Ejecución de Pruebas (Testing) Este proyecto incluye pruebas unitarias y de integración para garantizar la calidad del código3. Para probar el Backend:
cd backend
npm test

- Valida la lógica del inventario y los endpoints de la API con Jest y Supertest.Para probar el Frontend:
cd frontend
npm test

- Valida el renderizado de componentes con Vitest5. Automatización con GitHub Actions (CI/CD)El repositorio cuenta con tres flujos de trabajo configurados en.github/workflows/:
  
  CI Backend (ci-backend.yml): Se ejecuta en cada push o PR a main. Instala dependencias y corre los tests del servidor.
  CI Frontend (ci-frontend.yml): Se ejecuta simultáneamente para verificar la compilación y pruebas de la interfaz web.
  Deploy Simulado (deploy.yml): Se activa automáticamente únicamente si los workflows de CI (Backend y Frontend) finalizan exitosamente. Simula la construcción y despliegue de artefactos.
