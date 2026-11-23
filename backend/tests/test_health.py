from unittest.mock import AsyncMock, MagicMock

import pytest
from httpx import AsyncClient

from app.db.session import get_db
from app.main import app


@pytest.mark.asyncio
async def test_root_endpoint(client: AsyncClient):
    """Test the root metadata endpoint."""
    response = await client.get("/")
    assert response.status_code == 200
    data = response.json()
    assert data["name"] == "Smart Shopping Guide"
    assert data["version"] == "1.0.0"
    assert "docs" in data
    assert "health" in data


@pytest.mark.asyncio
async def test_liveness_health_endpoint(client: AsyncClient):
    """Test GET /api/v1/health returns application metadata and healthy status."""
    response = await client.get("/api/v1/health")
    assert response.status_code == 200

    data = response.json()
    assert data == {
        "status": "healthy",
        "application": "Smart Shopping Guide",
        "version": "1.0.0",
    }


@pytest.mark.asyncio
async def test_readiness_endpoint_connected(client: AsyncClient):
    """Test GET /api/v1/health/ready returns 200 when database connectivity is verified."""
    mock_db = AsyncMock()
    mock_result = MagicMock()
    mock_result.scalar.return_value = 1
    mock_db.execute.return_value = mock_result

    async def override_get_db():
        yield mock_db

    app.dependency_overrides[get_db] = override_get_db

    try:
        response = await client.get("/api/v1/health/ready")
        assert response.status_code == 200
        data = response.json()
        assert data == {
            "status": "ready",
            "database": "connected",
        }
    finally:
        app.dependency_overrides.pop(get_db, None)


@pytest.mark.asyncio
async def test_readiness_endpoint_disconnected(client: AsyncClient):
    """Test GET /api/v1/health/ready returns 503 without leaking secrets when DB is down."""
    mock_db = AsyncMock()
    mock_db.execute.side_effect = ConnectionRefusedError(
        "Sensitive secret connection info: postgresql://smartshopping:change_me@localhost:5432"
    )

    async def override_get_db():
        yield mock_db

    app.dependency_overrides[get_db] = override_get_db

    try:
        response = await client.get("/api/v1/health/ready")
        assert response.status_code == 503
        data = response.json()
        assert data == {
            "status": "unavailable",
            "database": "disconnected",
        }
        # Explicitly verify no credential or stack leak
        assert "password" not in response.text.lower()
        assert "change_me" not in response.text
        assert "traceback" not in response.text.lower()
    finally:
        app.dependency_overrides.pop(get_db, None)
