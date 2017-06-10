import traceback
from .base import BaseModel
import peewee as db
from uuid import uuid4
from json import loads, dumps

class ResearchNotes(BaseModel):
    id = db.CharField(primary_key=True)
    name = db.CharField(null=False)
    content = db.TextField(null=True)

    @classmethod
    def create_notes(cls, name, content):
        entity = cls.create(name=name, content=content, id=str(uuid4()))
        entity.save()
        return entity

    @classmethod
    def all_notes(cls):
        try:
            entities = cls.select(cls.id, cls.name).execute()
            print("selecting ", entities)
            return entities
        except:
            print(traceback.format_exc())
            return []

    @classmethod
    def delete_note(cls, id):
        try:
            query = cls.delete().where(cls.id == id)
            query.execute()
            return True
        except:
            print(traceback.format_exc())
            return False