# Time Bank Experience Platform

## Visión General
Este proyecto fue creado como parte del Taller AiBirras sobre "Cómo crear un MVP utilizando IA". La Time Bank Experience Platform es una solución innovadora diseñada para abordar los desafíos del turismo sostenible en Granada, España, una ciudad Patrimonio de la Humanidad de la UNESCO.

## 🎯 Objetivo
Desarrollar una plataforma que conecte a turistas con proveedores locales de experiencias, distribuyendo el flujo turístico de manera más equitativa y sostenible en Granada.

## 💡 Validación de Ideas
Como parte del proceso de desarrollo, se realizó una validación de ideas utilizando técnicas de IA. El proceso incluyó:

1. Generación de tres ideas principales para solucionar problemas de turismo.
2. Creación de anuncios para cada idea.
3. Evaluación de las ideas por personas simuladas utilizando la biblioteca TinyTroupe.
4. Análisis de los resultados para determinar la idea ganadora.

**Idea Ganadora: Banco de Tiempo Descentralizado para Experiencias**

Esta idea propone una plataforma P2P donde los turistas intercambian experiencias limitadas en el tiempo, utilizando IA para emparejar oferta y demanda, contratos inteligentes para gestionar créditos de tiempo, y vistas previas en RV de experiencias.

## 🏗 Estructura del Proyecto
El proyecto consta de los siguientes componentes:

1. **Plan de Negocio**: Documento detallado que describe la estrategia de implementación del MVP en Granada.
2. **Frontend**: Aplicación web desarrollada con React y Material-UI.
3. **Backend**: Servicio API construido con FastAPI y PostgreSQL.
4. **Notebooks**: Jupyter notebooks para la validación de ideas y análisis de datos.

## 📁 Estructura de Archivos
- `ai-workshop/data/bp.md`: Plan de negocio
- `ai-workshop/frontend/`: Código del frontend
- `ai-workshop/backend/`: Código del backend
- `ai-workshop/notebooks/ideas-validation.ipynb`: Notebook de validación de ideas
- `ai-workshop/data/top-3-ideas.csv`: CSV con las tres ideas principales

## 💼 Plan de Negocio
- **Ubicación**: `ai-workshop/data/bp.md`
- **Aspectos Clave**:
  - Análisis del mercado de Granada
  - Estrategia de implementación del MVP
  - Proyecciones financieras
  - Análisis de riesgos

## 🖥 Frontend
- **Ubicación**: `ai-workshop/frontend/`
- **Tecnologías**: React, Material-UI, Redux Toolkit
- **Características**:
  - Interfaz de usuario intuitiva y responsive
  - Gestión de experiencias y reservas
  - Integración de mapas y pagos

## 🛠 Backend
- **Ubicación**: `ai-workshop/backend/`
- **Tecnologías**: FastAPI, PostgreSQL, SQLAlchemy
- **Características**:
  - API RESTful
  - Autenticación y autorización
  - Gestión de base de datos
  - Integración con servicios externos (pagos, correo, almacenamiento)

## 🚀 Comenzando

### Requisitos Previos
- Node.js v18+
- Python 3.11+
- PostgreSQL 16
- Redis

### Configuración del Entorno
1. Clonar el repositorio
2. Configurar las variables de entorno en archivos `.env` para frontend y backend
3. Instalar dependencias:

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
poetry install
```

### Ejecucion

1. Iniciar el backend:

```bash
cd backend
uvicorn app.main:app --reload
```

2. Iniciar el frontend:

```bash
cd frontend
npm start
```

## 📚 Documentación
- Frontend: Accesible en `/frontend/README.md`
- Backend: Accesible en `/backend/README.md`
- API: Disponible en `http://localhost:8000/redoc` una vez iniciado el backend

## 🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor, abra un issue o realice un pull request para sugerir cambios o mejoras.

## 📝 Licencia
Este proyecto está bajo la Licencia MIT. 
---

Desarrollado con ❤️ en el Taller [AiBirras](https://aibirras.com/)
