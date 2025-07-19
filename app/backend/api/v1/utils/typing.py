from typing import TypeVar
from models.base.base_model import Base


T = TypeVar("T")  # Fully generic

BaseT = TypeVar("BaseT", bound="Base")
