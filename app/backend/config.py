import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()


class Config:
    # General secret key for the application
    SECRET_KEY = os.getenv("SECRET_KEY")
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # File upload configuration
    UPLOAD_FOLDER = "uploads"

    secret_id = os.getenv("SECRET_ID")


class DevelopmentConfig(Config):
    DEBUG = True

    @staticmethod
    def init_app(app):
        user = os.getenv("DEV_MYSQL_USER")
        password = os.getenv("DEV_MYSQL_PWD")
        host = os.getenv("DB_HOST", "localhost")
        db = os.getenv("DEV_MYSQL_DB")
        print(f"Connecting to database: {db} at {host} with user: {user}")
        if not all([user, password, host, db]):
            raise ValueError("Missing required environment variables for db connection")

        app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://{user}:{password}@{host}/{db}"


class ProductionConfig(Config):
    DEBUG = False


class TestingConfig(Config):
    """Testing configuration."""

    TESTING = True
    DEBUG = True

    @staticmethod
    def init_app(app):
        user = os.getenv("TEST_MYSQL_USER")
        password = os.getenv("TEST_MYSQL_PWD")
        host = os.getenv("DB_HOST", "localhost")

        db = os.getenv("TEST_MYSQL_DB")

        if not all([user, password, host, db]):
            raise ValueError("Missing required environment variables for db connection")

        app.config["SQLALCHEMY_DATABASE_URI"] = f"mysql://{user}:{password}@{host}/{db}"
        app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
