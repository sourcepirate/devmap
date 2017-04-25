export default function maps(state=[], action){
    switch(action.type){
        case 'UPDATE_MAPS':
            return [...action.maps];
        default:
            return state;
    }
}