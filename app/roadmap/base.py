class Node(object):
    
    def __init__(self, id, name, description):
        self.id = id
        self.name = name
        self.description = description
        self.children = {}
        
    def add_node(self, key, node):
        self.children[key] = node
        return node
    
    def to_dict(self):
        result = {}
        result[self.id] = {"id": self.id, "label": self.name, "description": self.description, "children": {}}
        for child_key in self.children:
            result[self.id]["children"] = self.children[child_key].to_dict()
        return result