# Smart Shopping Guide

> **One Platform. Every City. Every Local Shop.**

Smart Shopping Guide is a modern local commerce discovery platform that connects shoppers with nearby physical stores. The platform allows users to explore neighborhood businesses, compare prices, check real-time stock availability, and support local retailers with confidence.

---

## 1. Project Vision & Description

Modern consumers frequently turn to major online marketplaces simply because discovering what nearby local stores have in stock at what price has traditionally been fragmented and opaque. Smart Shopping Guide bridges this gap by providing a fast, trustworthy, and transparent local commerce search engine. 

Phase 1 establishes the rock-solid monorepo foundation, setting up a typed Next.js frontend, an asynchronous FastAPI backend, a PostgreSQL persistence engine with Alembic migrations, Docker infrastructure, and comprehensive CI automation.

---

## 2. Technology Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Library**: React 19 / TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Testing**: Vitest & React Testing Library

### Backend
- **Framework**: FastAPI (Python 3.11+)
- **Validation**: Pydantic v2 & `pydantic-settings`
- **Database ORM**: SQLAlchemy 2.0 (Async)
- **Database Driver**: `asyncpg`
- **Migrations**: Alembic
- **Testing**: Pytest, Pytest-Asyncio, HTTPX
- **Linting & Formatting**: Ruff

### Infrastructure & Operations
- **Database**: PostgreSQL 16 (Alpine)
- **Containerization**: Docker & Docker Compose
- **CI/CD**: GitHub Actions

---

## 3. High-Level Architecture

```
                  ┌────────────────────────┐
                  │   Next.js Frontend     │
                  │ (React / TypeScript)   │
                  │      Port: 3000        │
                  └───────────┬────────────┘
                              │ HTTP Requests
                              │ (/api/v1/*)
                              ▼
                  ┌────────────────────────┐
                  │    FastAPI Backend     │
                  │  (Async Python 3.11+)  │
                  │      Port: 8000        │
                  └───────────┬────────────┘
                              │ Async Connections
                              │ (SQLAlchemy + asyncpg)
                              ▼
                  ┌────────────────────────┐
                  │  PostgreSQL Database   │
                  │      Port: 5432        │
                  └────────────────────────┘
```

---

## 4. Folder Structure

```text
smart-shopping-guide/
├── .github/
│   └── workflows/
│       └── ci.yml               # GitHub Actions CI workflow
├── backend/
│   ├── app/
│   │   ├── api/v1/              # API endpoints and health routes
│   │   ├── core/                # App configuration and logging
│   │   ├── db/                  # Database session and base model
│   │   ├── models/              # SQLAlchemy ORM models
│   │   ├── schemas/             # Pydantic data schemas
│   │   ├── services/            # Business logic
│   │   └── repositories/        # Database access layer
│   ├── migrations/              # Alembic migration scripts
│   ├── tests/                   # Pytest automated test suite
│   ├── alembic.ini              # Alembic migration config
│   ├── pyproject.toml           # Backend dependencies and tool configs
│   ├── requirements.txt         # Pinned backend dependencies
│   ├── Dockerfile               # Backend container recipe
│   └── .dockerignore            # Docker ignore patterns
├── frontend/
│   ├── src/
│   │   ├── app/                 # Next.js App Router (pages & layouts)
│   │   ├── components/          # UI & layout components
│   │   ├── config/              # Centralized frontend config
│   │   ├── lib/                 # API client and utility helpers
│   │   └── types/               # TypeScript interfaces
│   ├── tests/                   # Frontend automated tests
│   ├── package.json             # Frontend dependencies and scripts
│   └── tsconfig.json            # TypeScript configuration
├── docs/
│   ├── development-setup.md     # In-depth setup instructions
│   └── phase-1-architecture.md  # Architectural specification
├── infrastructure/              # Infrastructure and deployment scripts
├── docker-compose.yml           # Local multi-service orchestration
├── .env.example                 # Baseline environment configuration
├── .gitignore                   # Git exclusion rules
├── AGENTS.md                    # AI agent and development guidelines
├── CONTRIBUTING.md              # Contribution guidelines
└── README.md                    # Project documentation
```

---

## 5. Prerequisites

Before starting, ensure you have installed:
- **Node.js**: v20+ (v22 recommended)
- **npm**: v10+
- **Python**: v3.11+
- **Git**
- **Docker & Docker Compose**: (Optional for local containerized PostgreSQL)

---

## 6. Environment Setup

Copy the example environment file:
```bash
cp .env.example .env
```
Default development values are preconfigured for local execution.

---

## 7. Database & Docker Instructions

To start PostgreSQL 16 using Docker Compose:
```bash
docker compose up -d postgres
```
This runs PostgreSQL on port `5432` with a persistent volume named `postgres_data`.

To check logs:
```bash
docker compose logs -f postgres
```

To stop containers:
```bash
docker compose down
```

---

## 8. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a Python virtual environment:
   ```bash
   python -m venv .venv
   # Windows PowerShell
   .\.venv\Scripts\Activate.ps1
   # macOS/Linux
   source .venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run migrations:
   ```bash
   alembic upgrade head
   ```
5. Start the backend development server:
   ```bash
   uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
   ```
6. Access API endpoints:
   - Documentation: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health check: [http://localhost:8000/api/v1/health](http://localhost:8000/api/v1/health)
   - Database readiness check: [http://localhost:8000/api/v1/health/ready](http://localhost:8000/api/v1/health/ready)

---

## 9. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Next.js development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 10. Testing

### Run Backend Tests
```bash
cd backend
pytest
ruff check .
```

### Run Frontend Tests & Linting
```bash
cd frontend
npm test
npm run lint
npm run build
```

---

## 11. Troubleshooting

- **Database Connection Error (`ECONNREFUSED` / `could not connect to server`)**:
  Ensure PostgreSQL is running either via `docker compose up -d postgres` or your local PostgreSQL service, and that port 5432 is accessible.
- **Port Conflicts**:
  If port 8000 or 3000 is occupied, adjust the ports in `uvicorn` or Next.js and update `FRONTEND_URL` and `NEXT_PUBLIC_API_URL` in `.env`.
- **CORS Issues**:
  Ensure `FRONTEND_URL` in backend `.env` matches your frontend address (`http://localhost:3000`).

---

## 12. Current Development Phase

- **Phase 1: Project Foundation & Infrastructure** (In Progress / Current)
- **Phase 2: Authentication & User Accounts** (Upcoming)
- **Phase 3: Shop & Retailer Management** (Upcoming)
- **Phase 4: Product Catalog & Local Inventory** (Upcoming)
- **Phase 5: Search & Price Comparison Engine** (Upcoming)
