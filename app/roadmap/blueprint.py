from sanic import Blueprint
from sanic import response
from .base import RoadMap
from uuid import uuid4

endpoints = Blueprint("MapEndpoints")

@endpoints.get("/api/<_id>")
def get_root_map(request, _id):
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    return response.json(dct.to_dict(), status=200)
    
@endpoints.post("/api/new")
def create_root_map(request):
    key = str(uuid4())
    name = request.json.get("name")
    start = request.json.get("start_node")
    description = request.json.get("start_description")
    dct = RoadMap(key, name, start=(start, description))
    _id = dct.put()
    return response.json({"id":_id, "data":dct.to_dict()}, status=200)

@endpoints.get("/api/<_id>/get/<_child>")
def get_child_map(request, _id, _child):
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    cdct = dct.get(_child)
    return response.json(cdct.to_dict(), status=200)
    
@endpoints.post("/api/<_id>/add/<_node>")
def add_child(request, _id, _node):
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    key = str(uuid4())
    name = request.json.get("name")
    description = request.json.get("description")
    _mp = dct.create(_node, key, name, description)
    dct.put()
    return response.json(dct.to_dict(), status=200)
    
@endpoints.delete("/api/<_id>/add/<_node>")
def remove_child(request, _id, _node):
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    node = dct.delete(_node)
    return response.json(dct.to_dict(), status=200)