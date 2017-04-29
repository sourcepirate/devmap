const initialState = {
    modelEdit: false,
    modelAdd: false,
    modelRemove: false,
    currentActiveNode: null,
    currentTree: null
}

export default function nodes(state = initialState, action) {

    switch (action.type) {

        case 'ADD_NODE':
            return {
                currentActiveNode: action.id,
                modelAdd: true,
                ...state
            };

        case 'REMOVE_NODE':
            return {
                ...state,
                currentActiveNode: action.id,
                modelRemove: true,
            };

        case 'CLOSE':
            return {
                ...state,
                modelAdd: false,
                modelRemove: false,
                modelEdit: false,
            };

        case 'LOAD_TREE':
            return { ...state,
                currentTree: action.id
            };

        case 'EDIT_NODE':
            return {
                ...state,
                currentActiveNode: action.id,
                modelEdit: true,
            };

        default:
            return state;
    }
}