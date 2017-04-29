export function editTreeNode(id, parent, data) {
    return {
        type: 'EDIT_TREE_NODE',
        payload: {
            id,
            parent,
            data
        }
    }
}

export function createTreeNode(id, parent, data){
    return {
        type: 'CREATE_TREE_NODE',
        payload: {
            id,
            parent,
            data
        }
    }
}

export function removeTreeNode(id, parent){
    return {
        type: 'REMOVE_TREE_NODE',
        payload: {
            id,
            parent
        }
    }
}