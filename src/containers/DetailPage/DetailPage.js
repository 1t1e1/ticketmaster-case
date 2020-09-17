import React from "react";
import { useParams } from "react-router-dom";

export default function DetailPage() {
	let { ticketId } = useParams();
	console.log(ticketId);
	return (
		<div>
			Detail page from container
			<p> id is {ticketId}</p>
		</div>
	);
}
