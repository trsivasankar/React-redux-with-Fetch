export default function(state={},action) {

    switch(action.type) {
        
        case 'GET_UPCOMING':
        return{...state,uMovie:action.payload}
        case 'GET_SELECTED_UPCOMING':
            return{...state,selected:action.payload}
        case 'POST_COURSES':
                return{...state,article:action.payload}
        case 'POST_FORM':
                return{...state,posted:action.payload}
        default:
            return state
    }

}