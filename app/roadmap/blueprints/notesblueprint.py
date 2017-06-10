"""blue print for notes module"""

import traceback
from json import dumps
from sanic import Blueprint
from sanic import response
from peewee import PeeweeException
from roadmap.models.notes import ResearchNotes

notes = Blueprint("NotesBlueprint")

@notes.get("notes/list")
def list_all_notes(request):
    """list all notes available"""
    records = ResearchNotes.all_notes()
    return response.json(records, status=200)

@notes.get("notes/get/<_id>")
def get_notes(request, _id):
    """get the note by id"""
    try:
        record = ResearchNotes.get(ResearchNotes.id == _id)
        if record:
            return response.json(record, status=200)
        return response.json({"error": "Not Found"}, status=404)
    except PeeweeException:
        return response.json({"error": "Not Found"}, status=404)

@notes.post("notes/create")
def create_notes(request):
    """create a new ipython notebook view"""
    json_re = request.json
    print(json_re.keys())
    try:
        name = json_re.get("name")
        content = json_re.get("content")
        entity = ResearchNotes.create_notes(name, dumps(content))
        print(entity)
        return response.json(entity, status=200)
    except PeeweeException:
        print(traceback.format_exc())
        return response.json({"error": "Invalid params"}, status=500)


@notes.delete("notes/delete/<_id>")
def delete_note(request, _id):
    """delete a notebook"""
    flag = ResearchNotes.delete_note(_id)
    return response.json({"Success": flag})
