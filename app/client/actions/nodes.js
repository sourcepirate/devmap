export function edit(id) {
    return {
        type: 'EDIT_NODE',
        id
    };
}

export function add(id) {
    return {
        type: 'ADD_NODE',
        id
    };
}

export function remove(id) {
    return {
        type: 'REMOVE_NODE',
        id
    };
}

export function loadTree(id) {
    return {
        type: 'LOAD_TREE',
        id: id
    };
}

export function close() {
    return {
        type: "CLOSE"
    };
}