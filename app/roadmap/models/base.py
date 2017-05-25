"""database base"""
import os
import traceback
import os.path as path
from threading import RLock
import peewee as db

DB_PATH = path.join(path.dirname(__file__), "../../data/data.db")
DATABASE = db.SqliteDatabase(DB_PATH)

class BaseModel(db.Model):
    """Base Model for all db"""
    class Meta:
        database = DATABASE

def create_tables(tables):
    """create a list of tables"""
    L = RLock()
    L.acquire()
    try:
        print("Trying to create a table")
        DATABASE.create_tables(tables)
        print("Table created successfully")
    except:
        print(traceback.format_exc())
        print("Table may already exist")
    L.release()
