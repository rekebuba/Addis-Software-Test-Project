import re


def to_camel(string: str) -> str:
    """Alias generator to convert snake_case → camelCase"""
    parts = string.split("_")
    return parts[0] + "".join(word.capitalize() for word in parts[1:])


def to_snake(s: str) -> str:
    # Replace dashes with underscores
    s = s.replace("-", "_")

    # Insert underscore before capital letters (except the first one)
    s = re.sub(r"(?<!^)(?=[A-Z])", "_", s)

    return s.lower()
