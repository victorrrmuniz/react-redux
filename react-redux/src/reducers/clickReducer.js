
import { CLICK_UPDATE_VALUE } from '../actions/actionTypes'

const initialState = {
	newValue: ''
}

export const clickReducer = (state = initialState, aciton) => {
	switch(aciton.type) {
		case CLICK_UPDATE_VALUE:	
			return {
				...state,
				newValue: aciton.newValue
			}
		default:
			return state
	}
}