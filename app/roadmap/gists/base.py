import os
from github3 import login
from roadmap.model import Gist

GITHUB_USERNAME = os.environ.get("GITHUB_USERNAME")
GITHUB_PASSWORD = os.environ.get("GITHUB_PASSWORD")

client = login(GITHUB_USERNAME, GITHUB_PASSWORD)

def create_gist(name, description, roadmap=None):
    """create a new gist with existing name"""
    files = {}
    files[name] = {"content": ""}
    gist = client.create_gist(description, files=files, public=False)
    return gist

