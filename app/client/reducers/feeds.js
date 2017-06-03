export default function feeds(state=[], action){
    switch(action.type){
        case 'UPDATE_FEEDS':
            return [...action.feeds];
        default:
            return state;
    }
}