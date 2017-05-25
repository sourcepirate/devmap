import os
import sys
import os.path as path
from tinydb import TinyDB
sys.path.insert(0, path.abspath(path.join(path.dirname(__file__), '..')))
from models import RoadMap

DB_PATH = path.join(path.dirname(__file__), "../../data/data.json")

if __name__ == "__main__":
    db = TinyDB(DB_PATH)
    entries = db.all()
    print(len(entries))
    for entry in entries:
        name = entry["name"]
        print(name)
        r, _ = RoadMap.get_or_create(id=entry["id"], defaults={
            "name": "",
            "map":"",
            "description": ""
        })
        print(name)
        r.name = name
        r.map_json = entry["map"]
        r.save()