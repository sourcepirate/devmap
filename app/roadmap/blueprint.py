"""blueprint for roadmap"""

from uuid import uuid4
from sanic import Blueprint
from sanic import response
from .base import RoadMap


endpoints = Blueprint("MapEndpoints")


@endpoints.get("/api/<_id>")
def get_root_map(request, _id):
    """getting road map root node"""
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    return response.json(dct.to_dict(), status=200)


@endpoints.post("/api/new")
def create_root_map(request):
    """creating root map"""
    key = str(uuid4())
    name = request.json.get("name")
    start = request.json.get("start_node")
    description = request.json.get("start_description")
    dct = RoadMap(key, name, start=(start, description))
    _id = dct.put()
    return response.json(dct.to_dict(), status=200)


@endpoints.get("/api/<_id>/get/<_child>")
def get_child_map(request, _id, _child):
    """child map"""
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    cdct = dct.get(_child)
    return response.json(cdct.to_dict(), status=200)


@endpoints.post("/api/<_id>/add/<_node>")
def add_child(request, _id, _node):
    """add child to the existing tree"""
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    key = str(uuid4())
    print("Serial No", dct.sno)
    name = request.json.get("name")
    description = request.json.get("description")
    _mp = dct.create(_node, key, name, description)
    dct.put()
    return response.json(dct.to_dict(), status=200)


@endpoints.delete("/api/<_id>/delete/<_node>")
def remove_child(request, _id, _node):
    """remove child to the existing tree"""
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    dct.delete(_node)
    dct.put()
    return response.json(dct.to_dict(), status=200)


@endpoints.put("/api/<_id>/edit/<_node>")
def edit_child(request, _id, _node):
    """edit child to the existing tree"""
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    dct.update(_node, **request.json)
    dct.put()
    return response.json(dct.to_dict(), status=200)
