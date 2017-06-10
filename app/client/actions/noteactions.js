export function fetchNotes(){
    return {
        type: "FETCH_NOTEBOOKS"
    }
}

export function updateNotes(notes){
    return {
        type: "UPDATE_NOTES",
        notes: notes
    }
}

export function createNotes(name, content){
    return {
        type: "CREATE_NOTEBOOK",
        payload: {
            name,
            content
        }
    }
}


export function getNote(id){
    return {
        type: "VIEW_NOTEBOOK",
        id
    }
}


export function deleteNote(id){
    return {
        type: "DELETE_NOTEBOOK",
        id
    }
}