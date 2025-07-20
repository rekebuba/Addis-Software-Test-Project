#!/usr/bin/python3
"""Module for User class"""

from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column
from models.base.base_model import BaseModel


class User(BaseModel):
    """
    This module defines the User model which represents a user in the system. The User can have one of three roles: 'admin', 'teacher', or 'student'. Each user has a unique ID and a password.
    """

    __tablename__ = "users"
    name: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    email: Mapped[str] = mapped_column(String(120), unique=True, nullable=False)
    password: Mapped[str] = mapped_column(String(120), nullable=False)
    image_path: Mapped[str] = mapped_column(String(255), nullable=True, default=None)
