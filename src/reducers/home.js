const INIT_STATE = {
    list: []
}

export default function home(state = INIT_STATE, action) {
    switch(action.type) {
        case 'SET_LIST': {
            return {
                ...state,
                list: action.payload.list
            }
        }
        default: return state
    }
}