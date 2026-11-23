# Smart Shopping Guide — AI Developer & Agent Guidelines

## 1. Project Overview & Vision
Smart Shopping Guide is a modern, transparent local commerce discovery platform designed to connect consumers with local brick-and-mortar stores.
- **Brand Tagline**: *One Platform. Every City. Every Local Shop.*
- **Core Mission**: Allow shoppers to discover neighborhood stores, compare prices, verify product availability, and shop locally with confidence.
- **Current Milestone**: Phase 1 — Project Foundation & Development Infrastructure.

---

## 2. Approved Technology Stack

### Frontend
- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript (Strict mode enabled)
- **Styling**: Tailwind CSS (Mobile-first, standard color variables)
- **Icons**: Lucide React
- **HTTP Client**: Centralized native `fetch` client with type-safe response wrappers

### Backend
- **Framework**: FastAPI (Python 3.11+)
- **Data Validation & Settings**: Pydantic v2 & `pydantic-settings`
- **ORM & Database Toolkit**: SQLAlchemy 2.0+ (Async engine via `asyncpg`)
- **Database Migrations**: Alembic
- **Testing**: Pytest, Pytest-Asyncio, HTTPX
- **Linter & Formatter**: Ruff

### Infrastructure & Database
- **Database**: PostgreSQL 16 (Alpine)
- **Containerization**: Docker & Docker Compose
- **Continuous Integration**: GitHub Actions

---

## 3. Monorepo Directory Conventions
```text
smart-shopping-guide/
├── .github/              # GitHub Actions workflows & issue templates
├── backend/              # FastAPI application & Alembic migrations
│   ├── app/
│   │   ├── api/v1/       # Versioned API routes & endpoints
│   │   ├── core/         # Settings, logging, security configs
│   │   ├── db/           # Async database session & base model
│   │   ├── models/       # SQLAlchemy ORM models
│   │   ├── schemas/      # Pydantic schemas (Request/Response)
│   │   ├── services/     # Business logic layer
│   │   └── repositories/ # Data access abstraction layer
│   ├── migrations/       # Alembic migration scripts
│   └── tests/            # Pytest test suite
├── frontend/             # Next.js App Router application
│   ├── src/
│   │   ├── app/          # App router pages, layouts, and error boundaries
│   │   ├── components/   # UI components (layout, shared, ui primitives)
│   │   ├── features/     # Feature-oriented component groupings
│   │   ├── hooks/        # Reusable React hooks
│   │   ├── lib/          # Centralized API client, utilities, constants
│   │   ├── types/        # TypeScript interfaces & types
│   │   └── config/       # Environment & client runtime config
│   └── tests/            # Frontend unit and component tests
├── docs/                 # Architectural specifications and developer guides
├── infrastructure/       # Container manifests and deployment configs
├── scripts/              # Helper developer scripts
├── docker-compose.yml    # Local services orchestration
└── .env.example          # Baseline environment template
```

---

## 4. Backend Architecture Standards
1. **Separation of Concerns**: Never place domain logic directly inside route handlers. Routes handle HTTP parameters, invoke service methods, and return validated Pydantic schemas.
2. **Asynchronous I/O**: Use `async`/`await` for all database interactions and I/O operations via `AsyncSession`.
3. **No Hardcoded Secrets**: Settings must be read through `app.core.config.get_settings()` utilizing `pydantic-settings`.
4. **Structured Logging**: Use `app.core.logging` to emit structured log records. Never use bare `print()` statements.
5. **Safe Error Handling**: Return proper HTTP status codes. Never leak raw SQL errors, stack traces, or credentials in response payloads.
6. **Health Endpoints**:
   - `GET /api/v1/health`: Liveness probe returning application metadata.
   - `GET /api/v1/health/ready`: Readiness probe verifying live database connectivity.

---

## 5. Frontend Architecture & Design Standards

### Design System & Theme
- **Primary Emerald**: `#059669` (Dark: `#047857`, Light: `#D1FAE5`)
- **Background**: `#FAFAFA`
- **Surface**: `#FFFFFF`
- **Text**: Slate/Neutral (`#0F172A`, `#334155`, `#64748B`)
- **Typography**: Geist or Inter sans-serif font family.

### Rules
- **Clean Aesthetic**: Modern, minimalist, trustworthy startup feel. No gratuitous glassmorphism, aggressive neon gradients, or artificial stats.
- **Mobile First**: All layouts must be responsive across viewport sizes.
- **Semantic HTML & Accessibility**: Proper use of `<header>`, `<main>`, `<nav>`, `<footer>`, `<form>`, search input attributes (`enterKeyHint="search"`, IME composition awareness), and accessible color contrast.
- **Centralized API Communication**: Never invoke raw `fetch` across components. Use `src/lib/api/client.ts`.

---

## 6. Security & Secrets Management
- Never commit `.env` or any production secret keys to version control.
- Validate that `.gitignore` prevents leaks of credentials, virtual environments, build output, and local database artifacts.
- CORS must be explicitly configured to restrict origins in production.
- Sanitize inputs and employ parameterized queries via SQLAlchemy ORM.

---

## 7. Testing Requirements
- Every new endpoint or feature requires corresponding automated tests.
- Backend tests must run via `pytest` and execute without requiring an external production database.
- Frontend tests must verify component rendering, accessibility, and loading/error states.
- Code quality checks must pass:
  - Backend: `ruff check .`
  - Frontend: `npm run lint` and `npm run build`

---

## 8. Git Workflow & Safety Guidelines
- Use conventional commit messages: `feat:`, `fix:`, `chore:`, `docs:`, `test:`, `ci:`.
- Stage only logical sets of files; verify `git status` and `git diff` before committing.
- Push clean, functional milestones.

### Strictly Prohibited Destructive Commands
Never execute the following destructive operations:
- `git push --force` or `git push -f`
- `git reset --hard`
- `git clean -fd`
- `git branch -D`
- Deleting existing user code or history without explicit permission.

---

## 9. AI Agent Implementation Workflow
1. **Analyze First**: Inspect repository state and confirm branch and remote configuration before taking action.
2. **Consult Modern Guidelines**: Check modern web and API design standards.
3. **Execute Incrementally**: Write code, write tests, verify execution locally, stage, commit, and push in logical units.
4. **Transparent Reporting**: Present clear facts on passed/failed tests, exact commit hashes, and system statuses.
