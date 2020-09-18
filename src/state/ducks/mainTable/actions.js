import * as Actions from "./types";
import Axios from "axios";
import { request_url } from "../../../constant";

const getEvents = () => {
	return (dispatch) => {
		dispatch({
			type: Actions.LOAD_START,
		});
		Axios.get(`${request_url}`)
			.then((result) => {
				dispatch({ type: Actions.LOAD_EVENTS, payload: result.data });
			})
			.catch((error) => {
				console.log("reducer", error);
				dispatch({ type: Actions.LOAD_ERROR, payload: error });
			});
	};
};

export { getEvents };
