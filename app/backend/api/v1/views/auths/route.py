#!/usr/bin/python3
"""Public views module for the API"""

from typing import Tuple
from flask import Response, request
from sqlalchemy import select
from api.v1.views.auths import auth
from api.v1.views.auths.helper import check_password, create_token, hash_password
from extension.pydantic.models.user_schema import UserSchema
from extension.pydantic.response.schema import success_response
from models import storage
from api.v1.views.auths.schema import (
    AuthResponseSchema,
    AuthSchema,
    InvalidCredentialsError,
)
from models.user import User


@auth.route("auth/login", methods=["POST"])
def login() -> Tuple[Response, int]:
    """
    Handle user login by validating credentials and generating an access token.
    """
    user_auth_schema = AuthSchema.model_validate(request.get_json())
    user = storage.session.scalar(
        select(User).where(
            User.email == user_auth_schema.email,
        )
    )
    if not user:
        raise InvalidCredentialsError("User not found.")

    # Validate the password
    if not check_password(user.password, user_auth_schema.password):
        raise InvalidCredentialsError("Invalid password.")

    user_schema = UserSchema.model_validate(user)

    # Generate an api_key token based on the user's role
    api_key = create_token(user_schema.id, user_schema.role)

    auth_response = AuthResponseSchema(
        api_key=api_key,
        id=user_schema.id,
    )
    return success_response(
        message="logged in Successful.",
        data=auth_response,
    )


@auth.route("auth/signup", methods=["POST"])
def signup() -> Tuple[Response, int]:
    """
    Handle user signup by creating a new user and generating an access token.
    """
    user_auth_schema = AuthSchema.model_validate(request.get_json())
    existing_user = storage.session.scalar(
        select(User).where(
            User.email == user_auth_schema.email,
        )
    )
    if existing_user:
        raise InvalidCredentialsError("User already exists.")

    password = hash_password(user_auth_schema.password)

    # Create a new user
    new_user = User(
        name=user_auth_schema.name,
        email=user_auth_schema.email,
        password=password,
    )
    storage.session.add(new_user)
    storage.session.commit()

    user_schema = UserSchema.model_validate(new_user)

    # Generate an api_key token based on the user's role
    api_key = create_token(user_schema.id, user_schema.role)

    auth_response = AuthResponseSchema(
        api_key=api_key,
        id=user_schema.id,
    )
    return success_response(
        message="logged in Successful.",
        data=auth_response,
    )

    