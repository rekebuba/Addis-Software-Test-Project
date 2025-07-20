import uuid
from pydantic import BaseModel, ConfigDict

from extension.functions.helper import to_camel


class InvalidCredentialsError(Exception):
    """Exception raised when invalid credentials are provided."""

    pass


class AuthResponseSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel,
    )

    api_key: str
    id: uuid.UUID


class AuthSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel,
    )

    name: str
    email: str
    password: str
