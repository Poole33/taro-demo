const INIT_STATE = {
    info: {}
}

export default function detail(state = INIT_STATE, action) {
	switch(action.type) {
		case 'SET_DETAIL': {
				return {
						...state,
						info: action.payload.detail
				}
		}
		default: return state
	}
}