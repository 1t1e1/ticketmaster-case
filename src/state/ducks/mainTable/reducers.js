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
			if (action.payload.page.totalElements == 0)
				return {
					errorMessage: "there is no element by this keyword ",
					page: action.payload.page,
					links: action.payload._links,
					isLoading: false,
				};

			return {
				data: action.payload,
				events: action.payload._embedded.events,
				page: action.payload.page,
				links: action.payload._links,
				isLoading: false,
			};
		// catch blogu calisiyor ama  error vermemis oludur.
		case Actions.LOAD_ERROR:
			return {
				// ...state,
				errorMessage: action.payload,
				isLoading: false,
			};
		default:
			return state;
	}
}

export default eventsReducer;
