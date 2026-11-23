from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Application settings validated via Pydantic."""

    model_config = SettingsConfigDict(
        env_file=(".env", "../.env"),
        env_file_encoding="utf-8",
        extra="ignore",
    )

    APP_NAME: str = "Smart Shopping Guide"
    APP_ENV: str = "development"
    APP_VERSION: str = "1.0.0"

    FRONTEND_URL: str = "http://localhost:3000"
    BACKEND_URL: str = "http://localhost:8000"

    POSTGRES_DB: str = "smart_shopping_guide"
    POSTGRES_USER: str = "smartshopping"
    POSTGRES_PASSWORD: str = "change_me"

    DATABASE_URL: str = (
        "postgresql+asyncpg://smartshopping:change_me@localhost:5432/smart_shopping_guide"
    )

    SECRET_KEY: str = "replace_me"
    LOG_LEVEL: str = "INFO"

    @property
    def cors_origins(self) -> list[str]:
        """Allowed CORS origins."""
        origins = [
            self.FRONTEND_URL,
            "http://localhost:3000",
            "http://127.0.0.1:3000",
        ]
        return list(dict.fromkeys(origins))


@lru_cache
def get_settings() -> Settings:
    """Cached settings singleton."""
    return Settings()
