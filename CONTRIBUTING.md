# Contributing to Smart Shopping Guide

Thank you for contributing to Smart Shopping Guide. This document outlines the development workflow, coding standards, and contribution guidelines.

---

## 1. Development Principles

- **Code Quality First**: All code must include tests, pass linting checks, and adhere to strict typing.
- **Safety**: Never commit credentials, secrets, `.env` files, or binary artifacts.
- **Modularity**: Follow the project's layered architectural conventions (separation of concerns between API, services, repositories, and models).
- **Consult Agent Guidelines**: Review [AGENTS.md](file:///c:/smart-shopping-guide/AGENTS.md) before implementing changes.

---

## 2. Git Branching & Commit Conventions

### Branch Naming
- Features: `feat/short-description`
- Bug fixes: `fix/short-description`
- Documentation: `docs/short-description`
- Infrastructure: `chore/short-description`

### Conventional Commits
All commit messages must follow the Conventional Commits specification:
- `feat: <summary>` for new features
- `fix: <summary>` for bug fixes
- `docs: <summary>` for documentation changes
- `chore: <summary>` for tooling, config, and infrastructure
- `test: <summary>` for adding or updating tests
- `ci: <summary>` for CI/CD changes

---

## 3. Pull Request Process

1. Ensure all local tests and linters pass:
   ```bash
   # Backend
   cd backend
   ruff check .
   pytest

   # Frontend
   cd frontend
   npm run lint
   npm test
   npm run build
   ```
2. Keep pull requests focused on a single logical scope.
3. Update documentation in `/docs` if your changes alter setup steps or architectural decisions.
4. Verify that CI workflows in GitHub Actions pass completely before requesting a review.
