export function fetchNotes(){
    return {
        type: "FETCH_NOTES"
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
        type: "CREATE_NOTES",
        payload: {
            name,
            content
        }
    }
}


export function getNote(id){
    return {
        type: "GET_NOTE",
        id
    }
}


export function deleteNote(id){
    return {
        type: "DELETE_NOTE",
        id
    }
}