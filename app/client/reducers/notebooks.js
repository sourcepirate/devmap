export function notebook(state=[], action){
    switch(action.type){
        case 'UPDATE_NOTES':
            return [...notes]
        case 'NEW_NOTE':
            return [...state, {name: action.name, id: action.id}]
        case 'DELETE_NOTE':
            return state.map((x) => x.id != action.id)
        default:
            return state
    }
}


export function showing(state={id: '', name: '', content: ''}, action){
    switch(action.type){
        case 'SHOW_NOTE':
            return action.note
        default:
            return state
    }
}