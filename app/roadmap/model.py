import os
import os.path as path
import peewee as db


db_path = path.join(path.dirname(__file__), "../data/data.db")
database = db.SqliteDatabase(db_path)

class BaseModel(db.Model):
    """Base Model for all documents"""
    class Meta:
        database = database

class Categories(BaseModel):
    """Adding new categories"""
    name = db.CharField(max_length=250, null=False)
    key = db.UUIDField(primary_key=True)

class Gist(BaseModel):
    """Adding gist to categories"""
    catagory = db.ForeignKeyField(Categories, related_name="key")
    url = db.CharField(max_length=255, null=False)
    name = db.CharField(max_length=255, null=False)

def create_required():
    """create required tables at start"""
    db.create_tables([Categories, Gist], safe=True)
