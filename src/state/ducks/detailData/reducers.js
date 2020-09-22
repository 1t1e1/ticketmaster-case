import * as Actions from "./types";

const initialState = {
	data: {},
	isLoading: false,
	errorMessage: "",
};

function eventsReducer(state = initialState, action) {
	switch (action.type) {
		case Actions.LOAD_START:
			return {
				...state,
				isLoading: true,
			};

		case Actions.LOAD_DETAIL:
			return {
				data: action.payload,
				isLoading: false,
			};

		case Actions.LOAD_ERROR:
			return {
				errorMessage: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
}

export default eventsReducer;
