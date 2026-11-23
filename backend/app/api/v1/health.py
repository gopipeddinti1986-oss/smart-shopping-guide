import logging

from fastapi import APIRouter, Depends, status
from fastapi.responses import JSONResponse
from sqlalchemy import text
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import Settings, get_settings
from app.db.session import get_db
from app.schemas.health import HealthResponse, ReadyResponse

logger = logging.getLogger("smart_shopping_guide.health")

router = APIRouter()


@router.get(
    "",
    response_model=HealthResponse,
    status_code=status.HTTP_200_OK,
    summary="Application Liveness Check",
    description="Returns application health status, name, and version.",
)
async def get_health(
    settings: Settings = Depends(get_settings),
) -> HealthResponse:
    """Liveness probe confirming the API service is running."""
    return HealthResponse(
        status="healthy",
        application=settings.APP_NAME,
        version=settings.APP_VERSION,
    )


@router.get(
    "/ready",
    response_model=ReadyResponse,
    status_code=status.HTTP_200_OK,
    responses={
        503: {
            "description": "Database connectivity unavailable",
            "model": ReadyResponse,
        }
    },
    summary="Application Readiness Check",
    description="Verifies database connectivity with non-leaking error responses.",
)
async def get_readiness(
    db: AsyncSession = Depends(get_db),
) -> ReadyResponse | JSONResponse:
    """Readiness probe verifying live database connection."""
    try:
        result = await db.execute(text("SELECT 1"))
        scalar = result.scalar()
        if scalar == 1:
            return ReadyResponse(status="ready", database="connected")
        raise RuntimeError("Unexpected ping response")
    except Exception as exc:
        logger.error("Database readiness check failed: %s", type(exc).__name__)
        return JSONResponse(
            status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
            content={"status": "unavailable", "database": "disconnected"},
        )
