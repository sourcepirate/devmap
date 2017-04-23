export default function maps(state=[], action){
    switch(action.type){
        case 'UPDATE_MAPS':
            return [...state, ...action.maps];
        default:
            return state;
    }
}