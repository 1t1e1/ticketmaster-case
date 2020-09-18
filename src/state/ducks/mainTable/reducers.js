import * as Actions from "./types";

const initialState = {
	data: [],
	isLoading: false,
	errorMessage: "",
};

function refReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.LOAD_START:
			return {
				...state,
				isLoading: true,
			};
		case Actions.LOAD_EVENTS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case Actions.LOAD_ERROR:
			return {
				data: [],
				errorMessage: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
}

export default refReducer;
