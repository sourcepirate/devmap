export function update(){
    return {
        type: 'FETCH_MAPS'
    }
}

export function removeMap(id){
    return {
        type: "REMOVE_MAP",
        id
    }
}