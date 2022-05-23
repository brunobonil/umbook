from requests.api import post
from json import loads

"""
Script para cargar 100 registros de usuarios a la DB para realizar pruebas.
"""

with open('dummy_user_data.json', 'r') as f:
    raw_data = f.read()
    data = loads(raw_data)

    for row in data["rows"]:
        row["password2"] = row["password"]
        row["first_name"] = row["namefirst"]
        row["last_name"] = row["namelast"]
        post("http://localhost:8000/api/register/", data=row)
