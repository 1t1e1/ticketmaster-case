import * as Actions from "./types";

const initialState = {
	imagesrc: "",
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
				imagesrc: action.payload.images.find(
					(image) => image.width === 640 && image.ratio === "3_2"
				).url,
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
