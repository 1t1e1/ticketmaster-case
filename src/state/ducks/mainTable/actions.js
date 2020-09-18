import * as Actions from "./types";
import Axios from "axios";

const getEvents = (url) => {
	return (dispatch) => {
		dispatch({
			type: Actions.LOAD_START,
		});
		Axios.get(`${url}`)
			.then((result) => {
				dispatch({ type: Actions.LOAD_EVENTS, payload: result.data });
			})
			.catch((error) => {
				console.log("action error ", error);
				dispatch({ type: Actions.LOAD_ERROR, payload: error });
			});
	};
};

export { getEvents };
