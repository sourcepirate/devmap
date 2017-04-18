from sanic import Blueprint
from sanic import response
from .base import RoadMap

endpoints = Blueprint("MapEndpoints")

@endpoints.get("/api/<_id>")
def get_root_map(request, _id):
    dct = RoadMap.get_map(_id)
    if not dct:
        return response.json({"Error": "Not Found"}, status=404)
    return response.json(dct.to_dict(), status=200)