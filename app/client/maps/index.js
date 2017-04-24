import * as props from './properties';
import TreeNode from './node';

export function parseObjectTree(branch, isRoot = false) {
    var node = new TreeNode(branch.name, isRoot);

    for (var child of branch.children) {
        if (props.textFilter.test(child.name)) {
            node.addChild(parseObjectTree(child, false));
        }
    }
    return node;
}

export function parseTree(data) {
    if (data.children.length == 0) return;
    data = data.children[0];
    return parseObjectTree(data, true);
}

export function draw(canvas, data){
    var ctx = canvas.getContext('2d');
    var tree = parseTree(data);
    var context = tree.draw(); 
    // resize the canvas to fit the drawing...
    canvas.width = context.width + 25;
    canvas.height = context.height + 25;
    ctx.drawImage(context, 25, 25);
}