import os
from flask import Flask
from flask_cors import CORS
from models import storage


def create_app(config_name: str) -> Flask:
    """
    Create a Flask application.

    Args:
        config_name (str): The configuration name. It can be 'testing', 'development', or any other value for production.

    Returns:
        Flask: The Flask application instance.

    The function performs the following tasks:
    - Initializes the Flask application.
    - Loads the appropriate configuration based on the provided config_name.
    - Initializes the database with the application context.
    - Enables Cross-Origin Resource Sharing (CORS) for the specified routes.
    - Imports and registers the necessary blueprints for different parts of the application.
    """
    """ Create a Flask application """
    base_dir = os.path.abspath(os.path.dirname(__file__))
    static_dir = os.path.join(base_dir, "v1/static")
    app: Flask = Flask(__name__, static_folder=static_dir, static_url_path="/static")

    # Determine config class
    if config_name == "testing":
        from config import TestingConfig as config_class
    elif config_name == "development":
        from config import DevelopmentConfig as config_class
    else:
        from config import ProductionConfig as config_class

    # Load configuration
    app.config.from_object(config_class)

    # Call init_app to handle dynamic env loading
    config_class.init_app(app)

    db_uri: str = app.config["SQLALCHEMY_DATABASE_URI"]
    app.logger.info(f"Using database at {db_uri}")

    storage.init_app(app)

    # Enable CORS
    CORS(app, resources={r"/api/v1/*": {"origins": "*"}})

    # Import and register blueprints
    from api.v1.views.errors import errors
    from api.v1.views.auths import auth

    app.register_blueprint(errors)
    app.register_blueprint(auth)

    return app
