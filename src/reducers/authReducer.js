let initialState = {
	isLoggedIn: false
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'SIMPLE_ACTION':
			return { ...state, isLoggedIn: action.payload }
		default:
			return state
	}
}
