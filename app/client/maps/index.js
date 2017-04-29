import * as props from './properties';
import TreeNode from './node';

export function parseObjectTree(branch, isRoot = false) {
    var node = new TreeNode(branch.name, isRoot);
    for (var child of branch.children) {
        node.addChild(parseObjectTree(child, false));
    }
    return node;
}

export function parseTree(data) {
    if (data.children.length == 0) return;
    return parseObjectTree(data, true);
}

export function draw(canvas, data) {
    var ctx = canvas.getContext('2d');
    var tree = parseTree(data);
    console.log(tree);
    var context = tree.draw();
    // resize the canvas to fit the drawing...
    canvas.width = context.width + 25;
    canvas.height = context.height + 25;
    ctx.drawImage(context, 25, 25);
}

export function transform(data) {
    const result = {};
    for (let key in data) {
        const pair = data[key];
        console.log(pair);
        result["name"] = pair["label"];
        result["id"] = pair["id"];
        result["description"] = pair["description"];
        result["children"] = [];
        const childs = data[key]["children"];
        for (let child_key in childs) {
            const new_pair = {};
            new_pair[child_key] = childs[child_key];
            result["children"].push(transform(new_pair));
        }
    }
    return result;
}

export function find(data, id) {
    if (data['id'] === id) {
        return data;
    } else {
        for(let index in data.children){
            let child = data.children[index];
            let value = find(child, id);
            if(value)
               return value;
        }
    }
    return;
}