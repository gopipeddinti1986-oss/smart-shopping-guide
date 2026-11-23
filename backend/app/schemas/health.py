from pydantic import BaseModel, ConfigDict


class HealthResponse(BaseModel):
    """Schema for liveness probe response."""

    model_config = ConfigDict(extra="forbid")

    status: str
    application: str
    version: str


class ReadyResponse(BaseModel):
    """Schema for readiness probe response."""

    model_config = ConfigDict(extra="forbid")

    status: str
    database: str
