""" base objects for the app"""


class Map(object):
    """Map Object"""

    def __init__(self, _id, name, description):
        self.id = _id
        self.name = name
        self.description = description
        self.children = {}
        self._nodes = set()

    def add_node(self, node):
        """Add node to root"""
        self.children[node.id] = node
        self._nodes.add(node)
        return node

    def remove_node(self, node):
        """Remove node from the tree"""
        if node in self._nodes:
            self._nodes.remove(node)
            return self.children.pop(node.id)
        else:
            for child in self._nodes:
                value = child.remove_node(node)
                if value:
                    return value
        return None

    def find_node(self, node):
        """Find a node in a tree"""
        if node in self._nodes:
            return self.children[node.id]
        else:
            for child in self._nodes:
                value = child.remove_node(node)
                if value:
                    return value
        return None

    def change(self, **kwargs):
        """update the current node"""
        for arg in kwargs:
            value = kwargs[arg]
            if value:
                setattr(self, arg, value)
        return True

    def update_node(self, node, **kwargs):
        """Update a node in a tree"""
        for child in self._nodes:
            if child == node:
                child.change(**kwargs)
            else:
                child.update_node(node, **kwargs)

    def to_dict(self):
        """serialize the entire map to dict"""
        result = {}
        result[self.id] = {"id": self.id,
                           "label": self.name,
                           "description": self.description,
                           "children": {}}
        for child_key in self.children:
            result[self.id]["children"].update(
                self.children[child_key].to_dict())
        return result

    def __eq__(self, other):
        return self.id == other.id

    @property
    def depth(self):
        """depth of the entire tree"""
        if not self._nodes:
            return 1
        else:
            return 1 + max(x.depth for x in self._nodes)

    def level(self, k):
        """ Get all nodes on the same level"""
        if k == 0:
            return [self]
        else:
            result = []
            for child in self._nodes:
                result += child.level(k - 1)
            return result

    @classmethod
    def loads(cls, dct):
        """load from dict"""
        _map = None
        for key in dct:
            _map = cls.load(dct[key])
            children = dct["children"]
            for child in children:
                value = children[child]
                node = cls.loads(value)
                _map.add_node(node)
        return _map

    @classmethod
    def load(cls, dct_unit):
        """load from dict"""
        _id = dct_unit.get("id")
        name = dct_unit.get("label")
        description = dct_unit.get("description")
        return Map(_id, name, description)


class RoadMap(object):
    """Adding RoadMap base object"""

    def __init__(self, no_id, start=(None, None)):
        self._id = no_id
        self.root = Map(no_id, start[0], start[1])

    def create(self, *args):
        """Adding a new entry to the tree"""
        _map = Map(*args)
        self.root.add_node(_map)
        return _map

    def get(self, _id):
        """Get the subtree"""
        _node = Map(_id, None, None)
        return self.root.find_node(_node)

    def delete(self, _id):
        """Delete the subtree"""
        _node = Map(_id, None, None)
        return self.root.remove_node(_node)

    def update(self, _id, **kwargs):
        """update the subtree"""
        _node = Map(_id, None, None)
        return self.root.update_node(_node, **kwargs)

    def to_dict(self):
        """Get the dict"""
        return self.root.to_dict()
