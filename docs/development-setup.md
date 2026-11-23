# Development Setup Guide

This guide details how to set up the local development environment for Smart Shopping Guide.

---

## 1. Prerequisites

Ensure you have the following installed on your host machine:
- **Node.js**: v20 or later (v22 recommended)
- **Python**: v3.11 or later (v3.13 supported)
- **Docker & Docker Compose**: (Optional for local PostgreSQL container, or install PostgreSQL locally)
- **Git**

---

## 2. Environment Configuration

Copy the root environment example file:
```bash
cp .env.example .env
```
Key configuration values:
- `POSTGRES_DB`: Database name (`smart_shopping_guide`)
- `POSTGRES_USER`: Database user (`smartshopping`)
- `POSTGRES_PASSWORD`: Database password (`change_me`)
- `DATABASE_URL`: Asynchronous connection string (`postgresql+asyncpg://smartshopping:change_me@localhost:5432/smart_shopping_guide`)
- `NEXT_PUBLIC_API_URL`: Frontend API target (`http://localhost:8000/api/v1`)

---

## 3. Database Setup

### Option A: Via Docker Compose
```bash
docker compose up -d postgres
```
This spins up PostgreSQL 16 Alpine with persistent storage in the `postgres_data` volume and built-in healthchecks.

### Option B: Local PostgreSQL Service
If Docker is not installed, install PostgreSQL 16 locally, start the service, create the database `smart_shopping_guide`, and update `.env` credentials accordingly.

---

## 4. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv .venv
   .\.venv\Scripts\Activate.ps1

   # Linux/macOS
   python3 -m venv .venv
   source .venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run database migrations:
   ```bash
   alembic upgrade head
   ```
5. Start the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
6. Access interactive API documentation:
   - Swagger UI: [http://localhost:8000/docs](http://localhost:8000/docs)
   - ReDoc: [http://localhost:8000/redoc](http://localhost:8000/redoc)
   - Health Probe: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)
   - DB Readiness: [http://localhost:8000/api/v1/health/ready](http://localhost:8000/api/v1/health/ready)

---

## 5. Frontend Setup

1. Open a separate terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create local frontend environment if customizing API endpoint:
   ```bash
   cp .env.example .env.local
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open your browser at [http://localhost:3000](http://localhost:3000).

---

## 6. Running Tests & Quality Checks

### Backend Quality Checks
```bash
cd backend
ruff check .
pytest
```

### Frontend Quality Checks
```bash
cd frontend
npm run lint
npm test
npm run build
```
