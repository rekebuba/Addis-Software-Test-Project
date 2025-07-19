import os
from typing import Any, Callable, Dict, List
from flask import current_app
from math import ceil
from sqlalchemy import UnaryExpression, and_, true
from werkzeug.utils import secure_filename
from werkzeug.datastructures import FileStorage
from sqlalchemy.sql.elements import ColumnElement
from sqlalchemy.orm import Query


def paginate_query(
    query: Query[Any],
    page: int,
    limit: int,
    filters: List[ColumnElement[Any]],
    sort: List[UnaryExpression[Any]],
    join_: Callable[..., ColumnElement[Any]] = and_,
) -> Dict[str, Any]:
    """
    Paginate SQLAlchemy queries.

    query: SQLAlchemy query object to paginate
    page: Current page number
    limit: Number of records per page
    filters: List of filter conditions
    custom_filters: List of custom filter conditions
    sort: List of sort conditions
    join: Function to join filters (default: and_)
    (return): Dictionary with paginated data and meta information
    """

    # Calculate total number of records
    total_items = query.count()
    # Apply filters and sort
    if filters:
        query = query.having(and_(true(), *filters))

    if sort:
        query = query.order_by(true(), *sort)

    # Calculate offset and apply limit and offset to the query
    offset = (page - 1) * limit
    paginated_query = query.limit(limit).offset(offset)

    # Get the paginated results
    items = paginated_query.all()

    # Calculate total pages
    total_pages = ceil(total_items / limit)

    return {
        "items": items,
        "meta": {
            "total_items": total_items,
            "current_page": page,
            "per_page": limit,
            "total_pages": total_pages,
        },
    }


def save_profile(file: FileStorage) -> str:
    """Save the uploaded file to the server and return the file path."""
    filename = secure_filename(file.filename)
    base_dir = os.path.abspath(os.path.dirname("static"))
    static_dir = os.path.join(base_dir, "api/v1/static")
    upload_folder = os.path.join(static_dir, current_app.config["UPLOAD_FOLDER"])

    # Ensure the upload folder exists
    os.makedirs(upload_folder, exist_ok=True)

    filepath = os.path.join(upload_folder, filename)
    file.save(filepath)

    # Return the relative file path
    return os.path.join(current_app.config["UPLOAD_FOLDER"], filename)
