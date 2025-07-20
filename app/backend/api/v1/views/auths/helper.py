from datetime import datetime, timedelta
import uuid
import bcrypt
from flask import current_app
import jwt

from extension.enums.enum import RoleEnum


def hash_password(v: str) -> str:
    return bcrypt.hashpw(v.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def check_password(stored_password: str, provided_password: str) -> bool:
    """Check if the provided password matches the stored hashed password."""
    return bcrypt.checkpw(
        provided_password.encode("utf-8"), stored_password.encode("utf-8")
    )


def create_token(user_id: uuid.UUID) -> str:
    """
    Generate a JWT token for a user.

    Returns:
        str: A JWT token encoded with the user's ID, expiration time, and a unique JTI.

    The token expires in 720 minutes (12 hours) from the time of creation.
    """
    # Determine the secret key based on the role
    secret_key: str = current_app.config["SECRET_KEY"]
    role: RoleEnum = RoleEnum.USER  # Default role, can be modified based on user role

    # Create the payload
    payload = {
        "id": str(user_id),
        "exp": datetime.utcnow() + timedelta(minutes=720),  # 12 hours expiration
        "role": role.value,
        "jti": str(uuid.uuid4()),  # Unique token identifier
    }

    # Encode and return the token
    token = jwt.encode(payload, secret_key, algorithm="HS256")
    return token
