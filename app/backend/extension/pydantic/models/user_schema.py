from __future__ import annotations
import uuid
from typing import Optional
from pydantic import BaseModel, ConfigDict

from extension.functions.helper import to_camel


class UserSchema(BaseModel):
    model_config = ConfigDict(
        from_attributes=True,
        populate_by_name=True,
        alias_generator=to_camel,
    )

    id: uuid.UUID
    username: str
    image_path: Optional[str] = None
