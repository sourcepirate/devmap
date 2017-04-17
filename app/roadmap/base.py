class Map(object):
    
    def __init__(self, id, name, description):
        self.id = id
        self.name = name
        self.description = description
        self.children = {}
        self._nodes = set()
        
    def add_node(self, key, node):
        self.children[key] = node
        self._nodes.add(node)
        return node
    
    def to_dict(self):
        result = {}
        result[self.id] = {"id": self.id, "label": self.name, "description": self.description, "children": {}}
        for child_key in self.children:
            result[self.id]["children"] = self.children[child_key].to_dict()
        return result
        
    def __eq__(self, other):
        return self.id == other.id
        
    @property
    def depth(self):
        if not self._nodes:
            return 1
        else:
            return 1 + max(x.depth for x in self._nodes)