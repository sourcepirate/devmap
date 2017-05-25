from .base import BaseModel
import peewee as db
from uuid import uuid4
from json import loads, dumps

class RoadMap(BaseModel):
    """Road map model"""
    id = db.CharField(primary_key=True)
    name = db.CharField(null=False)
    description = db.CharField()
    map = db.TextField()

    @property
    def map_json(self):
        """convert map property to json"""
        return loads(self.map)

    @map_json.setter
    def map_json(self, dct):
        self.map = dumps(dct)

    @classmethod
    def search(cls, _id):
        return cls.get(cls.id == _id)

