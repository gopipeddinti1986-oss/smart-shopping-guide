"""Initial schema baseline.

Revision ID: 0001_initial_schema
Revises:
Create Date: 2026-11-23 08:00:00.000000

"""
from collections.abc import Sequence

# revision identifiers, used by Alembic.
revision: str = "0001_initial_schema"
down_revision: str | None = None
branch_labels: str | Sequence[str] | None = None
depends_on: str | Sequence[str] | None = None


def upgrade() -> None:
    """Apply schema migrations."""
    # Phase 1 baseline schema definition.
    # Future entity tables (users, shops, products, prices) will be migrated in subsequent phases.
    pass


def downgrade() -> None:
    """Revert schema migrations."""
    pass
