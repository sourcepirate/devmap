import traceback
from uuid import uuid4
from sanic import Blueprint
from sanic import response
from json import dumps
from roadmap.models.notes import ResearchNotes

notes = Blueprint("NotesBlueprint")


@notes.get("notes/list")
def list_all_notes(request):
    records = ResearchNotes.all_notes()
    return response.json(records, status=200)

@notes.get("notes/get/<_id>")
def get_notes(request, _id):
    try:
        record = ResearchNotes.get(ResearchNotes.id == _id)
        if record:
            return response.json(record, status=200)
        return response.json({"error": "Not Found"}, status=404)
    except:
        return response.json({"error": "Not Found"}, status=404)
    
@notes.post("notes/create")
def create_notes(request):
    json_re = request.json
    try:
        name = json_re.get("name")
        content = json_re.get("content")
        entity = ResearchNotes.create_notes(name, dumps(content))
        print(entity)
        return response.json(entity, status=200)
    except:
        print(traceback.format_exc())
        return response.json({"error": "Invalid params"}, status=500)
        
@notes.delete("notes/delete/<_id>")
def delete_note(request, _id):
    flag = ResearchNotes.delete_note(_id)
    return response.json({"Success": flag})