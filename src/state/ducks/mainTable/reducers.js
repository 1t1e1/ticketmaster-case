import * as Actions from "./types";

const initialState = {
	data: {},
	events: [],
	page: {},
	links: [],
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
		case Actions.LOAD_EVENTS:
			return {
				data: action.payload,
				events: action.payload._embedded.events,
				page: action.payload.page,
				links: action.payload._links,
				isLoading: false,
			};
		case Actions.LOAD_ERROR:
			return {
				...state,
				errorMessage: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
}

export default eventsReducer;
