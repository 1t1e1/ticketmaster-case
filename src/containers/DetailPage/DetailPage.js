import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { req_for_id } from "../../constant";
import { getEvents } from "../../state/ducks/detailData/actions";

export default function DetailPage() {
	let { ticketId } = useParams();
	const { isLoading, data, errorMessage } = useSelector((state) => ({
		isLoading: state.detailData.isLoading,
		errorMessage: state.detailData.errorMessage,
		data: state.detailData.data,
	}));

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEvents(req_for_id(ticketId)));
		console.log("DetailPage -> req_for_id", req_for_id(ticketId));

		return () => {};
	}, []);

	if (isLoading) return <div> Loading in detail page </div>;

	return (
		<div>
			Detail page from container
			<p> id is {ticketId}</p>
			<p> {JSON.stringify(data, null, 4)} </p>
		</div>
	);
}
